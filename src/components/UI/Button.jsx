import React from 'react';

const Button = ({ 
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick = () => {},
  className = '',
  icon = null,
  type = 'button',
  ...props
}) => {
  
  
  const baseStyles = "font-bold transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2";
  

  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-orange-600 text-black hover:shadow-xl hover:scale-105 focus:ring-orange-500",
    secondary: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black focus:ring-orange-500",
    outline: "border-2 border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
    dark: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-600"
  };
  
 
  const sizes = {
    small: "px-4 py-2 text-sm rounded-lg",
    medium: "px-6 py-3 text-base rounded-lg",
    large: "px-8 py-4 text-lg rounded-xl",
    xl: "px-10 py-5 text-xl rounded-xl"
  };
  
  
  const disabledStyles = "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none";
  

  const loadingStyles = "cursor-wait";
  

  const buttonClasses = [
    baseStyles,
    variants[variant],
    sizes[size],
    disabled ? disabledStyles : '',
    loading ? loadingStyles : '',
    className
  ].filter(Boolean).join(' ');
  
  const handleClick = (e) => {
    if (!disabled && !loading) {
      onClick(e);
    }
  };
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
      )}
      
      {icon && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      
      {children}
    </button>
  );
};


export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;
export const OutlineButton = (props) => <Button variant="outline" {...props} />;
export const GhostButton = (props) => <Button variant="ghost" {...props} />;
export const DangerButton = (props) => <Button variant="danger" {...props} />;
export const SuccessButton = (props) => <Button variant="success" {...props} />;
export const DarkButton = (props) => <Button variant="dark" {...props} />;

export default Button;