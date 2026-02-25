const Button = ({ id, title, leftIcon, containerClass, onClick }) => {
  return (
    <button
      id={id}
      className={`px-4 py-2 rounded-md ${containerClass}`}
      onClick={onClick}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {title}
    </button>
  );
};

export default Button;
