const FunFactsSection = () => {
  return (
    <div id="" className="space-y-5 scroll-mt-35">
      <p className="text-2xl flex items-center">
        <span className="text-primary">#</span>
        <span>my-fun-facts</span>
        <span className="h-0.5 mt-2 ml-5 bg-primary max-sm:grow sm:w-50 md:w-100"></span>
      </p>

      <div className="flex max-[900px]:justify-center justify-between">
        <div className="text-lg flex flex-col gap-2 text-gray">
          <div className="flex gap-2">
            <div className="border p-2 rounded-lg">
              I like winter more than summer
            </div>
            <div className="border p-2 rounded-lg">
              Enjoy working out and staying active.
            </div>
          </div>

          <div className="flex gap-2">
            <div className="border p-2 rounded-lg">I am a night owl coder</div>
            <div className="border p-2 rounded-lg">
              I debug better with coffee
            </div>
          </div>

          <div className="flex">
            <div className="border p-2 rounded-lg">
              I enjoy bike rides and exploring new places, even though I don't
              own a bike yet.
            </div>
          </div>
        </div>

        <div className="max-[900px]:hidden relative h-50 w-60">
          <img
            src="/logo-black.svg"
            className="absolute h-30 w-30 left-22 bg-bg bottom-0"
            alt=""
          />
          <img src="/Dots.png" className="absolute h-20" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FunFactsSection;
