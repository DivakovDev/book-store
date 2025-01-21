import bannerImage from "../../assets/banner.png";

export const BannerSection = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-12 py-16 md:flex-row-reverse">
      {/* banner image */}
      <div className="flex items-center w-full md:w-1/2 md:justify-end">
        <img src={bannerImage} alt="banner image" />
      </div>
      {/* text field */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-medium md:text-5xl mb-7">
          New Releases This Week
        </h1>
        <p className="mb-10">
          It&apos;s time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week&apos;s new releases offer something
          for everyone
        </p>
        <button className="px-12 py-2 text-base font-bold transition-all duration-200 rounded-md cursor-pointer bg-primary font-secondary hover:bg-secondary hover:text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};
