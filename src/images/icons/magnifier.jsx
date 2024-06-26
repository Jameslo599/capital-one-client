import React from "react";

function Magnifier(props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  //const strokewidth = props.strokewidth || 1;
  const width = props.width || "18px";
  const height = props.height || "100%";

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={secondaryfill}>
        <path
          d="M15.707,13.293L13,10.586c0.63-1.05,1-2.275,1-3.586c0-3.86-3.141-7-7-7S0,3.14,0,7s3.141,7,7,7 c1.312,0,2.536-0.369,3.586-1l2.707,2.707C13.488,15.902,13.744,16,14,16s0.512-0.098,0.707-0.293l1-1 C16.098,14.316,16.098,13.684,15.707,13.293z M7,12c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S9.761,12,7,12z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Magnifier;
