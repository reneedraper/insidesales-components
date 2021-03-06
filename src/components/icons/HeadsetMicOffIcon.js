import React from "react";

const HeadsetMicOffIcon = props => (
  <svg
    {...props.size || { width: "24px", height: "24px" }}
    {...props}
    viewBox="0 0 24 24"
  >
    {props.title && <title>{props.title}</title>}
    <defs>
      <path
        d="M6.0315,19.963 C5.9665,19.963 5.9055,19.948 5.8405,19.943 L9.0315,16.753 L9.0315,19.963 L6.0315,19.963 Z M18.4993,7.2848 L19.9993,5.7848 C20.6553,7.0348 21.0313,8.4538 21.0313,9.9628 L21.0313,19.9628 C21.0313,21.6228 19.6913,22.9628 18.0313,22.9628 L12.0313,22.9628 L12.0313,20.9628 L19.0313,20.9628 L19.0313,19.9628 L15.0313,19.9628 L15.0313,11.9628 L19.0313,11.9628 L19.0313,9.9628 C19.0313,9.0138 18.8413,8.1098 18.4993,7.2848 Z M5.0315,11.963 L9.0315,11.963 L9.0315,12.51 L16.7385,4.803 C15.4965,3.666 13.8515,2.963 12.0315,2.963 C8.1615,2.963 5.0315,6.093 5.0315,9.963 L5.0315,11.963 Z M19.4705,4.9 L18.0205,6.35 L9.0315,15.339 L4.7195,19.65 L2.1145,22.256 L0.6995,20.842 L3.3145,18.228 C3.1345,17.844 3.0315,17.416 3.0315,16.963 L3.0315,9.963 C3.0315,4.993 7.0615,0.963 12.0315,0.963 C14.4015,0.963 16.5525,1.885 18.1585,3.383 L21.2415,0.3 L22.6555,1.714 L19.4705,4.9 Z"
        id="path-1"
      />
    </defs>
    <g
      stroke="none"
      strokeWidth="1"
      fillRule="evenodd"
    >
      <mask id="mask-2" fill="white">
        <use xlinkHref="#path-1" />
      </mask>
      <use id="Combined-Shape" xlinkHref="#path-1" />
    </g>
  </svg>
);

export default HeadsetMicOffIcon;
