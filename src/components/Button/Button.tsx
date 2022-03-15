import React from "react";
import "./Button.css";

export interface ButtonProps  {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What button text color to use
   */
  textColor?: string,
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};


const Button = ({
  backgroundColor,
  textColor,
  size = "medium",
  onClick,
  label,
}: ButtonProps) => {
  const isBack = backgroundColor;
  const isText = textColor;
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`].join(
        " "
      )}
      style={{ 
        backgroundColor: isBack ? backgroundColor: "", 
        color: isText ? textColor : "", 
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 15px" 
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;