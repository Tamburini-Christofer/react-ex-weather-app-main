function Button({isActive, onClick, children, content,  customClass}) {
  return (
        <button 
            onClick={onClick}
            className={`${customClass} ${isActive ? "active" : ""}`}>
            {children}
            {content === "Units" ? <i class="fa-solid fa-gear"></i> : ""} { content }<i class="fa-solid fa-caret-down"></i> 
        </button>
  );
}

export default Button;
