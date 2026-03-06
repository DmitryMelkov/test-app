import React from 'react';

const Text = ({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) => (
  <span {...props}>{children}</span>
);

export default Text;
