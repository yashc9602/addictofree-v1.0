import React from "react";

import { Img } from "components";

const HomeGoogleplay = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-black-900 flex flex-col items-center justify-start rounded-bl-[5px] rounded-br-md rounded-tl-[5px] rounded-tr-[5px] w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[52px] items-center justify-end p-[7px] w-full"
            style={{ backgroundImage: "url('images/img_group6.svg')" }}
          >
            <div className="flex flex-row gap-[11px] items-center justify-between w-[93%] md:w-full">
              <Img
                className="h-[33px] md:h-auto object-cover"
                src="images/img_icon.png"
                alt="icon"
              />
              <div className="flex flex-col gap-[5px] items-start justify-start">
                <Img
                  className="h-2"
                  src="images/img_car_white_a700.svg"
                  alt="car_One"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[22px]"
                    src="images/img_googleplay.svg"
                    alt="googleplay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeGoogleplay.defaultProps = {};

export default HomeGoogleplay;
