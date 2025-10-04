function Button({isActive, onClick, children, customClass}) {
  return (
        <button 
            onClick={onClick}
            className={`${customClass} ${isActive ? "active" : ""}`}>
            {children}
            Day <i class="fa-solid fa-caret-down"></i> 
        </button>
  );
}

export default Button;
