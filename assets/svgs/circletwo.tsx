import React from "react";

const Circletwo: React.FC = () => {
  return (
    <svg
      width="173"
      height="242"
      viewBox="0 0 173 242"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_378_194)">
        <path
          d="M47.5005 85.5C95.6121 -12.2303 202.32 51.0167 224.57 104.446C246.821 157.876 209.162 194.831 172.5 205.032C135.839 215.232 -9.98079 202.263 47.5005 85.5Z"
          stroke="#E94560"
          strokeWidth="8"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_378_194"
          x="0.241211"
          y="0.45105"
          width="264.985"
          height="241.378"
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
            result="effect1_dropShadow_378_194"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_378_194"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Circletwo;
