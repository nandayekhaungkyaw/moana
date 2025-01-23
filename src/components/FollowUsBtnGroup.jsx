import React from "react";
import FollowUsBtn from "./FollowUsBtn";

const FollowUsBtnGroup = () => {
  return (
    <div className="flex w-full gap-2 sm:gap-3 justify-center items-center">
      <FollowUsBtn
        icon={
          <svg
            width={20}
            xmlns="http://www.w3.org/2000/svg"
            height={20}
            viewBox="0 0 24 24"
            fill="white"
            stroke="#ffffff"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide   lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        }
      />
      <FollowUsBtn
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide  lucide-instagram"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        }
      />
      <FollowUsBtn
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="white"
            stroke="#ffffff"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide  lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        }
      />
      <FollowUsBtn
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="white"
            stroke="#ffffff"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide  lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width={4} height={12} x={2} y={9} />
            <circle cx={4} cy={4} r={2} />
          </svg>
        }
      />
      <FollowUsBtn
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="white"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide  lucide-youtube"
          >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path stroke="#525252" fill="#525252" d="m10 15 5-3-5-3z" />
          </svg>
        }
      />
    </div>
  );
};

export default FollowUsBtnGroup;
