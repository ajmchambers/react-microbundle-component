import * as React from "react";

export interface ItemProps {
    children?: React.ReactNode;
}

export const Item = ({
  children,
  ...props
}: ItemProps): JSX.Element => {
  return (
    <div className="fgo-item" {...props}>{children}</div>
  );
};

export default Item;
