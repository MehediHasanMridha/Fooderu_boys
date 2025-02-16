/* eslint-disable react/prop-types */
const variants = {
  primary:
    "text-white text-[14px] leading-[22px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00]",
  outline: "text-[#161616] text-[12px] border border-[#FFB800]",
};

// TODO: Need to think of responsiveness, onClick functions
const Button = ({ children, variant, className }) => {
  return (
    <button
      className={`w-full px-4 py-2 text-center rounded-[50px] font-inter ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
