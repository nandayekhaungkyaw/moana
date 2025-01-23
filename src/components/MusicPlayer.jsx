"use client";

import { useState, useRef, useEffect } from "react";
import { Play, SkipBack, SkipForward, Pause } from "lucide-react";
import Image from "next/image";

const songs = [
  {
    id: 1,
    title: "How Far I'll Go",
    artist: "Lin-Manuel Miranda",
    duration: "1:28",
    src: "/audio/How_Far_I_ll_Go.mp3",
  },
  {
    id: 2,
    title: "You're Welcome",
    artist: "Lin-Manuel Miranda",
    duration: "2:49",
    src: "/audio/You_re_Welcome.mp3",
  },
  {
    id: 3,
    title: "We Know the Way",
    artist: "Opetaia Foa'i and Lin-Manuel Miranda",
    duration: "2:36",
    src: "/audio/We_Know_The_Way.mp3",
  },
  {
    id: 4,
    title: "I Am Moana",
    artist: "Lin-Manuel Miranda and Opetaia Foa'i",
    duration: "2:48",
    src: "/audio/I_Am_Moana.mp3",
  },
  {
    id: 5,
    title: "Where You Are",
    artist: "Lin-Manuel Miranda",
    duration: "3:30",
    src: "/audio/Where_You_Are.mp3",
  },
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentSong((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSong((prev) => (prev === songs.length - 1 ? 0 : prev + 1));
  };

  const handleTimeUpdate = () => {
    const progress =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(progress);
  };

  const handleSongClick = (index) => {
    console.log(index)
    setCurrentSong(index);
    setIsPlaying(true);
  };

  // console.log(currentSong)

  return (
    <div className="mb-3 lg:mb-0 p-0 lg:p-6">
      <div className=" mx-auto">

        {/* Player Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-center">

          {/* Cover Art */}
          <div className="w-full md:w-64 h-64 bg-gray-800 rounded overflow-hidden">
            <Image
              width="239"
              height="155"
              src="/assets/moana_gallery/ost.png"
              alt="Moana Soundtrack"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Song Title, Controls, and Progress Bar */}
          <div className="flex-1">
            {/* Song Title - Artist */}
            <h2 className="text-sm lg:text-xl underline text-center mb-4">
              {songs[currentSong].title} - {songs[currentSong].artist}
            </h2>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                className="p-2 hover:text-blue-400 active:text-inherit transition-colors"
                onClick={handlePrevious}
              >
                <SkipBack size={24} />
              </button>
              <button
                className="p-3 bg-primary rounded-full hover:bg-primary-500 transition-colors"
                onClick={handlePlayPause}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button
                className="p-2 hover:text-blue-400 active:text-inherit transition-colors"
                onClick={handleNext}
              >
                <SkipForward size={24} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-secondary-700 h-1 rounded-full overflow-hidden">
              <div
                className="bg-primary h-full rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Hidden Audio Element */}
            <audio
              ref={audioRef}
              src={songs[currentSong].src}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleNext}
              className="hidden"
            />
          </div>
        </div>

        {/* Playlist */}
        <div className="space-y-2">
          {songs.map((song, index) => (
            <div
              key={song.id}
              className={`flex items-center justify-between bg-secondary-200 p-3 hover:bg-secondary-600 rounded cursor-pointer transition-colors ${
                index === currentSong ? "bg-secondary-800 text-white" : ""
              }`}
              onClick={() => handleSongClick(index)}
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-400 w-6">{song.id}.</span>
                <div>
                  <h3 className="font-medium">{song.title}</h3>
                  <p className="text-sm text-gray-400">{song.artist}</p>
                </div>
              </div>
              <span className="text-gray-400">{song.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
