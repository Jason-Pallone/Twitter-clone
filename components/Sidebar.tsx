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

function SideBar() {

  return (
    <div>
      <Image 
        src={twitterIcon}
        alt="twitter icon"
        height="24"
        width="24"
       />
    </div>
  )
}

export default SideBar