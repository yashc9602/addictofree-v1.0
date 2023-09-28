import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea } from "components";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sfprotext items-center justify-start mx-auto w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-gray-900 flex flex-row items-start justify-start pt-2 px-2 w-full">
              <Img
                className="h-3 ml-[5px] mt-2"
                src="images/img_signal.svg"
                alt="signal"
              />
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[34px] items-center justify-start ml-[5px] p-[9px] w-[15%]"
                style={{ backgroundImage: "url('images/img_tab.svg')" }}
              >
                <div className="flex flex-row items-start justify-start w-[92%] md:w-full">
                  <Img
                    className="h-4 md:h-auto object-cover w-[9%]"
                    src="images/img_faviconreplace.png"
                    alt="faviconreplace"
                  />
                  <div className="flex flex-col items-center justify-start ml-[7px]">
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtSFProTextRegular12"
                    >
                      Addictofree
                    </Text>
                  </div>
                  <Img
                    className="h-[7px] ml-[117px] mt-1 w-[7px]"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
              <Img
                className="h-3 ml-2 mt-[11px] w-3"
                src="images/img_plus.svg"
                alt="plus"
              />
            </div>
            <div className="md:h-[141px] h-[37px] relative w-full">
              <div className="bg-blue_gray-900 flex flex-col h-full items-center justify-end m-auto pt-9 w-full">
                <Line className="bg-gray-900_01 h-px w-full" />
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto w-[98%]">
                <Img className="h-[13px]" src="images/img_car.svg" alt="car" />
                <div className="bg-gray-900 flex flex-row gap-3 items-center justify-start p-1 rounded-[14px]">
                  <Img
                    className="h-2.5 ml-[9px]"
                    src="images/img_lock.svg"
                    alt="lock"
                  />
                  <Text
                    className="mt-0.5 text-sm text-white-A700"
                    size="txtSFProTextRegular14"
                  >
                    https://www.addictofree.com
                  </Text>
                </div>
                <div className="bg-gray-100 h-[13px] md:mt-0 my-[7px] rounded-md w-[1%]"></div>
              </div>
            </div>
          </div>
        </header>
        <div
          className="bg-cover bg-no-repeat font-creatodisplay md:h-[693px] h-[972px] md:px-5 relative w-full"
          style={{ backgroundImage: "url('images/img_frame53.png')" }}
        >
          <div className="absolute flex flex-col md:h-auto h-full inset-[0] items-center justify-start m-auto max-w-[1568px] px-10 sm:px-5 py-60 w-full">
            <div className="flex flex-col gap-10 items-start justify-end w-full">
              <div className="flex flex-col items-start justify-end w-full">
                <div className="flex flex-col items-start justify-end w-full">
                  <Text
                    className="md:text-5xl text-[64px] text-white-A700 w-auto"
                    size="txtCreatoDisplayBold64"
                  >
                    Let’s Get in Touch
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-satoshivariable items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="leading-[32.00px] max-w-[724px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtSatoshiVariableMedium24"
                  >
                    <>
                      Have questions or need assistance? We&#39;re here to help.
                      Feel free to reach out to us anytime. Your inquiries and
                      feedback are valuable to us.
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex md:flex-col flex-row font-satoshivariable gap-5 h-20 md:h-auto inset-x-[0] items-center justify-start max-w-[1728px] mx-auto md:px-10 sm:px-5 px-[84px] top-[0] w-full">
            <Img
              className="flex-1 h-full max-h-20 sm:w-[] md:w-[]"
              src="images/img_logo.svg"
              alt="logo"
            />
            <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-center py-5 w-full">
              <Button
                className="common-pointer bg-transparent cursor-pointer font-medium min-w-[84px] text-base text-center text-white-A700"
                onClick={() => navigate("/")}
                size="xs"
              >
                Home
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer font-medium min-w-[107px] text-base text-center text-white-A700"
                onClick={() => navigate("/about")}
                size="xs"
              >
                About Us
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[122px] text-base text-center"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                Contact Us
              </Button>
            </div>
            <div className="flex flex-1 flex-col h-full items-center justify-end py-5 w-full">
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[129px] text-[15px] text-center"
                shape="round"
                color="gray_900_02"
                size="sm"
                variant="fill"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="font-satoshivariable h-[2286px] md:h-[2345px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[538px] items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start max-w-[1728px] p-20 md:px-10 sm:px-5 w-full">
                <div className="flex flex-col items-center justify-start px-10 sm:px-5 py-5 w-full">
                  <div className="flex md:flex-col flex-row gap-10 items-start justify-center w-full">
                    <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
                      <div className="flex flex-col gap-5 items-start justify-center md:pl-10 pl-20 pr-10 sm:px-5 py-5 w-full">
                        <div className="flex flex-row gap-5 items-start justify-center w-full">
                          <Button
                            className="flex h-9 items-center justify-center w-9"
                            shape="circle"
                            color="light_blue_700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-[13px]"
                              src="images/img_grid.svg"
                              alt="grid"
                            />
                          </Button>
                          <Text
                            className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-gray-900_02 w-auto"
                            size="txtSatoshiVariableBold28"
                          >
                            Address
                          </Text>
                        </div>
                        <Text
                          className="leading-[32.00px] max-w-[584px] md:max-w-full text-2xl md:text-[22px] text-gray-600 sm:text-xl"
                          size="txtSatoshiVariableMedium24Gray600"
                        >
                          Lorem ipsum dolor sit amet consectetur. Porta amet
                          adipiscing odio pellentesque. Diam est id malesuada.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-center md:pl-10 pl-20 pr-10 sm:px-5 py-5 w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-center w-full">
                          <Button
                            className="flex h-9 items-center justify-center w-9"
                            shape="circle"
                            color="light_blue_700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-[13px]"
                              src="images/img_call.svg"
                              alt="call"
                            />
                          </Button>
                          <Text
                            className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-gray-900_02 w-auto"
                            size="txtSatoshiVariableBold28"
                          >
                            Phone
                          </Text>
                        </div>
                        <Text
                          className="text-2xl md:text-[22px] text-gray-600 sm:text-xl w-full"
                          size="txtSatoshiVariableMedium24Gray600"
                        >
                          +91 9632010626
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-gray-600 sm:text-xl w-full"
                          size="txtSatoshiVariableMedium24Gray600"
                        >
                          +91 9632010626
                        </Text>
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-center md:pl-10 pl-20 pr-10 sm:px-5 py-5 w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-center w-full">
                          <div className="bg-light_blue-700 flex flex-col h-9 md:h-auto items-center justify-center rounded-[50%] w-9">
                            <div className="flex flex-col items-center justify-start w-[42%]">
                              <Img
                                className="h-[11px]"
                                src="images/img_mail.svg"
                                alt="mail"
                              />
                            </div>
                          </div>
                          <Text
                            className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-gray-900_02 w-auto"
                            size="txtSatoshiVariableBold28"
                          >
                            Email
                          </Text>
                        </div>
                        <Text
                          className="text-2xl md:text-[22px] text-gray-600 sm:text-xl w-full"
                          size="txtSatoshiVariableMedium24Gray600"
                        >
                          <span className="text-gray-600 font-satoshivariable text-left font-medium">
                            {" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-gray-600 font-satoshivariable text-left font-medium underline"
                          >
                            contact@voidelectron.com
                          </a>
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="md:h-[508px] sm:h-auto h-full max-h-[508px] max-w-[744px] object-cover rounded-[20px] sm:w-[] md:w-[]"
                      src="images/img_image_508x744.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              <footer className="flex items-center justify-center w-full">
                <div className="h-[1040px] relative w-full">
                  <div className="bg-white-A700 h-[708px] mx-auto w-full"></div>
                  <div className="absolute h-[1040px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[1040px] m-auto object-cover w-full"
                      src="images/img_truckdriverop_1040x1728.png"
                      alt="truckdriverop"
                    />
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
                              <a
                                href="javascript:"
                                className="text-base text-gray-300"
                              >
                                <Text size="txtSatoshiVariableMedium16Gray300">
                                  Home
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-gray-300"
                              >
                                <Text size="txtSatoshiVariableMedium16Gray300">
                                  About Us
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-gray-300"
                              >
                                <Text size="txtSatoshiVariableMedium16Gray300">
                                  Career
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-gray-300"
                              >
                                <Text size="txtSatoshiVariableMedium16Gray300">
                                  Contact Us
                                </Text>
                              </a>
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
                              <a
                                href="javascript:"
                                className="text-base text-gray-300"
                              >
                                <Text size="txtSatoshiVariableMedium16Gray300">
                                  Instagram
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-gray-300"
                              >
                                <Text size="txtSatoshiVariableMedium16Gray300">
                                  Facebook
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-gray-300"
                              >
                                <Text size="txtSatoshiVariableMedium16Gray300">
                                  LinkedIn
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-gray-300"
                              >
                                <Text size="txtSatoshiVariableMedium16Gray300">
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
                            name="input"
                            placeholder="Enter email here"
                            className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-[15px] text-left w-full"
                            wrapClassName="border border-gray-100_16 border-solid flex w-full"
                            type="email"
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
                                href="javascript:"
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
            </div>
          </div>
          <div className="absolute flex flex-col font-creatodisplay inset-x-[0] items-center justify-start max-w-[1728px] mx-auto p-20 md:px-10 sm:px-5 top-[29%] w-full">
            <div className="flex flex-col gap-10 items-center justify-start px-10 sm:px-5 py-5 w-full">
              <div className="flex flex-col gap-5 items-center justify-start px-10 sm:px-5 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_02 w-auto"
                    size="txtCreatoDisplayBold48"
                  >
                    Send Us a Message
                  </Text>
                </div>
                <div className="flex flex-col font-satoshivariable items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl w-full"
                    size="txtSatoshiVariableMedium24Gray600"
                  >
                    <>
                      Have a specific question or request? Fill out the form
                      below, and we&#39;ll get back to you as soon as possible.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-satoshivariable gap-10 items-start justify-start max-w-screen-sm w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Input
                    name="input_One"
                    placeholder="Your Name"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-[15px] text-left w-full"
                    wrapClassName="border border-gray-300 border-solid w-full"
                    type="text"
                    shape="round"
                    color="gray_100_01"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <Input
                    name="input_Two"
                    placeholder="Your Email"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-[15px] text-left w-full"
                    wrapClassName="border border-gray-300 border-solid w-full"
                    type="email"
                    shape="round"
                    color="gray_100_01"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <Input
                    name="input_Three"
                    placeholder="Your Phone No."
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-[15px] text-left w-full"
                    wrapClassName="border border-gray-300 border-solid w-full"
                    type="number"
                    shape="round"
                    color="gray_100_01"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <Input
                    name="input_Four"
                    placeholder="Email Subject"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-[15px] text-left w-full"
                    wrapClassName="border border-gray-300 border-solid w-full"
                    type="email"
                    shape="round"
                    color="gray_100_01"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <TextArea
                    className="bg-gray-100_01 border border-gray-300 border-solid font-medium h-[120px] leading-[normal] p-[15px] rounded-[10px] text-[15px] placeholder:text-gray-400 text-gray-400 text-left w-full"
                    name="input_Five"
                    placeholder="Your Message"
                    name="input_Five"
                    placeholder="Your Message"
                  ></TextArea>
                </div>
                <Button
                  className="cursor-pointer font-bold rounded-[12px] text-2xl md:text-[22px] text-center sm:text-xl w-full"
                  color="gray_900_02"
                  size="sm"
                  variant="fill"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
