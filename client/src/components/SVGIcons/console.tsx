import * as React from "react"

type SVGIconProps = {
    size?: string
} & React.SVGProps<SVGSVGElement>

const ConsoleIcon = ({ size = '34px', ...otherProps }: SVGIconProps) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 58 58"
    width={size} height={size}
    {...otherProps}
  >
    <path
      d="M53 47H5L0 36V12h58v23.802z"
      style={{
        fill: "#546a79",
      }}
    />
    <path
      d="M53 47H5l3-25.005A3.995 3.995 0 0 1 11.995 18h34.009A3.996 3.996 0 0 1 50 21.995L53 47z"
      style={{
        fill: "#283238",
      }}
    />
    <path
      d="M11.995 18h34.009c1.359 0 2.555.682 3.277 1.718L58 12H0l8.718 7.718A3.988 3.988 0 0 1 11.995 18z"
      style={{
        fill: "#38454f",
      }}
    />
    <path
      d="M13 47v-5"
      style={{
        fill: "none",
        stroke: "#cbd4d8",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
      }}
    />
    <circle
      cx={13}
      cy={39}
      r={3}
      style={{
        fill: "#dd352e",
      }}
    />
    <path
      d="M18 44h5v3h-5z"
      style={{
        fill: "#ebba16",
      }}
    />
    <path
      d="M45 47v-5"
      style={{
        fill: "none",
        stroke: "#cbd4d8",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
      }}
    />
    <circle
      cx={45}
      cy={39}
      r={3}
      style={{
        fill: "#dd352e",
      }}
    />
    <path
      d="M35 44h5v3h-5z"
      style={{
        fill: "#ebba16",
      }}
    />
    <path
      d="M58 58H0v-7.447A3.553 3.553 0 0 1 3.553 47h50.895A3.553 3.553 0 0 1 58 50.553V58z"
      style={{
        fill: "#38454f",
      }}
    />
    <path
      d="M52 49h2v7h-2z"
      style={{
        fill: "#e7eced",
      }}
    />
    <circle
      cx={46.5}
      cy={52.5}
      r={2.5}
      style={{
        fill: "#23a24d",
      }}
    />
    <path
      d="M4 49h2v7H4z"
      style={{
        fill: "#e7eced",
      }}
    />
    <circle
      cx={11.5}
      cy={52.5}
      r={2.5}
      style={{
        fill: "#23a24d",
      }}
    />
    <path
      d="M12 27a.997.997 0 0 0 .707-.293l4-4a.999.999 0 1 0-1.414-1.414l-4 4A.999.999 0 0 0 12 27zM13.293 28.293l-2 2a.999.999 0 1 0 1.414 1.414l2-2a.999.999 0 1 0-1.414-1.414zM15.29 26.29c-.181.189-.29.439-.29.71 0 .26.109.52.29.71a1.013 1.013 0 0 0 1.42 0c.18-.19.29-.45.29-.71 0-.271-.11-.521-.29-.71-.38-.37-1.05-.37-1.42 0zM21.707 21.293a.999.999 0 0 0-1.414 0l-3 3a.999.999 0 1 0 1.414 1.414l3-3a.999.999 0 0 0 0-1.414z"
      style={{
        fill: "#38454f",
      }}
    />
    <path
      d="M0 0h58v12H0z"
      style={{
        fill: "#434c6d",
      }}
    />
    <path
      d="M4 9a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1z"
      style={{
        fill: "#e0e1e2",
      }}
    />
    <path
      d="M7 7H4a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2z"
      style={{
        fill: "#e0e1e2",
      }}
    />
    <path
      d="M7 10a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z"
      style={{
        fill: "#e0e1e2",
      }}
    />
    <path
      d="M9 7H7a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2z"
      style={{
        fill: "#e0e1e2",
      }}
    />
    <path
      d="M14 7c-.26 0-.521-.11-.71-.29-.181-.19-.29-.45-.29-.71 0-.271.109-.521.29-.71.38-.37 1.04-.37 1.42 0 .18.189.29.45.29.71s-.11.52-.29.71c-.19.18-.45.29-.71.29zM25 6c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zM30 7c-.26 0-.521-.11-.71-.29-.181-.19-.29-.45-.29-.71 0-.271.109-.521.29-.71.38-.37 1.05-.37 1.42 0 .18.189.29.45.29.71s-.11.52-.29.71c-.19.18-.45.29-.71.29z"
      style={{
        fill: "#ebba16",
      }}
    />
    <circle
      cx={52}
      cy={6}
      r={3}
      style={{
        fill: "#d75e72",
      }}
    />
  </svg>
)
export default ConsoleIcon
