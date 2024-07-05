import React from "react";

const Hero = () => {
  return (
    <div>
      <img
        alt="profile-picture"
        loading="eager"
        width="120"
        height="200"
        decoding="async"
        data-nimg="1"
        className="rounded-full object-fit w-[50px] h-[50px]"
        style={{ color: "transparent" }}
        src="/dhwanil_photo.png"
      ></img>
      <h1 className="font-medium text-gray-900 mt-2 text-xl font-heading">
        Dhwanil Vyas
      </h1>
      <p className="text-gray-500">Software engineer</p>
      <div className="flex flex-row justify-between items-center mt-6">
        <div className="flex flex-row gap-x-3">
          <a target="_blank" rel="noreferrer" href="https://x.com/vyasdhwanil">
            <img
              alt="Twitter"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/x.svg"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/dhwanilvyas">
            <img
              alt="Github"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/github.svg"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/vyasdhwanil">
            <img
              alt="Linkedin"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/linkedin.svg"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://topmate.io/dhwanilvyas">
            <img
              alt="Topmate"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/topmate.svg"
            />
          </a>
        </div>
      </div>
      <div className="border-b w-full my-8"></div>
    </div>
  );
};

export default Hero;
