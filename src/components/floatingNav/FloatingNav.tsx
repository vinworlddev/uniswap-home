import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FloatingNav.css';

interface FloatingNavProps {
  position?: 'center' | 'left' | 'right'; // Initial position
  draggable?: boolean; // Allow dragging (default: false)
}

const FloatingNav: React.FC<FloatingNavProps> = ({
  position = 'right',
  draggable = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });

  // Legal routes configuration
  const legalRoutes = [
    { path: '/terms', icon: '📋', label: 'Terms & Conditions', color: '#10b981' },
    { path: '/privacy', icon: '🔒', label: 'Privacy Policy', color: '#10b981' },
    { path: '/escrow-policy', icon: '⚖️', label: 'Escrow Policy', color: '#10b981' },
    { path: '/escrow-guide', icon: '🛡️', label: 'Escrow Guide', color: '#34d399' },
    { path: '/ticketing-terms', icon: '🎟️', label: 'Ticketing Terms', color: '#10b981' },
    { path: '/organizer-terms', icon: '🎪', label: 'Organizer Terms', color: '#10b981' }
  ];

  // Initialize position based on prop
  useEffect(() => {
    if (!draggable) {
      const centerY = window.innerHeight / 2 - 35; // 35 = half button height

      let initialX = window.innerWidth - 90; // Right side (default)
      if (position === 'left') initialX = 20;
      if (position === 'center') {
        initialX = window.innerWidth / 2 - 35; // Center
      }

      setDragPosition({ x: initialX, y: centerY });
    }
  }, [position, draggable]);

  // Handle drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!draggable) return;
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX - dragPosition.x,
      y: e.clientY - dragPosition.y
    };
  };

  // Handle drag move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !draggable) return;

      const newX = e.clientX - dragStartPos.current.x;
      const newY = e.clientY - dragStartPos.current.y;

      // Keep within viewport bounds
      const maxX = window.innerWidth - 70;
      const maxY = window.innerHeight - 70;

      setDragPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, draggable]);

  // Toggle menu
  const toggleMenu = () => {
    if (!isDragging) {
      setIsOpen(!isOpen);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={buttonRef}
      className={`floating-nav position-${position} ${isOpen ? 'open' : ''} ${isDragging ? 'dragging' : ''}`}
      style={draggable ? {
        left: `${dragPosition.x}px`,
        top: `${dragPosition.y}px`
      } : undefined}
    >
      {/* Main Button */}
      <button
        className="floating-nav-button"
        onClick={toggleMenu}
        onMouseDown={handleMouseDown}
        aria-label="Legal Navigation Menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )}
      </button>

      {/* Expanded Menu */}
      {isOpen && (
        <div className="floating-nav-menu">
          <div className="menu-header">
            <h3>Legal Documents</h3>
            <p>Quick access to policies</p>
          </div>

          <div className="menu-items">
            {legalRoutes.map((route, index) => (
              <Link
                key={route.path}
                to={route.path}
                className="menu-item"
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  '--item-color': route.color
                } as React.CSSProperties}
              >
                <span className="item-icon">{route.icon}</span>
                <span className="item-label">{route.label}</span>
                <span className="item-arrow">→</span>
              </Link>
            ))}
          </div>

          <div className="menu-footer">
            <button onClick={() => setIsOpen(false)} className="close-button">
              Close Menu
            </button>
          </div>
        </div>
      )}

      {/* Draggable Hint */}
      {draggable && !isOpen && (
        <div className="drag-hint">⋮⋮</div>
      )}
    </div>
  );
};

export default FloatingNav;