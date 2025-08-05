const VideoSection = () => {
  return (
    <div id="home" className=" relative">
      <video
        className="w-full object-cover aspect-square h-[95vh]"
        src="/video/young-friends-hanging-social-media-720p-5s.mp4"
        autoPlay
        muted
        loop
      />
      <div className="w-full text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-3/3  z-10">
        <h1 className="font-morabba text-4xl flex flex-col gap-3 w-full ">
          <span className="text-primary text-[43px]"> ریباز وب</span>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <span> آژانس دیجیتال</span>
            <span>مارکتینگ</span>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default VideoSection;
