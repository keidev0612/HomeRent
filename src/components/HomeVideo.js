import React from 'react';

const HomeVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video 
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
        autoPlay 
        muted 
        loop
      >
        <source src="https://videos.pexels.com/video-files/7578544/7578544-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to my HomeRent</h1>
          <p className="mt-4 text-lg md:text-2xl">Here you can live comfortably wherever you want.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
