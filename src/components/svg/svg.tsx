import { FunctionComponent } from "react";

type Props = {
  className: string;
};

const SVG: FunctionComponent<Props> = ({ className, children }) => (
  <svg
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

export type SVGProps = {
  className: string;
};

export default SVG;
