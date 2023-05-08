import React from "react";

import { Line, Img, Text, Button } from "components";

const ChatGPTDesktopConversation = (props) => {
  return (
    <>
      <div className={props.className}>
        <Line className="bg-blue_gray_800 border-blue_gray_900_01 border-solid border-t h-1 w-full" />
        <div className="flex flex-col items-center justify-center py-[27px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center w-full">
            <Img
              src="images/img_icons_30x30.png"
              className="h-[30px] md:h-auto object-cover rounded-sm w-[30px]"
              alt="icons_Nine"
            />
            <Text
              className="flex-1 font-inter font-light leading-[16.00px] max-w-[700px] md:max-w-full text-left text-white_A700"
              as="h2"
              variant="h2"
            >
              {props?.descriptionFour}
            </Text>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                src="images/img_edit_gray_400.svg"
                className="h-4 rounded-sm w-4"
                alt="edit_Three"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue_gray_800 border-blue_gray_900_01 border-solid border-t flex flex-col items-center justify-center py-[27px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center w-full">
            <Button
              className="flex h-[30px] items-center justify-center w-[30px]"
              shape="icbRoundedBorder2"
              size="smIcn"
              variant="icbFillGray900"
            >
              <Img
                src="images/img_icons.svg"
                className="h-[22px]"
                alt="icons_Ten"
              />
            </Button>
            <Text
              className="flex-1 font-inter font-light leading-[16.00px] max-w-2xl md:max-w-full text-left text-white_A700"
              as="h2"
              variant="h2"
            >
              {props?.descriptionFive}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-[27px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center w-full">
            <Img
              src="images/img_icons_30x30.png"
              className="h-[30px] md:h-auto object-cover rounded-sm w-[30px]"
              alt="icons_Nine"
            />
            <Text
              className="flex-1 font-inter font-light leading-[16.00px] max-w-[700px] md:max-w-full text-left text-white_A700"
              as="h2"
              variant="h2"
            >
              {props?.descriptionFour}
            </Text>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                src="images/img_edit_gray_400.svg"
                className="h-4 rounded-sm w-4"
                alt="edit_Three"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue_gray_800 border-blue_gray_900_01 border-solid border-t flex flex-col items-center justify-center py-[27px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center w-full">
            <Button
              className="flex h-[30px] items-center justify-center w-[30px]"
              shape="icbRoundedBorder2"
              size="smIcn"
              variant="icbFillGray900"
            >
              <Img
                src="images/img_icons.svg"
                className="h-[22px]"
                alt="icons_Ten"
              />
            </Button>
            <Text
              className="flex-1 font-inter font-light leading-[16.00px] max-w-2xl md:max-w-full text-left text-white_A700"
              as="h2"
              variant="h2"
            >
              {props?.descriptionFive}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-[27px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center w-full">
            <Img
              src="images/img_icons_30x30.png"
              className="h-[30px] md:h-auto object-cover rounded-sm w-[30px]"
              alt="icons_Nine"
            />
            <Text
              className="flex-1 font-inter font-light leading-[16.00px] max-w-[700px] md:max-w-full text-left text-white_A700"
              as="h2"
              variant="h2"
            >
              {props?.descriptionFour}
            </Text>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                src="images/img_edit_gray_400.svg"
                className="h-4 rounded-sm w-4"
                alt="edit_Three"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue_gray_800 border-blue_gray_900_01 border-solid border-t flex flex-col items-center justify-center py-[27px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center w-full">
            <Button
              className="flex h-[30px] items-center justify-center w-[30px]"
              shape="icbRoundedBorder2"
              size="smIcn"
              variant="icbFillGray900"
            >
              <Img
                src="images/img_icons.svg"
                className="h-[22px]"
                alt="icons_Ten"
              />
            </Button>
            <Text
              className="flex-1 font-inter font-light leading-[16.00px] max-w-2xl md:max-w-full text-left text-white_A700"
              as="h2"
              variant="h2"
            >
              {props?.descriptionFive}
            </Text>
            <div className="flex flex-row gap-3 items-start justify-start self-stretch w-auto">
              <Img
                src="images/img_airplane.svg"
                className="h-4 rounded-sm w-4"
                alt="airplane"
              />
              <Img
                src="images/img_volume.svg"
                className="h-4 rounded-sm w-4"
                alt="volume"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-start p-3 w-full">
          <div className="flex flex-col items-start justify-start self-stretch w-auto">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[177px] w-auto"
              leftIcon={
                <div className="h-4 mb-px mr-3 w-4 rounded-sm">
                  <Img
                    src="images/img_icons_1.svg"
                    className="rounded-sm"
                    alt="Icons"
                  />
                </div>
              }
              shape="RoundedBorder6"
              size="sm"
              variant="OutlineGray500"
            >
              <div className="font-inter font-medium text-gray_400 text-left text-sm">
                {props?.stopRegenerating}
              </div>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-blue_gray_800 flex md:flex-col flex-row gap-3 items-center justify-end p-3 rounded-md w-full">
              <div className="flex flex-1 flex-col items-start justify-center w-full">
                <Text
                  className="font-inter font-medium text-blue_gray_50 text-left w-auto"
                  as="h2"
                  variant="h2"
                >
                  {props?.conversationSix}
                </Text>
              </div>
              <div className="flex flex-col h-4 items-center justify-start w-4">
                <Img
                  src="images/img_icons_blue_gray_800.svg"
                  className="h-4 rounded-sm w-4"
                  alt="icons_Twelve"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ChatGPTDesktopConversation.defaultProps = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.",
  descriptionOne:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.▮",
  descriptionTwo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.",
  descriptionThree:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.▮",
  descriptionFour:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.",
  descriptionFive:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.▮",
  stopRegenerating: "Stop Regenerating",
  conversationSix: "|",
};

export default ChatGPTDesktopConversation;
