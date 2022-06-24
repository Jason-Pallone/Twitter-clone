import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import Image from "next/image";
import twitterIcon from "../public/images/twitter.png"
import SideBarRow from "./SidebarRow";

function SideBar() {
  return (
    <div className="flex flex-col col-span-2">
      <Image 
        src={twitterIcon}
        alt="twitter icon"
        height="24"
        width="24"
       />
       <SideBarRow Icon={HomeIcon} title="Home" />
       <SideBarRow Icon={HashtagIcon} title="Explore" />
       <SideBarRow Icon={BellIcon} title="Notifications" />
       <SideBarRow Icon={MailIcon} title="Messages" />
       <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
       <SideBarRow Icon={CollectionIcon} title="Lists" />
       <SideBarRow Icon={UserIcon} title="Sign In" />
       <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default SideBar