import { StarBorder } from "./ui/StarBorder";

const Button = ({
  label,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  withStarBorder = false,
  starSpeed = "5s",
  "aria-label": ariaLabel,
  ...props
}) => {
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

  const buttonElement = (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {label}
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
