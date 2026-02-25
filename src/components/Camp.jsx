/* eslint-disable react/no-unescaped-entities */

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="flex h-[340px] w-full items-start justify-start gap-8 lg:h-[400px] xl:h-[640px]">
        <img
          src="/img/img-4.webp"
          alt="yoga"
          width={1440}
          height={580}
          loading="eager"
          className="w-screen h-screen object-cover object-center 2xl:rounded-s-xl"
        />
        <img
          src="/img/img-2.webp"
          alt="yoga"
          width={1440}
          height={580}
          loading="eager"
          className="w-screen h-screen object-cover object-center 2xl:rounded-s-xl"
        />
      </div>

      <div className="flexEnd mt-2 px-4 lg:-mt-60 lg:mr-6">
        <div className="bg-yellow-200 p-12 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="text-2xl md:text-4xl 2xl:text-6xl font-bold capitalize text-black leading-snug">
            Feeling Lost And Not Knowing The Way?
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl mt-5 text-black leading-relaxed">
            Starting from the anxiety of the common man when visiting a new challenge in life, the possibility of getting lost is very large. That's why we are here for those of you who want to be a winner. We shall enlighten your path so that you will never feel darkness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
