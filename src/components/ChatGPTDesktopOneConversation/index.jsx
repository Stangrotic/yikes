import React from "react";

import { List, Text, Img } from "components";

const ChatGPTDesktopOneConversation = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="sm:flex-col flex-row gap-3 grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1194px] px-3 py-12 w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-start w-full">
            <div className="md:h-16 h-full p-3 relative rounded-md w-full">
              <div className="absolute flex flex-col gap-1 md:h-auto h-max inset-y-[0] items-start justify-center left-[3%] my-auto w-full">
                <Text
                  className="font-inter text-gray_500 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  {props?.title1}
                </Text>
                <Text
                  className="font-inter font-medium text-left text-light_green_500 w-auto"
                  as="h2"
                  variant="h2"
                >
                  {props?.conversation1}
                </Text>
              </div>
              <div className="absolute flex flex-col h-full inset-[0] items-end justify-center m-auto outline outline-[1px] outline-gray_500 p-3 rounded-md w-full">
                <div className="flex flex-col h-4 items-center justify-start my-3 w-4">
                  <Img
                    src="images/img_icons_light_green_500.svg"
                    className="h-4 rounded-sm w-4"
                    alt="icons"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-start w-full">
            <div className="md:h-16 h-full p-3 relative rounded-md w-full">
              <div className="absolute flex flex-col gap-1 md:h-auto h-max inset-y-[0] items-start justify-center left-[3%] my-auto w-full">
                <Text
                  className="font-inter text-gray_500 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  {props?.title1}
                </Text>
                <Text
                  className="font-inter font-medium text-left text-light_green_500 w-auto"
                  as="h2"
                  variant="h2"
                >
                  {props?.conversation1}
                </Text>
              </div>
              <div className="absolute flex flex-col h-full inset-[0] items-end justify-center m-auto outline outline-[1px] outline-gray_500 p-3 rounded-md w-full">
                <div className="flex flex-col h-4 items-center justify-start my-3 w-4">
                  <Img
                    src="images/img_icons_light_green_500.svg"
                    className="h-4 rounded-sm w-4"
                    alt="icons"
                  />
                </div>
              </div>
            </div>
          </div>
        </List>
        <Text
          className="font-inter text-blue_gray_800 text-center w-auto"
          as="h1"
          variant="h1"
        >
          {props?.chatgpt}
        </Text>
        <div className="flex flex-col items-center justify-start p-3 w-full">
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
                  alt="icons_Five"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ChatGPTDesktopOneConversation.defaultProps = {
  title: "Plug In",
  conversation: "Design-GPT",
  title1: "Plug In",
  conversation1: "Design-GPT",
  chatgpt: "ChatGPT",
  conversationSix: "|",
};

export default ChatGPTDesktopOneConversation;
