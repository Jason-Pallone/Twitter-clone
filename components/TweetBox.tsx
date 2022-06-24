import React from "react";
import Image from "next/image";
import defaultImg from "../public/images/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg"
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon
} from "@heroicons/react/outline"

const TweetBox = ()=> {
  return(
    <div className="flex space-x-2 p-5">
      <Image 
        src={defaultImg}
        alt=""
        className="rounded-full object-cover mt-4"
        height="35"
        width="35"
       />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input type="text" placeholder="What's Happening" className="h-24 w-full text-xl outline-none placeholder:text-xl"/>
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
                <PhotographIcon className="h-5 w-5" />
                <SearchCircleIcon className="h-5 w-5" />
                <EmojiHappyIcon className="h-5 w-5" />
                <CalendarIcon className="h-5 w-5" />
                <LocationMarkerIcon className="h-5 w-5" />
            </div>

            <button className="bg-twitter px-5 py-2 font-bold text-white rounded-full">Tweet</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox