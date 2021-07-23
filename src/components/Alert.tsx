import * as React from "react";
import "./Alert.scss";

export interface InputProps {
  children?: React.ReactNode;
  variant?: "primary" | "success" | "danger";
}

export const Alert = ({
  children,
  variant,
  ...props
}: InputProps): JSX.Element => {
  return (
    <p
      className={[
        "fgo-alert",
        variant ? `fgo-alert--${variant}` : "",
      ].join(" ")}
      {...props}
    >
      {children}
    </p>
  );
};

export default Alert;
