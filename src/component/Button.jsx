import { StarBorder } from "./ui/StarBorder";
import { useState } from "react";

const Button = ({
  label,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  withStarBorder = false,
  starSpeed = "5s",
  ripple = true,
  "aria-label": ariaLabel,
  ...props
}) => {
  const [ripples, setRipples] = useState([]);
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300";
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    general: "bg-black border-2 border-[#FF8000] text-white font-bold hover:bg-[#FF8000]/10 px-8 py-4 rounded-xl transition-all",
    comman: "bg-black border-2 border-[#FF8000] text-white font-bold hover:bg-[#FF8000]/10 px-8 py-4 rounded-xl transition-all",
    animatedBtn: "btn-primary", // Fallback to primary
  };

  const handleRippleClick = (e) => {
    if (ripple) {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rippleId = Date.now();

      setRipples(prev => [...prev, { x, y, id: rippleId }]);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== rippleId));
      }, 600);
    }

    if (onClick) {
      onClick(e);
    }
  };

  const buttonElement = (
    <button
      type={type}
      onClick={handleRippleClick}
      className={`${baseStyles} ${variants[variant]} ${className} relative overflow-hidden`}
      aria-label={ariaLabel}
      {...props}
    >
      {label}

      {/* Ripple effects */}
      {ripple && ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple-effect"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </button>
  );

  if (withStarBorder) {
    return (
      <StarBorder speed={starSpeed}>
        {buttonElement}
      </StarBorder>
    );
  }

  return buttonElement;
};

export default Button;











