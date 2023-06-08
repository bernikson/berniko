import React from "react";

const Square = () => {
  return (
    <svg
      width="207"
      height="459"
      viewBox="0 0 207 459"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_378_193)">
        <rect
          x="-103.435"
          y="35.4203"
          width="298.184"
          height="294.724"
          transform="rotate(22.8516 -103.435 35.4203)"
          stroke="#E94560"
          strokeWidth="8"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_378_193"
          x="-253.129"
          y="0.180908"
          width="459.714"
          height="457.869"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.913725 0 0 0 0 0.270588 0 0 0 0 0.376471 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_378_193"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_378_193"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Square;
