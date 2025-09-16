import { supabase } from '../service/supabase'

export interface WaitlistSubscriber {
	id: string;
	email: string;
	created_at: string;
	unsubscribed: boolean;
}

export interface WaitlistStats {
	totalSubscribers: number;
	todaySignups: number;
	weeklyGrowth: number;
	recentSubscribers: WaitlistSubscriber[];
	signupTrends: { date: string; count: number }[];
}

// Join waitlist
export const joinWaitlist = async (email: string): Promise<{ success: boolean; message: string }> => {
	try {
		console.log('Attempting to join waitlist with email:', email);

		// Check if email already exists
		const { data: existing, error: queryError } = await supabase
			.from('waitlist_subscribers')
			.select('id, unsubscribed')
			.eq('email', email)
			.maybeSingle(); // Use maybeSingle instead of single to avoid throwing error if no record found

		if (queryError) {
			console.error('Error checking existing email:', queryError);
			return { success: false, message: 'Error checking email. Please try again.' };
		}

		if (existing) {
			if (existing.unsubscribed) {
				// Reactivate if previously unsubscribed
				const { error: updateError } = await supabase
					.from('waitlist_subscribers')
					.update({ unsubscribed: false })
					.eq('id', existing.id);

				if (updateError) {
					console.error('Error reactivating subscriber:', updateError);
					return { success: false, message: 'Error reactivating subscription. Please try again.' };
				}

				return { success: true, message: 'Welcome back! You have been resubscribed.' };
			}
			return { success: false, message: 'This email is already on the waitlist.' };
		}

		// Add new subscriber
		const { error: insertError } = await supabase
			.from('waitlist_subscribers')
			.insert([{ email }]);

		if (insertError) {
			console.error('Error inserting new subscriber:', insertError);

			// Handle specific Supabase errors
			if (insertError.code === '23505') { // Unique violation
				return { success: false, message: 'This email is already on the waitlist.' };
			}

			return { success: false, message: 'An error occurred. Please try again.' };
		}

		return { success: true, message: 'Successfully joined the waitlist!' };
	} catch (error) {
		console.error('Unexpected error joining waitlist:', error);
		return { success: false, message: 'An unexpected error occurred. Please try again.' };
	}
};

// Unsubscribe from waitlist
export const unsubscribeFromWaitlist = async (email: string): Promise<{ success: boolean; message?: string }> => {
	try {
		const { error } = await supabase
			.from('waitlist_subscribers')
			.update({ unsubscribed: true })
			.eq('email', email);

		if (error) throw error;
		return { success: true };
	} catch (error) {
		console.error('Error unsubscribing:', error);
		return { success: false, message: 'Failed to unsubscribe' };
	}
};

// Get waitlist stats for admin
export const getWaitlistStats = async (): Promise<WaitlistStats> => {
	try {
		// Get total subscribers
		const { count: totalSubscribers } = await supabase
			.from('waitlist_subscribers')
			.select('*', { count: 'exact', head: true })
			.eq('unsubscribed', false);

		// Get today's signups
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		const { count: todaySignups } = await supabase
			.from('waitlist_subscribers')
			.select('*', { count: 'exact', head: true })
			.eq('unsubscribed', false)
			.gte('created_at', today.toISOString());

		// Get weekly growth
		const oneWeekAgo = new Date();
		oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
		oneWeekAgo.setHours(0, 0, 0, 0);

		const { count: lastWeekCount } = await supabase
			.from('waitlist_subscribers')
			.select('*', { count: 'exact', head: true })
			.eq('unsubscribed', false)
			.lt('created_at', oneWeekAgo.toISOString());

		const currentCount = totalSubscribers || 0;
		const previousCount = lastWeekCount || 0;

		let weeklyGrowth = 0;
		if (previousCount > 0) {
			weeklyGrowth = ((currentCount - previousCount) / previousCount) * 100;
		}

		// Get recent subscribers (last 10)
		const { data: recentSubscribers } = await supabase
			.from('waitlist_subscribers')
			.select('*')
			.eq('unsubscribed', false)
			.order('created_at', { ascending: false });

		// Get signup trends for chart (last 7 days)
		const signupTrends = [];
		for (let i = 6; i >= 0; i--) {
			const date = new Date();
			date.setDate(date.getDate() - i);
			date.setHours(0, 0, 0, 0);

			const nextDate = new Date(date);
			nextDate.setDate(nextDate.getDate() + 1);

			const { count } = await supabase
				.from('waitlist_subscribers')
				.select('*', { count: 'exact', head: true })
				.eq('unsubscribed', false)
				.gte('created_at', date.toISOString())
				.lt('created_at', nextDate.toISOString());

			signupTrends.push({
				date: date.toLocaleDateString(),
				count: count || 0
			});
		}

		return {
			totalSubscribers: totalSubscribers || 0,
			todaySignups: todaySignups || 0,
			weeklyGrowth: Math.round(weeklyGrowth),
			recentSubscribers: recentSubscribers || [],
			signupTrends
		};
	} catch (error) {
		console.error('Error fetching waitlist stats:', error);
		throw error;
	}
};

// Get waitlist count for public display
export const getWaitlistCount = async (): Promise<number> => {
	try {
		const { count } = await supabase
			.from('waitlist_subscribers')
			.select('*', { count: 'exact', head: true })
			.eq('unsubscribed', false);

		return count || 0;
	} catch (error) {
		console.error('Error fetching waitlist count:', error);
		return 0;
	}
};