import React from "react";

const MoanaSailBoat = ({ styleName, rtl = false  }) => {
  return (

    <>
      {rtl ? (
        <iframe  className={` ${styleName} w-full`} src="https://lottie.host/embed/bfc18f43-6135-41a1-836d-0f8a00061cbf/uOCL4l2rvx.lottie"></iframe>
      ) : (
        <iframe
          className={` ${styleName} w-full`}
          src="https://lottie.host/embed/8cf8cea8-fac5-4a97-be9c-2f55a7847f32/jWm5P6QWWe.lottie"
        ></iframe>
      )}
    </> )

};
export default MoanaSailBoat;
