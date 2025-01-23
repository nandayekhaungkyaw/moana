"use client";
import React, { useRef, useState } from "react";
import GradientText from "@/components/GradientText";

import MusicPlayer from "./MusicPlayer";

const GalleryOST = () => {
  return (
    <section className="my-5 lg:my-section-spacing">
      <GradientText
        className={"font-subrayada text-2xl md:text-3xl lg:text-5xl mb-3"}
      >
        OST Highlight
      </GradientText>
      <p className="mb-3 lg:mb-5 text-sm">
        Listen to Moana (Music from the Motion Picture) soundtrack on Spotify
        and Apple Music
      </p>

      <MusicPlayer />
    </section>
  );
};

export default GalleryOST;
