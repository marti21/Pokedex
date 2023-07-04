import * as React from "react"
const NextButton = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 21 21"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9.5 14.5 4-4-4-4"
    />
  </svg>
)
export default NextButton