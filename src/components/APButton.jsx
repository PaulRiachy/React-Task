
function APButton({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      className={`ap-button ${className}`}
      onClick={onClick}
    >
      {children}
      
    </button>
  );
}

export default APButton;

