import React from "react";
import "./Button.css";
export interface ButtonProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * What button text color to use
     */
    textColor?: string;
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
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const Button: ({ backgroundColor, textColor, size, onClick, label, }: ButtonProps) => JSX.Element;
export default Button;
