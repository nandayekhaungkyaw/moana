import React from "react";

const GradientText = ({
  className,
  children,
  heading = 1,
  outline = false,
}) => {
  const HeadingTag = `h${heading}`;
  return (
    <HeadingTag
      className={`${className} ${
        outline
          ? "text-transparent  bg-clip-text stroke-current text-stroke-sm"
          : ""
      }`}
    >
      <span
        className={` ${
          outline
            ? ""
            : "text-transparent leading-9 bg-clip-text bg-gradient-to-b from-primary to-secondary-500"
        }`}
      >
        {children}
      </span>
    </HeadingTag>
  );
};

export default GradientText;
