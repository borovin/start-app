import { FC, ReactElement } from "react";

const Page: FC<{ children: ReactElement | ReactElement[] }> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default Page;
