import * as React from "react"

type SVGIconProps = {
    size?: string
} & React.SVGProps<SVGSVGElement>

const ConsoleIcon = ({ size = '34px', ...otherProps }: SVGIconProps) => (
     <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size} height={size}
    {...otherProps}
  >
    <path fill="#95a5a6" d="M0 22h24l-4-6H4l-4 6" />
    <path fill="#f1c40f" d="M2 4h20v17H2z" />
    <path fill="#ecf0f1" d="M4 11h9v9H4zM14 12h6v9h-6z" />
    <path fill="#f39c12" d="M2 9h20v4H2z" />
    <path fill="#bdc3c7" d="M14 11h6v1h-6zM4 11h9v2H4z" />
    <path fill="#c0392b" d="M0 8v1.5c0 .8.672 1.5 1.5 1.5S3 10.3 3 9.5V8H0z" />
    <path fill="#bdc3c7" d="M3 8v1.5c0 .8.672 1.5 1.5 1.5S6 10.3 6 9.5V8H3z" />
    <path fill="#c0392b" d="M6 8v1.5c0 .8.672 1.5 1.5 1.5S9 10.3 9 9.5V8H6z" />
    <path
      fill="#bdc3c7"
      d="M9 8v1.5c0 .8.672 1.5 1.5 1.5s1.5-.7 1.5-1.5V8H9z"
    />
    <path
      fill="#c0392b"
      d="M12 8v1.5c0 .8.672 1.5 1.5 1.5s1.5-.7 1.5-1.5V8h-3z"
    />
    <path
      fill="#bdc3c7"
      d="M15 8v1.5c0 .8.672 1.5 1.5 1.5s1.5-.7 1.5-1.5V8h-3z"
    />
    <path
      fill="#c0392b"
      d="M18 8v1.5c0 .8.672 1.5 1.5 1.5s1.5-.7 1.5-1.5V8h-3z"
    />
    <path
      fill="#bdc3c7"
      d="M21 8v1.5c0 .8.672 1.5 1.5 1.5s1.5-.7 1.5-1.5V8h-3z"
    />
    <path fill="#ecf0f1" d="M10 4h2v4H9z" />
    <path fill="#e74c3c" d="M12 4h2l1 4h-3z" />
    <path fill="#ecf0f1" d="M5 4h3L6 8H3z" />
    <path fill="#e74c3c" d="M8 4h2L9 8H6z" />
    <path fill="#ecf0f1" d="M16 4h-2l1 4h3z" />
    <path fill="#e74c3c" d="M19 4h-3l2 4h3zM2 4h3L3 8H0z" />
    <path fill="#ecf0f1" d="M22 4h-3l2 4h3z" />
    <path fill="#3498db" d="M15 13h4v8h-4z" />
    <path fill="#ecf0f1" d="M14 16h5v1h-5z" />
    <path fill="#bdc3c7" d="M19 12h1v1h-1z" />
    <path fill="#2980b9" d="M15 12h4v1h-4z" />
    <path fill="#bdc3c7" d="M14 12h1v1h-1z" />
    <path fill="#3498db" d="M5 12h7v7H5z" />
    <g fill="#ecf0f1">
      <path d="M4 15h9v1H4z" />
      <path d="M8 12h1v7H8zM1 4h22l-3.667-2H4.667L1 4" />
    </g>
    <path fill="#bdc3c7" d="M8 12h1v1H8zM1 3h22l-3.667-2H4.667L1 3" />
    <path fill="#7f8c8d" d="M1 3h22v1H1z" />
    <path fill="#2980b9" d="M15 18h4v3h-4z" />
    <path fill="#7f8c8d" d="M0 22h24v1H0z" />
    <path
      fill="#2980b9"
      d="M5 12v1h3v-1H5zm4 0v1h3v-1H9zM5 18v1h3v-1H5zm4 0v1h3v-1H9z"
    />
    <path
      fill="#c0392b"
      d="m2 4-.5 1h3L5 4H2zm5 0-.25 1h3L10 4H7zm5 0v1h2.25L14 4h-2zm4 0 .5 1h3L19 4h-3z"
    />
    <path
      fill="#bdc3c7"
      d="m5 4-.5 1h3.001L8 4zm5 0-.25 1H12V4zm4 0 .25 1h2.25L16 4zm5 0 .5 1h3L22 4z"
    />
  </svg>
)
export default ConsoleIcon
