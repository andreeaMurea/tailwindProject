import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
  width: string;
  className: string;
}

const Button: React.FC<Props> = ({ 
    className,
    border,
    color,
    children,
    onClick, 
    width
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         width      
        }}
      className={className}
    >
    {children}
    </button>
  );
}

export default Button;
