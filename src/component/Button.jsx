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
  const baseStyles =
    "px-6 py-2 rounded-lg font-semibold transition duration-300";
  const variants = {
    primary:
      "bg-[#FFBF00] font-familjen border border-2 border-[#585858] text-black cursor-pointer font-semibold hover:text-white hover:bg-[#CB7608]",
    secondary:
      "bg-[#FFFFFF] font-familjen border border-3 border-[#585858] hover:border-[#CB7608] text-black cursor-pointer",
    general:
      "bg-[#1F1F1F] font-familjen text-black cursor-pointer rounded-sm font-semibold h-15",
    comman:
      "bg-[#F78D1E] font-familjen border border-2 border-[#585858] text-white cursor-pointer rounded-sm font-semibold",
    animatedBtn: "animated-border-btn text-black hover:text-white",
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
