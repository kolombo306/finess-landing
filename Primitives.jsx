// Gold accent CTA with hover lift
const GoldButton = ({ children, href = "#", size = "md", className = "", ...rest }) => {
  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };
  return (
    <a
      href={href}
      className={`dz-gold-btn rounded-none text-center inline-block ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
};

const GhostButton = ({ children, href = "#", size = "md", className = "", ...rest }) => {
  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };
  return (
    <a
      href={href}
      className={`dz-ghost-btn rounded-none text-center inline-block ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
};

// Small gold-on-gold-tint icon square, used inside service/achievement cards
const IconSquare = ({ children, size = 48 }) => (
  <div
    className="rounded-none flex items-center justify-center flex-shrink-0"
    style={{ width: size, height: size, background: "rgba(212,168,67,0.10)" }}
  >
    {children}
  </div>
);

// Section eyebrow + H2 header (centered)
const SectionHeader = ({ eyebrow, title, className = "" }) => (
  <div className={`text-center ${className}`}>
    <div className="dz-eyebrow mb-3">{eyebrow}</div>
    <h2 className="dz-h2">{title}</h2>
  </div>
);

// Inline SVG icons — Heroicons outline style matching site
const IconCheck = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
  </svg>
);
const IconMonitor = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>
  </svg>
);
const IconPin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <circle cx="12" cy="11" r="3"/>
  </svg>
);
const IconNutrition = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Fork */}
    <path d="M7 3v6a2 2 0 0 0 2 2v10"/>
    <path d="M5 3v5"/>
    <path d="M9 3v5"/>
    {/* Spoon */}
    <ellipse cx="16.5" cy="6" rx="2.5" ry="3.5"/>
    <path d="M16.5 9.5V21"/>
  </svg>
);
const IconScale = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v4"/>
    <path d="M8 7h8"/>
    <path d="M5 21h14"/>
    <path d="M7 21l1-14h8l1 14"/>
    <path d="M10 11h4"/>
  </svg>
);
const IconTelegram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212-.07-.062-.174-.041-.249-.024-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);
const IconInstagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

Object.assign(window, { GoldButton, GhostButton, IconSquare, SectionHeader, IconCheck, IconMonitor, IconPin, IconTelegram, IconInstagram, IconNutrition, IconScale });
