import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets = () => {
  return(
    <div className="px-2 mt-2 col-span-2">
      <div className="flex items-center space-x-2 p-3 rounded-full mt-2 bg-gray-100">
        <SearchIcon className="h-5 w-5 text-gray-400"/>
        <input type="text" placeholder="Search Twitter"
         className="flex-1 outline-none bg-transparent" />
      </div>

      <TwitterTimelineEmbed 
       sourceType="profile"
       screenName="code_caboose"
       options={{ height: 1000 }}
      />
    </div>
  )
    
}

export default Widgets