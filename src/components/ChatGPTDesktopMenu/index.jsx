import React from "react";

import { Img, Text } from "components";

const ChatGPTDesktopMenu = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="bg-gray_900 flex flex-col gap-3 h-[336px] md:h-auto items-end justify-start p-3 w-full">
          <div className="flex flex-row gap-3 items-center justify-start outline outline-[1px] outline-blue_gray_900 p-3 rounded-md w-56">
            <div className="flex flex-col h-4 items-center justify-start w-4">
              <Img
                src={props?.computerFour}
                className="h-4 rounded-sm w-4"
                alt="computer_Four"
              />
            </div>
            <div className="flex flex-col h-5 md:h-auto items-start justify-center w-full">
              <Text
                className="font-inter font-medium text-blue_gray_50 text-left w-auto"
                as="h2"
                variant="h2"
              >
                {props?.conversationFive}
              </Text>
            </div>
          </div>
          <div className="bg-blue_gray_900 flex flex-row gap-3 items-center justify-start p-3 rounded-md w-full">
            <div className="flex flex-col h-4 items-center justify-start w-4">
              <Img
                src={props?.computerFour}
                className="h-4 rounded-sm w-4"
                alt="computer_Four"
              />
            </div>
            <div className="flex flex-1 flex-col h-5 md:h-auto items-start justify-center w-full">
              <Text
                className="font-inter font-medium text-blue_gray_50 text-left w-auto"
                as="h2"
                variant="h2"
              >
                {props?.conversationOne}
              </Text>
            </div>
            <div className="flex flex-col h-4 items-center justify-start w-4">
              <Img
                src={props?.iconsOne}
                className="h-4 rounded-sm w-4"
                alt="icons_One"
              />
            </div>
            <div className="flex flex-col h-4 items-center justify-start w-4">
              <Img
                src={props?.iconsOne}
                className="h-4 rounded-sm w-4"
                alt="icons_One"
              />
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start p-3 rounded-md w-full">
            <div className="flex flex-col h-4 items-center justify-start w-4">
              <Img
                src={props?.computerFour}
                className="h-4 rounded-sm w-4"
                alt="computer_Four"
              />
            </div>
            <div className="flex flex-1 flex-col h-5 md:h-auto items-start justify-center w-full">
              <Text
                className="font-inter font-medium text-blue_gray_50 text-left w-auto"
                as="h2"
                variant="h2"
              >
                {props?.conversationFive}
              </Text>
            </div>
          </div>
          <div className="md:h-11 h-[45px] relative w-full">
            <div className="absolute bg-blue_gray_900_01 flex flex-row gap-3 h-max inset-[0] items-center justify-between m-auto p-3 rounded-md w-56">
              <div className="flex flex-col h-4 items-center justify-start w-4">
                <Img
                  src={props?.computerFour}
                  className="h-4 rounded-sm w-4"
                  alt="computer_Four"
                />
              </div>
              <div className="flex flex-col h-5 md:h-auto items-start justify-center w-full">
                {!!props?.conversationThree ? (
                  <Text
                    className="font-inter font-medium text-blue_gray_50 text-left w-auto"
                    as="h2"
                    variant="h2"
                  >
                    {props?.conversationThree}
                  </Text>
                ) : null}
              </div>
            </div>
            <div className="absolute bottom-[0] md:h-6 h-[31px] right-[0] w-[13%]">
              <div className="md:h-6 h-[31px] m-auto w-full">
                {!!props?.createfromframe ? (
                  <div className="absolute bottom-[0] h-6 right-[0] shadow-bs w-6"></div>
                ) : null}
                {!!props?.ellipseone ? (
                  <div className="absolute bg-red_A400_87 h-5 left-[0] rounded-[50%] top-[0] w-5"></div>
                ) : null}
              </div>
              {!!props?.cursor ? (
                <Img
                  src={props?.cursor}
                  className="absolute bottom-[0] h-6 right-[0] w-6"
                  alt="cursor"
                />
              ) : null}
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start p-3 rounded-md w-full">
            <div className="flex flex-col h-4 items-center justify-start w-4">
              <Img
                src={props?.computerFour}
                className="h-4 rounded-sm w-4"
                alt="computer_Four"
              />
            </div>
            <div className="flex flex-1 flex-col h-5 md:h-auto items-start justify-center w-full">
              <Text
                className="font-inter font-medium text-blue_gray_50 text-left w-auto"
                as="h2"
                variant="h2"
              >
                {props?.conversationFive}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start p-3 rounded-md w-full">
            <div className="flex flex-col h-4 items-center justify-start w-4">
              <Img
                src={props?.computerFour}
                className="h-4 rounded-sm w-4"
                alt="computer_Four"
              />
            </div>
            <div className="flex flex-1 flex-col h-5 md:h-auto items-start justify-center w-full">
              <Text
                className="font-inter font-medium text-blue_gray_50 text-left w-auto"
                as="h2"
                variant="h2"
              >
                {props?.conversationFive}
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gray_900 border-blue_gray_900 border-solid border-t flex flex-col gap-3 h-[282px] md:h-auto items-end justify-between p-3 w-full">
          <div className="flex flex-row gap-2.5 items-center justify-start px-2.5 py-[13px] rounded-md w-full">
            <div className="flex flex-col h-4 items-center justify-start w-4">
              <Img
                src={props?.maximize}
                className="h-4 rounded-sm w-4"
                alt="maximize"
              />
            </div>
            <Text
              className="flex-1 font-inter font-medium text-blue_gray_50 text-left w-auto"
              as="h2"
              variant="h2"
            >
              {props?.conversationtitFour}
            </Text>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-start px-2.5 py-[13px] rounded-md w-full">
            <div className="flex flex-col h-4 items-center justify-start w-4">
              <Img
                src={props?.maximize}
                className="h-4 rounded-sm w-4"
                alt="maximize"
              />
            </div>
            <Text
              className="flex-1 font-inter font-medium text-blue_gray_50 text-left w-auto"
              as="h2"
              variant="h2"
            >
              {props?.conversationtitFour}
            </Text>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-start px-2.5 py-[13px] rounded-md w-full">
            <div className="flex flex-col h-4 items-center justify-start w-4">
              <Img
                src={props?.maximize}
                className="h-4 rounded-sm w-4"
                alt="maximize"
              />
            </div>
            <Text
              className="flex-1 font-inter font-medium text-blue_gray_50 text-left w-auto"
              as="h2"
              variant="h2"
            >
              {props?.conversationtitFour}
            </Text>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-start px-2.5 py-[13px] rounded-md w-full">
            <div className="flex flex-col h-4 items-center justify-start w-4">
              <Img
                src={props?.maximize}
                className="h-4 rounded-sm w-4"
                alt="maximize"
              />
            </div>
            <Text
              className="flex-1 font-inter font-medium text-blue_gray_50 text-left w-auto"
              as="h2"
              variant="h2"
            >
              {props?.conversationtitFour}
            </Text>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-start px-2.5 py-[13px] rounded-md w-full">
            <div className="flex flex-col h-4 items-center justify-start w-4">
              <Img
                src={props?.maximize}
                className="h-4 rounded-sm w-4"
                alt="maximize"
              />
            </div>
            <Text
              className="flex-1 font-inter font-medium text-blue_gray_50 text-left w-auto"
              as="h2"
              variant="h2"
            >
              {props?.conversationtitFour}
            </Text>
          </div>
        </div>
      </aside>
    </>
  );
};

ChatGPTDesktopMenu.defaultProps = {
  icons: "images/img_computer.svg",
  conversation: "Conversation",
  computer: "images/img_computer.svg",
  conversationOne: "New Chat",
  edit: "images/img_icons_gray_400_16x16.svg",
  iconsOne: "images/img_icons_gray_400_16x16.svg",
  computerOne: "images/img_computer.svg",
  conversationTwo: "Conversation",
  computerTwo: "images/img_computer.svg",
  computerThree: "images/img_computer.svg",
  conversationFour: "Conversation",
  computerFour: "images/img_computer.svg",
  conversationFive: "Conversation",
  iconsTwo: "images/img_maximize.svg",
  conversationtit: "Log out",
  iconsThree: "images/img_maximize.svg",
  conversationtitOne: "Log out",
  iconsFour: "images/img_maximize.svg",
  conversationtitTwo: "Log out",
  share: "images/img_maximize.svg",
  conversationtitThree: "Log out",
  maximize: "images/img_maximize.svg",
  conversationtitFour: "Log out",
};

export default ChatGPTDesktopMenu;
