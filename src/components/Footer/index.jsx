import React from "react";

import { Button, Img, Input, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="h-[1040px] relative w-full">
          <div className="bg-white-A700 h-[708px] mx-auto w-full"></div>
          <div className="absolute h-[1040px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[1040px] m-auto object-cover w-full"
              src="images/img_truckdriverop_1040x1728.png"
              alt="truckdriverop"
            />
            <div className="absolute bg-white-A700 flex flex-col gap-10 items-center justify-start md:px-10 sm:px-5 px-[60px] py-10 right-[7%] rounded-[20px] top-[10%] w-auto">
              <div className="flex flex-col gap-2.5 items-start justify-start w-[469px] sm:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900_02 w-full"
                  size="txtCreatoDisplayBold48"
                >
                  Any Queries?
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-gray-600 sm:text-xl w-full"
                  size="txtSatoshiVariableMedium24Gray600"
                >
                  Feel free to contact us{" "}
                </Text>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                <Input
                  name="input"
                  placeholder="Your Name"
                  className="font-medium font-satoshivariable leading-[normal] p-0 placeholder:text-gray-400 text-[15px] text-left w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  shape="round"
                  color="gray_100_01"
                  size="sm"
                  variant="fill"
                ></Input>
                <Input
                  name="input_One"
                  placeholder="Your Email"
                  className="font-medium font-satoshivariable leading-[normal] p-0 placeholder:text-gray-400 text-[15px] text-left w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  shape="round"
                  color="gray_100_01"
                  size="sm"
                  variant="fill"
                ></Input>
                <Input
                  name="input_Two"
                  placeholder="Your Phone No."
                  className="font-medium font-satoshivariable leading-[normal] p-0 placeholder:text-gray-400 text-[15px] text-left w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  shape="round"
                  color="gray_100_01"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-bold font-satoshivariable rounded-[12px] text-2xl md:text-[22px] text-center sm:text-xl w-[469px]"
                color="gray_900_02"
                size="sm"
                variant="fill"
              >
                Submit
              </Button>
            </div>
            <div className="absolute bg-gray-900_e5 bottom-[0] flex flex-row inset-x-[0] items-center justify-start max-w-[1728px] mx-auto p-20 md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                <Img
                  className="h-[60px] w-[300px]"
                  src="images/img_logo.svg"
                  alt="frameFortyThree"
                />
                <div className="flex flex-col gap-2.5 items-start justify-start w-[300px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                    size="txtSatoshiVariableBold28WhiteA700"
                  >
                    Company
                  </Text>
                  <ul className="flex flex-col gap-[11px] items-start justify-start md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-base text-gray-300"
                        size="txtSatoshiVariableMedium16Gray300"
                      >
                        Home
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-base text-gray-300"
                        size="txtSatoshiVariableMedium16Gray300"
                      >
                        About Us
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-base text-gray-300"
                        size="txtSatoshiVariableMedium16Gray300"
                      >
                        Career
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-base text-gray-300"
                        size="txtSatoshiVariableMedium16Gray300"
                      >
                        Contact Us
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-[300px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                    size="txtSatoshiVariableBold28WhiteA700"
                  >
                    Social Media
                  </Text>
                  <ul className="flex flex-col gap-2.5 items-start justify-start md:w-full common-column-list">
                    <li>
                      <a href="https://www.instagram.com/velectron_labs/" target="_blank">
                      <Text
                        className="text-base text-gray-300"
                        size="txtSatoshiVariableMedium16Gray300"
                      >
                        Instagram
                      </Text>
                      </a>
                    </li>
                    <li>
                      
                      <Text
                        className="text-base text-gray-300"
                        size="txtSatoshiVariableMedium16Gray300"
                      >
                        Facebook
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-base text-gray-300"
                        size="txtSatoshiVariableMedium16Gray300"
                      >
                        LinkedIn
                      </Text>
                    </li>
                    <li>
                    <a href="https://twitter.com/velectronl?lang=en" target="_blank">
                      <Text
                        className="text-base text-gray-300"
                        size="txtSatoshiVariableMedium16Gray300"
                      >
                        Twitter
                      </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col gap-5 h-full items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                    size="txtSatoshiVariableBold28WhiteA700"
                  >
                    Get our Newsletter
                  </Text>
                  <Input
                    name="input_Three"
                    placeholder="Enter email here"
                    className="font-medium font-satoshivariable leading-[normal] p-0 placeholder:text-gray-400 text-[15px] text-left w-full"
                    wrapClassName="border border-gray-100_16 border-solid flex w-full"
                    suffix={
                      <div className="h-[30px] ml-3 w-[30px] bg-green-600 p-[9px] rounded-md flex justify-center items-center">
                        <Img
                          className="h-[11px] my-auto"
                          src="images/img_arrowright.svg"
                          alt="arrow_right"
                        />
                      </div>
                    }
                    shape="round"
                    color="gray_100_16"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <div className="flex flex-col h-full items-end justify-end w-full">
                    <Text
                      className="text-base text-gray-300 w-auto"
                      size="txtSatoshiVariableMedium16Gray300"
                    >
                      <span className="text-gray-300 font-satoshivariable text-left font-medium">
                        Designed by{" "}
                      </span>
                      <a
                        href="https://www.behance.net/kausikkumardas" target="_blank"
                        className="text-white-A700 font-satoshivariable text-left font-medium underline"
                      >
                        Kausik Das
                      </a>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
