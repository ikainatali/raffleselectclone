//card icons
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaInstagramSquare } from "react-icons/fa";

import { LiaFacebookSquare } from "react-icons/lia";
import { FaSquareFacebook } from "react-icons/fa6";

import { PiYoutubeLogoLight } from "react-icons/pi";
import { PiYoutubeLogoFill } from "react-icons/pi";

import { PiTiktokLogoLight } from "react-icons/pi";
import { IoLogoTiktok } from "react-icons/io5";

import { FaXTwitter } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const cardData = [
  {
    icon: <PiInstagramLogoLight size={40} />,
    iconHover: <FaInstagramSquare size={37} color="#C13584" />,
    title: "Instagram Giveaway",
    text: "Select a winner at random from your photos or videos.",
    comingSoon: true,
    bgStye: "h-full bg-gradient-to-r from-purple via-red to-yellow rounded-2xl",
  },
  {
    icon: <LiaFacebookSquare size={40} />,
    iconHover: <FaSquareFacebook size={36} color="#3A55A0" />,
    title: "Facebook Giveaway",
    text: "Select a winner at random from your posts.",
    comingSoon: true,
    bgStye: "h-full bg-[#3A55A0] rounded-2xl",
  },
  {
    icon: <PiYoutubeLogoLight size={40} />,
    iconHover: <PiYoutubeLogoFill size={36} color="#F11204" />,
    title: "Youtube Giveaway",
    text: "Select a winner at random from your videos.",
    comingSoon: false,
    bgStye: " h-full bg-[#F11204] rounded-2xl",
  },
  {
    icon: <PiTiktokLogoLight size={40} />,
    iconHover: <IoLogoTiktok size={36} />,
    title: "Tiktok Giveaway",
    text: "Select a winner at random from your Tiktok video comments.",
    comingSoon: false,
    bgStye: "h-full bg-[#5CECE7] rounded-2xl",
  },
  {
    icon: <FaXTwitter size={36} />,
    iconHover: <FaSquareXTwitter size={38} />,
    title: "Twitter Giveaway",
    text: "Select a winner at random from your tweet and followers.",
    comingSoon: false,
    bgStye: "h-full bg-[#000000] rounded-2xl",
  },
];

export default cardData;
