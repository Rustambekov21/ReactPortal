import { SVGProps } from "react";


const Basket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M8 10V8H6v4.5a.5.5 0 0 1-1 0V7h3c0-2.404 1.952-4 4-4 2.057 0 4 1.706 4 4h3v12.5a1.5 1.5 0 0 1-1.5 1.5h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 0 .5-.5V8h-2v2h-1V8H9v2H8Zm4-6c-1.552 0-3 1.204-3 3h6c0-1.706-1.457-3-3-3Z"
    />
    <path
      fill="#000"
      d="M7.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H8v2.5a.5.5 0 0 1-1 0V18H4.5a.5.5 0 0 1 0-1H7v-2.5a.5.5 0 0 1 .5-.5Z"
    />
  </svg>
);
export default Basket;