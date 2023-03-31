import "./button.styles.css";

const Button = ({ handleClick, children, label }) => {
  return (
    <button
      className="btn btn-lg px-4 rounded-pill control-btn"
      onClick={handleClick}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default Button;
