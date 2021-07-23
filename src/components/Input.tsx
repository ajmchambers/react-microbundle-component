import * as React from "react";
import classNames from 'classnames';
import "./Input.scss";

export interface InputProps {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  inputmode?:
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";
  required?: boolean;
  disabled?: boolean;
  color?: "danger" | "success";
  onFocus?: (e?: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e?: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id,
  name,
  type,
  placeholder,
  value,
  inputmode = "text",
  required = false,
  disabled = false,
  color,
  ...props
}: InputProps): JSX.Element => {
  return (
    <React.Fragment>
      <input
        name={name}
        type={type}
        className={classNames({
          "fgo-input": true,
          "fgo-input--danger": !disabled && color === "danger",
          "fgo-input--success": !disabled && color === "success",
          "fgo-input--locked": !!disabled,
        })}
        placeholder={placeholder}
        id={id}
        required={required}
        value={value}
        autoComplete="off"
        inputMode={inputmode}
        disabled={!!disabled}
        {...props}
      />
    </React.Fragment>
  );
};

export default Input;
