const Container = ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1280px] mx-auto w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
