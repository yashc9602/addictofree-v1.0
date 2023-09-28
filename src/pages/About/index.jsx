import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";

const AboutPage = () => {
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
                  <a
                    href="https://www.addictofree.com"
                    className="mt-0.5 text-sm text-white-A700"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text size="txtSFProTextRegular14">
                      https://www.addictofree.com
                    </Text>
                  </a>
                </div>
                <div className="bg-gray-100 h-[13px] md:mt-0 my-[7px] rounded-md w-[1%]"></div>
              </div>
            </div>
          </div>
        </header>
        <div className="font-satoshivariable h-[840px] md:px-5 relative w-full">
          <Img
            className="h-[840px] m-auto object-cover w-full"
            src="images/img_herosection.png"
            alt="herosection"
          />
          <div className="absolute flex md:flex-col flex-row gap-5 h-20 md:h-auto inset-x-[0] items-center justify-start max-w-[1728px] mx-auto md:px-10 sm:px-5 px-[84px] top-[0] w-full">
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
                className="cursor-pointer font-medium min-w-[107px] text-base text-center"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                About Us
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer font-medium min-w-[122px] text-base text-center text-white-A700"
                onClick={() => navigate("/contact")}
                size="xs"
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
        <div className="flex flex-col font-satoshivariable items-start justify-start max-w-[1728px] p-20 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1568px] mx-auto sm:px-5 py-5 w-full">
            <div className="flex flex-col gap-5 items-center justify-start px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_02 w-auto"
                  size="txtSatoshiVariableBold28"
                >
                  Velectron Labs Private Limited
                </Text>
              </div>
              <div className="flex flex-col font-creatodisplay items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_02 w-auto"
                  size="txtCreatoDisplayBold48"
                >
                  Empowering Recovery and Transforming Lives
                </Text>
              </div>
              <div className="flex flex-col font-satoshivariable items-start justify-start md:px-10 sm:px-5 px-[200px] w-full">
                <Text
                  className="leading-[32.00px] max-w-[1008px] md:max-w-full text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
                  size="txtSatoshiVariableMedium24Gray600"
                >
                  At Velectron Labs Private Limited, we are on a mission to
                  transform the landscape of addiction rehabilitation and mental
                  health support. Our headquarters in the vibrant city of
                  Bangalore serve as the hub for our dedicated team of
                  innovators and technologists, all driven by a shared passion
                  for making a meaningful impact on society.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-creatodisplay items-start justify-start max-w-[1728px] p-20 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1568px] mx-auto sm:px-5 py-5 w-full">
            <div className="flex flex-col gap-5 items-center justify-start px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_02 w-auto"
                  size="txtCreatoDisplayBold48"
                >
                  Our Commitment to Combatting Addiction
                </Text>
              </div>
              <div className="flex flex-col font-satoshivariable items-start justify-start md:px-10 sm:px-5 px-[200px] w-full">
                <Text
                  className="leading-[32.00px] max-w-[1008px] md:max-w-full text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
                  size="txtSatoshiVariableMedium24Gray600"
                >
                  <>
                    We understand the far-reaching effects of addiction, not
                    just on individuals but on their families and communities.
                    That&#39;s why we have committed ourselves to combatting
                    addiction and mental health issues through innovation and
                    technology. Our primary focus is on reaching out to those in
                    socioeconomically disadvantaged sections of society,
                    ensuring that our solutions are accessible to all.
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <Img
                className="h-[480px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                src="images/img_pexelscottonbr_480x1488.png"
                alt="pexelscottonbr"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-creatodisplay items-start justify-start max-w-[1728px] p-20 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1568px] mx-auto sm:px-5 py-5 w-full">
            <div className="flex flex-col items-center justify-start px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_02 w-auto"
                  size="txtCreatoDisplayBold48"
                >
                  Meet Our Team of Experts
                </Text>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row font-satoshivariable gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[624px] justify-center max-w-[1488px] w-full"
              orientation="horizontal"
            >
              <div
                className="bg-cover bg-no-repeat flex flex-1 flex-col h-[624px] items-center justify-end pt-[476px] rounded-[20px] w-full"
                style={{ backgroundImage: "url('images/img_frame50.png')" }}
              >
                <div className="bg-gray-900_cc flex flex-col gap-1 items-start justify-center p-10 sm:px-5 w-[482px] sm:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                    size="txtSatoshiVariableBold28WhiteA700"
                  >
                    Abhijit Nair
                  </Text>
                  <Text
                    className="text-gray-300 text-xl w-full"
                    size="txtSatoshiVariableMedium20"
                  >
                    CEO and Co-Founder
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-1 flex-col h-[624px] items-center justify-end pt-[476px] rounded-[20px] w-full"
                style={{ backgroundImage: "url('images/img_frame51.png')" }}
              >
                <div className="bg-gray-900_cc flex flex-col gap-1 items-start justify-center p-10 sm:px-5 w-[482px] sm:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                    size="txtSatoshiVariableBold28WhiteA700"
                  >
                    Raghavendra Swamy
                  </Text>
                  <Text
                    className="text-gray-300 text-xl w-full"
                    size="txtSatoshiVariableMedium20"
                  >
                    CXO and Co-Founder
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-1 flex-col h-[624px] items-center justify-end pt-[476px] rounded-[20px] w-full"
                style={{ backgroundImage: "url('images/img_frame50.png')" }}
              >
                <div className="bg-gray-900_cc flex flex-col gap-1 items-start justify-center p-10 sm:px-5 w-[482px] sm:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                    size="txtSatoshiVariableBold28WhiteA700"
                  >
                    Lorem Ipsum
                  </Text>
                  <Text
                    className="text-gray-300 text-xl w-auto"
                    size="txtSatoshiVariableMedium20"
                  >
                    CXO
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col font-creatodisplay items-start justify-start max-w-[1728px] p-20 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1568px] mx-auto sm:px-5 py-5 w-full">
            <div className="flex flex-col gap-5 items-center justify-start px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_02 w-auto"
                  size="txtCreatoDisplayBold48"
                >
                  Our Impact on Society
                </Text>
              </div>
              <div className="flex flex-col font-satoshivariable items-start justify-start md:px-10 sm:px-5 px-[200px] w-full">
                <Text
                  className="leading-[32.00px] max-w-[1008px] md:max-w-full text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
                  size="txtSatoshiVariableMedium24Gray600"
                >
                  At Velectron Labs, we recognize the profound social impact of
                  our work. By treating addiction as a medical condition rather
                  than a social issue, we aim to reduce the stigma associated
                  with addiction. We are dedicated to providing people with the
                  support they need to reclaim their lives and achieve lasting
                  sobriety.
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <Img
                className="h-[480px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                src="images/img_pexelscottonbr_11.png"
                alt="pexelscottonbr_One"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-creatodisplay items-start justify-start max-w-[1728px] p-20 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1568px] mx-auto sm:px-5 py-5 w-full">
            <div className="flex flex-col gap-5 items-center justify-start px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_02 w-auto"
                  size="txtCreatoDisplayBold48"
                >
                  Join Us in Making a Difference
                </Text>
              </div>
              <div className="flex flex-col font-satoshivariable items-start justify-start md:px-10 sm:px-5 px-[200px] w-full">
                <Text
                  className="leading-[32.00px] max-w-[1008px] md:max-w-full text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
                  size="txtSatoshiVariableMedium24Gray600"
                >
                  Together, we can combat addiction and mental health issues,
                  transforming lives, and strengthening communities. At
                  Velectron Labs Private Limited, our commitment is unwavering,
                  and our vision is clear: a world where addiction is met with
                  compassion, innovation, and lasting recovery.
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-satoshivariable items-end justify-center w-full">
              <Button
                className="cursor-pointer font-bold min-w-[150px] rounded-[12px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="gray_900_02"
                size="sm"
                variant="fill"
              >
                Join US
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex font-satoshivariable items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutPage;
