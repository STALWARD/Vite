import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);

const Meet = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-4 sm:px-10">
      <div className="relative rounded-lg bg-black py-16 sm:py-24 text-blue-50 sm:overflow-hidden">
        {/* Left images */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        {/* Right images */}
        <div className="absolute -top-20 left-10 w-40 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center">
          <AnimatedTitle
            title="let&#39;s <b>wr</b>it<b>e</b> If <br /> any <b>q</b>u<b>e</b>ries <br /> or <b>sugg</b>esti<b>on</b>s ?"
            className="special-font font-zentry font-black 
            leading-snug sm:leading-tight md:leading-[.9] 
            text-3xl sm:text-4xl md:text-6xl lg:text-[6.2rem] 
            w-full break-words"
          />

          <Button
            id="contact"
            title="Contact us"
            leftIcon={<TiLocationArrow />}
            containerClass="!bg-yellow-300 flex-center gap-1 m-10 text-black"
            onClick={() => window.open("./contact", "_blank")}
          />

          <p className="font-normal text-white">Email: kaultantra@gmail.com</p>
          <p className="font-normal text-white">Tel: +91-9934418459</p>
        </div>
      </div>
    </div>
  );
};

export default Meet;
