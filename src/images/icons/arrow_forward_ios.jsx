import React from "react";

function ArrowForward(props) {
  const fill = props.fill || "#0d74af";
  //   const secondaryfill = props.secondaryfill || fill;
  //   const strokewidth = props.strokewidth || 1;
  const width = props.width || "24px";
  const height = props.height || "100%";

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <path
          d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowForward;
