const Button = ({children, className, onClick}) => {
  return (
    <button 
      type="button" 
      className={className}
      onClick={onClick}
      style={{margin: '5px'}}
    >
      {children}
    </button>
  )
}

export default Button;
