import * as React from "react";
import classNames from 'classnames';
import "./Input.scss";
import { Alert } from "./Alert";

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
  variant?: "primary" | "danger" | "success";
  alertText?: string;
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
  alertText,
  variant,
  ...props
}: InputProps): JSX.Element => {
  return (
    <div className={classNames({
      "fgo-input": true,
      "fgo-input--primary": !disabled && variant === "primary",
      "fgo-input--danger": !disabled && variant === "danger",
      "fgo-input--success": !disabled && variant === "success",
      "fgo-input--locked": !!disabled,
    })}>
      <input
        name={name}
        type={type}
        className={classNames({
          "fgo-input__element": true,
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
      {alertText && (
        <Alert variant={variant}>
          {alertText}
        </Alert>
      )}
    </div>
  );
};

export default Input;
