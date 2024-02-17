import React, { SVGProps } from "react";

const Profile = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 9C11.4862 9 13.5 6.98625 13.5 4.5C13.5 2.01375 11.4862 0 9 0C6.51375 0 4.5 2.01375 4.5 4.5C4.5 6.98625 6.51375 9 9 9ZM9 11.25C5.99625 11.25 0 12.7575 0 15.75V16.875C0 17.4937 0.50625 18 1.125 18H16.875C17.4937 18 18 17.4937 18 16.875V15.75C18 12.7575 12.0037 11.25 9 11.25Z"
        fill="black"
      />
    </svg>
  );
};

export default Profile;
