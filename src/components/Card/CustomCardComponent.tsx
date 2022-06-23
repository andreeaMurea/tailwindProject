import React from "react";

interface Props {
  color: string;
  children?: React.ReactNode;
  width: string;
  className: string;
  title: string;

}

const Card: React.FC<Props> = ({ 
    className,
    color,
    children, 
    width,
    title
  }) => { 
  return (
    <div 
      style={{
         backgroundColor: color,
         width
        }}
      className={className}
    > 
    {title}
    {children}
    </div>
  );
}

export default Card;
