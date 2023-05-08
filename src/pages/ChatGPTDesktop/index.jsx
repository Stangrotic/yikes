import React from "react";

import ChatGPTDesktopMenu from "components/ChatGPTDesktopMenu";
import ChatGPTDesktopConversation from "components/ChatGPTDesktopConversation";

const ChatGPTDesktopPage = () => {
  return (
    <>
      <div className="bg-blue_gray_900 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <ChatGPTDesktopMenu className="bg-gray_900 flex flex-col h-[1024px] md:hidden justify-start md:px-5 w-[248px]" />
        <ChatGPTDesktopConversation className="bg-light_green_500 flex flex-1 flex-col h-[1024px] md:h-auto items-center justify-end max-w-[1194px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ChatGPTDesktopPage;
