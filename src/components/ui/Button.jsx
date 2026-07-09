const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'font-heading font-bold text-lg px-8 py-4 transition-all duration-300 inline-block text-center';
  
  const variants = {
    primary: 'bg-accent text-primary hover:bg-accent/90',
    secondary: 'bg-white text-primary border border-white hover:bg-white/90',
    dark: 'bg-primary text-white hover:bg-primary/90',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
