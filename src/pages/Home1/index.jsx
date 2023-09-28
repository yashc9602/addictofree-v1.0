import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import HomeGoogleplay from "components/HomeGoogleplay";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sfprotext items-center justify-start mx-auto w-full">

        <div
        className="bg-green-600 bg-no-repeat font-creatodisplay md:h-[548px]  px-20 md:px-5 h-full w-full md:w-full"
        // style={{
        //   backgroundImage: "url('images/img_herosection_972x1728.png')",
        // }}
        >
          <Img
            className="h-[90vh] sm:h-auto object-cover z-10   w-fit md:w-full"
            src="images/img_herosection_972x1728.png"
            alt="image"
          />


          <div className="absolute flex flex-col h-full inset-[0] items-center justify-end m-auto px-10 sm:px-5 py-20 w-full">

            <div className="flex flex-col gap-[50px] items-start justify-end w-full">
              <div className="flex flex-col items-start justify-end w-full">
                <div className="flex flex-col items-start justify-end w-full">

                  <Text
                    className="leading-[72.00px] max-w-[724px] md:max-w-full md:text-5xl text-[64px] text-white-A700"
                    size="txtCreatoDisplayBold64"
                  >
                    Empowering Recovery, One Step at a Time
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-satoshivariable items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="leading-[32.00px] max-w-[724px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtSatoshiVariableMedium24"
                  >
                    A groundbreaking IoT device and app that transforms
                    addiction rehabilitation into a data-driven, personalized
                    experience.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-satoshivariable items-start justify-start pt-5 w-full">
                <Button
                  className="cursor-pointer font-bold min-w-[191px] rounded-[12px] text-2xl md:text-[22px] text-center sm:text-xl"
                  color="gray_900_02"
                  size="sm"
                  variant="fill"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute flex md:flex-col flex-row font-satoshivariable gap-5 h-20 md:h-auto inset-x-[0] items-center justify-start max-w-[1728px] mx-auto md:px-10 sm:px-5 px-[84px] top-[0] w-full">
            <Img
              className="h-full max-h-20 sm:w-[] md:w-[]"
              src="images/img_logo.svg"
              alt="logo"
            />
            <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-end py-5 w-full">
              <Button
                className="cursor-pointer font-medium min-w-[84px] text-base text-center"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
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
                className="common-pointer bg-transparent cursor-pointer font-medium min-w-[122px] text-base text-center text-white-A700"
                onClick={() => navigate("/contact")}
                size="xs"
              >
                Contact Us
              </Button>
            </div>
            <div className="flex flex-1 flex-col h-full items-end justify-end py-5 w-full">
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
        <div className="flex flex-col font-creatodisplay items-start justify-start aspect-video p-20 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1568px]  mx-auto sm:px-5 py-5 w-full">
            <div className="flex flex-col gap-5 items-center justify-start px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_02 w-auto"
                  size="txtCreatoDisplayBold48"
                >
                  The Urgency of the Problem
                </Text>
              </div>
              <div className="flex flex-col font-satoshivariable items-start justify-start md:px-10 sm:px-5 px-[200px] w-full">
                <Text
                  className="leading-[32.00px] max-w-[1008px] md:max-w-full text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
                  size="txtSatoshiVariableMedium24Gray600"
                >
                  <span className="text-gray-600 font-satoshivariable font-medium">
                    <>
                      Alcoholism is not just a personal struggle; it&#39;s a
                      societal issue. In India alone,{" "}
                    </>
                  </span>
                  <span className="text-gray-900_02 font-satoshivariable font-bold">
                    20-30%
                  </span>
                  <span className="text-gray-600 font-satoshivariable font-medium">
                    {" "}
                    of hospital admissions are due to alcohol-related problems.
                    The challenge is immense, but so is our commitment to
                    solving it.
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-start  justify-center w-full">
              <Img
                className="flex-1  md:h-auto h-[400px] object-cover rounded-[20px] sm:w-[] w-fit"
                src="images/img_pexelscottonbr.png"
                alt="pexelscottonbr"
              />
              <Img
                className="flex-1  md:h-auto max-h-[400px] object-cover rounded-[20px] sm:w-[]"
                src="images/img_pexelscottonbr_460x734.png"
                alt="pexelscottonbr_One"
              />
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
                  What is Addictofree?
                </Text>
              </div>
              <div className="flex flex-col font-satoshivariable items-center justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_02 w-auto"
                  size="txtSatoshiVariableBold28"
                >
                  A Revolution in Addiction Treatment
                </Text>
              </div>
              <div className="flex flex-col font-satoshivariable items-start justify-start md:px-10 sm:px-5 px-[200px] w-full">
                <Text
                  className="leading-[32.00px] max-w-[1008px] md:max-w-full text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
                  size="txtSatoshiVariableMedium24Gray600"
                >
                  Addictofree is an innovative solution designed to make
                  addiction treatment more effective, accessible, and
                  affordable. By leveraging cutting-edge AI and IoT
                  technologies, we aim to transform the landscape of addiction
                  rehabilitation.
                </Text>
              </div>
            </div>
            <Img
              className="md:h-[720px] sm:h-auto h-full object-cover rounded-[20px] w-[1488px] md:w-full"
              src="images/img_image.png"
              alt="image"
            />
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
                  Features that Empower
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="bg-gray-100_01 flex md:flex-col flex-row gap-10 items-center justify-center max-w-[1488px] rounded-[20px] w-full">
                  <div className="flex flex-1 flex-col gap-5  md:h-auto items-start justify-center md:pl-10 pl-20 pr-10 sm:px-5 py-10 w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_02 w-full"
                      size="txtCreatoDisplayBold36"
                    >
                      AI-Powered Tracking
                    </Text>
                    <Text
                      className="leading-[32.00px] max-w-[584px] md:max-w-full text-2xl md:text-[22px] text-gray-600 sm:text-xl"
                      size="txtSatoshiVariableMedium24Gray600"
                    >
                      Our device uses advanced AI algorithms to monitor
                      withdrawal symptoms and track recovery, ensuring a
                      personalized treatment plan tailored to individual needs.
                    </Text>
                  </div>
                  <div className="flex flex-1 gap-5 h-full md:h-auto items-start justify-center md:pl-10  sm:px-5  w-full">
                    <Img
                      className=""
                      src="images/img_image_600x744.png"
                      alt="image_One"
                    />
                  </div>
                  {/* <div className="flex-1  "> */}
                  {/* <Img
                    className="md:flex-1  sm:h-auto w-fit  md:w-full"
                    src="images/img_image_600x744.png"
                    alt="image_One"
                  /> */}
                  {/* </div> */}
                </div>
                <List
                  className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-100_01 flex flex-1 flex-col gap-10 items-start justify-center max-w-[734px] rounded-[20px] w-full">
                    <div className="flex flex-col gap-5 items-start justify-center pb-10 pt-20 md:px-10 px-20 sm:px-5 w-full">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_02 w-full"
                        size="txtCreatoDisplayBold36"
                      >
                        24/7 Monitoring
                      </Text>
                      <Text
                        className="leading-[32.00px] max-w-[574px] md:max-w-full text-2xl md:text-[22px] text-gray-600 sm:text-xl"
                        size="txtSatoshiVariableMedium24Gray600"
                      >
                        <>
                          With Addictofree, you&#39;re never alone. Our device
                          provides continuous support, especially during
                          challenging withdrawal episodes, offering timely
                          interventions.
                        </>
                      </Text>
                    </div>
                    <Img
                      className="h-[460px] sm:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[734px] md:w-full"
                      src="images/img_image_460x734.png"
                      alt="image"
                    />
                  </div>
                  <div className="bg-gray-100_01 flex flex-1 flex-col gap-10 items-start justify-center max-w-[734px] rounded-[20px] w-full">
                    <div className="flex flex-col gap-5 items-start justify-center pb-10 pt-20 md:px-10 px-20 sm:px-5 w-full">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_02 w-full"
                        size="txtCreatoDisplayBold36"
                      >
                        Data-Driven Insights
                      </Text>
                      <Text
                        className="leading-[32.00px] max-w-[574px] md:max-w-full text-2xl md:text-[22px] text-gray-600 sm:text-xl"
                        size="txtSatoshiVariableMedium24Gray600"
                      >
                        Our platform gathers invaluable data to tailor treatment
                        plans. This aligns with the best practices of
                        evidence-based care, a standard in top treatment centers
                        worldwide.
                      </Text>
                    </div>
                    <Img
                      className="h-[460px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                      src="images/img_image_1.png"
                      alt="image"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-creatodisplay items-start justify-start aspect-video p-20  md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-10 items-start justify-start max-w-[1568px] mx-auto sm:px-5 py-5 w-full">
            <div className="flex flex-col items-center justify-start px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-4xl sm:text-[38px] md:text-[44px] text-center text-gray-900_02 w-auto"
                  size="txtCreatoDisplayBold48"
                >
                  How Addictofree Works
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-satoshivariable gap-10 items-start justify-center w-full">
              <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-center md:pl-10 pl-10 pr-10 sm:px-5 py-10 w-full">
                  <Text
                    className="leading-[36.00px] max-w-[584px] md:max-w-full sm:text-2xl md:text-[26px] text-lg text-gray-900_02"
                    size="txtSatoshiVariableBold28"
                  >
                    Get your Addictofree device and download the app
                  </Text>
                  <Text
                    className="leading-[32.00px] max-w-[584px] md:max-w-full text-lg md:text-[22px] text-gray-600 sm:text-xl"
                    size="txtSatoshiVariableMedium24Gray600"
                  >
                    Our easy-to-use app is available on both Android and iOS
                    platforms.
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-start pt-5 w-auto sm:w-full">
                    <HomeGoogleplay className="flex flex-col items-center justify-start w-[48%] sm:w-full" />
                    <Img
                      className="h-[52px] w-[180px]"
                      src="images/img_appstore.svg"
                      alt="appstore"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-center md:pl-10 pl-10 pr-10 sm:px-5 py-10 w-full">
                  <Text
                    className="leading-[36.00px] max-w-[584px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900_02"
                    size="txtSatoshiVariableBold28"
                  >
                    Sync the device and start your personalized treatment plan
                  </Text>
                  <Text
                    className="leading-[32.00px] max-w-[584px] md:max-w-full text-lg md:text-[22px] text-gray-600 sm:text-xl"
                    size="txtSatoshiVariableMedium24Gray600"
                  >
                    With a simple setup process, you can start your journey
                    towards recovery immediately.
                  </Text>
                </div>
                <div className="flex flex-col gap-1 items-start justify-center md:pl-10 pl-10 pr-10 sm:px-5 py-10 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_02 w-full"
                    size="txtSatoshiVariableBold28"
                  >
                    Receive real-time insights and interventions
                  </Text>
                  <Text
                    className="leading-[32.00px] max-w-[584px] md:max-w-full text-2xl md:text-[22px] text-gray-600 sm:text-xl"
                    size="txtSatoshiVariableMedium24Gray600"
                  >
                    Empower yourself with actionable insights and timely
                    interventions, helping you take control of your recovery.
                  </Text>
                </div>
              </div>
              <Img
                className="md:h-[876px] sm:h-auto  h-[90vh]  object-cover  rounded-[20px] sm:w-[] md:w-[] w-fit"
                src="images/img_image_876x744.png"
                alt="image_Two"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-creatodisplay items-start justify-start max-w-[1728px] p-20 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1568px] mx-auto sm:px-5 py-5 w-full">
            <div className="flex flex-col gap-5 items-center justify-start px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_02 w-auto"
                  size="txtCreatoDisplayBold48"
                >
                  Making a Difference
                </Text>
              </div>
              <div className="flex flex-col font-satoshivariable items-start justify-start md:px-10 sm:px-5 px-[200px] w-full">
                <Text
                  className="leading-[32.00px] max-w-[1008px] md:max-w-full text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
                  size="txtSatoshiVariableMedium24Gray600"
                >
                  <span className="text-gray-600 font-satoshivariable font-medium">
                    Our aim is to impact{" "}
                  </span>
                  <span className="text-gray-900_02 font-satoshivariable font-bold">
                    200,000
                  </span>
                  <span className="text-gray-600 font-satoshivariable font-medium">
                    {" "}
                    rehab seekers by{" "}
                  </span>
                  <span className="text-gray-900_02 font-satoshivariable font-bold">
                    2025
                  </span>
                  <span className="text-gray-600 font-satoshivariable font-medium">
                    <>
                      , improving their health and well-being. With Addictofree,
                      we&#39;re not just offering a product; we&#39;re offering
                      a renewed sense of hope and a chance for a brighter
                      future.
                    </>
                  </span>
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
                  What People Are Saying
                </Text>
              </div>
              <div className="flex flex-col font-satoshivariable items-start justify-start md:px-10 sm:px-5 px-[200px] w-full">
                <Text
                  className="leading-[32.00px] text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
                  size="txtSatoshiVariableMedium24Gray600"
                >
                  <>
                    Say goodbye to the stress of disorganization and hello to a
                    more
                    <br />
                    focused, efficient, and successful you
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-satoshivariable items-start justify-center w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-gray-100_01 flex flex-1 flex-col items-start justify-start rounded-[15px] w-full">
                    <div className="flex flex-col gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[15px] w-full">
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                        <div className="bg-green-600 flex flex-col h-[60px] md:h-auto items-center justify-center rounded-[50%] w-[60px]">
                          <Img
                            className="h-14 md:h-auto object-cover w-full"
                            src="images/img_649d9d98363bd97.png"
                            alt="649d9d98363bdNinetySeven"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                          <Text
                            className="text-gray-900_02 text-lg w-full"
                            size="txtSatoshiVariableBold18"
                          >
                            Sarah Johnson
                          </Text>
                          <Text
                            className="text-[15px] text-gray-600 uppercase w-full"
                            size="txtSatoshiVariableMedium15"
                          >
                            CEO - Apple INC
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[24.00px] text-base text-gray-600"
                        size="txtSatoshiVariableMedium16"
                      >
                        <>
                          The media sharing capabilities are excellent!
                          <br />
                          images, and videos with my business
                          <br />
                          partners. I can seamlessly switch between
                          <br />
                          devices It&#39;s efficient and hassle-free! 📷
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100_01 flex flex-1 flex-col items-start justify-start rounded-[15px] w-full">
                    <div className="flex flex-col gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[15px] w-full">
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                        <div className="bg-green-600 flex flex-col h-[60px] md:h-auto items-center justify-center rounded-[50%] w-[60px]">
                          <Img
                            className="h-14 md:h-auto object-cover w-full"
                            src="images/img_649d9d98363bd97.png"
                            alt="649d9d98363bdNinetySeven"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                          <Text
                            className="text-gray-900_02 text-lg w-full"
                            size="txtSatoshiVariableBold18"
                          >
                            Sarah Johnson
                          </Text>
                          <Text
                            className="text-[15px] text-gray-600 uppercase w-full"
                            size="txtSatoshiVariableMedium15"
                          >
                            CEO - Apple INC
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[24.00px] text-base text-gray-600"
                        size="txtSatoshiVariableMedium16"
                      >
                        <>
                          The media sharing capabilities are excellent!
                          <br />
                          images, and videos with my business
                          <br />
                          partners. I can seamlessly switch between
                          <br />
                          devices It&#39;s efficient and hassle-free! 📷
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100_01 flex flex-1 flex-col items-start justify-start rounded-[15px] w-full">
                    <div className="flex flex-col gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[15px] w-full">
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                        <div className="bg-green-600 flex flex-col h-[60px] md:h-auto items-center justify-center rounded-[50%] w-[60px]">
                          <Img
                            className="h-14 md:h-auto object-cover w-full"
                            src="images/img_649d9d98363bd97.png"
                            alt="649d9d98363bdNinetySeven"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                          <Text
                            className="text-gray-900_02 text-lg w-full"
                            size="txtSatoshiVariableBold18"
                          >
                            Sarah Johnson
                          </Text>
                          <Text
                            className="text-[15px] text-gray-600 uppercase w-full"
                            size="txtSatoshiVariableMedium15"
                          >
                            CEO - Apple INC
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[24.00px] text-base text-gray-600"
                        size="txtSatoshiVariableMedium16"
                      >
                        <>
                          The media sharing capabilities are excellent!
                          <br />
                          images, and videos with my business
                          <br />
                          partners. I can seamlessly switch between
                          <br />
                          devices It&#39;s efficient and hassle-free! 📷
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100_01 flex flex-1 flex-col items-start justify-start rounded-[15px] w-full">
                    <div className="flex flex-col gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[15px] w-full">
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                        <div className="bg-green-600 flex flex-col h-[60px] md:h-auto items-center justify-center rounded-[50%] w-[60px]">
                          <Img
                            className="h-14 md:h-auto object-cover w-full"
                            src="images/img_649d9d98363bd97.png"
                            alt="649d9d98363bdNinetySeven"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                          <Text
                            className="text-gray-900_02 text-lg w-full"
                            size="txtSatoshiVariableBold18"
                          >
                            Sarah Johnson
                          </Text>
                          <Text
                            className="text-[15px] text-gray-600 uppercase w-full"
                            size="txtSatoshiVariableMedium15"
                          >
                            CEO - Apple INC
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[24.00px] text-base text-gray-600"
                        size="txtSatoshiVariableMedium16"
                      >
                        <>
                          The media sharing capabilities are excellent!
                          <br />
                          images, and videos with my business
                          <br />
                          partners. I can seamlessly switch between
                          <br />
                          devices It&#39;s efficient and hassle-free! 📷
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100_01 flex flex-1 flex-col items-start justify-start rounded-[15px] w-full">
                    <div className="flex flex-col gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[15px] w-full">
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                        <div className="bg-green-600 flex flex-col h-[60px] md:h-auto items-center justify-center rounded-[50%] w-[60px]">
                          <Img
                            className="h-14 md:h-auto object-cover w-full"
                            src="images/img_649d9d98363bd97.png"
                            alt="649d9d98363bdNinetySeven"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                          <Text
                            className="text-gray-900_02 text-lg w-full"
                            size="txtSatoshiVariableBold18"
                          >
                            Sarah Johnson
                          </Text>
                          <Text
                            className="text-[15px] text-gray-600 uppercase w-full"
                            size="txtSatoshiVariableMedium15"
                          >
                            CEO - Apple INC
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[24.00px] text-base text-gray-600"
                        size="txtSatoshiVariableMedium16"
                      >
                        <>
                          The media sharing capabilities are excellent!
                          <br />
                          images, and videos with my business
                          <br />
                          partners. I can seamlessly switch between
                          <br />
                          devices It&#39;s efficient and hassle-free! 📷
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-creatodisplay gap-10 items-center justify-start md:px-10 px-20 sm:px-5 py-10 w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900_02 w-full"
                size="txtCreatoDisplayBold36"
              >
                Awards and Affiliations
              </Text>
              <div className="flex flex-col items-start justify-center w-full">
                <div className="flex flex-col gap-10 items-center justify-start w-[97%]">
                  <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-between w-full">
                    <Img
                      className="flex-1 h-[100px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_pexelscottonbr_100x180.png"
                      alt="pexelscottonbr_Two"
                    />
                    <Img
                      className="flex-1 h-[100px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_pexelscottonbr_1.png"
                      alt="pexelscottonbr_Three"
                    />
                    <Img
                      className="flex-1 h-[100px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_pexelscottonbr_2.png"
                      alt="pexelscottonbr_Four"
                    />
                    <Img
                      className="flex-1 h-[100px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_pexelscottonbr_3.png"
                      alt="pexelscottonbr_Five"
                    />
                    <Img
                      className="flex-1 h-[100px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_pexelscottonbr_4.png"
                      alt="pexelscottonbr_Six"
                    />
                    <Img
                      className="flex-1 h-[100px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_pexelscottonbr_5.png"
                      alt="pexelscottonbr_Seven"
                    />
                  </div>
                  <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-start w-[83%] md:w-full">
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_pexelscottonbr_6.png"
                      alt="pexelscottonbr_Eight"
                    />
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_pexelscottonbr_7.png"
                      alt="pexelscottonbr_Nine"
                    />
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_pexelscottonbr_8.png"
                      alt="pexelscottonbr_Ten"
                    />
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_pexelscottonbr_9.png"
                      alt="pexelscottonbr_Eleven"
                    />
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_pexelscottonbr_10.png"
                      alt="pexelscottonbr_Twelve"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex font-satoshivariable items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
