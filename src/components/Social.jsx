import React from "react";
import {
  FaFacebookF,
  FaTelegram,
  FaWhatsapp,
  FaLinkedinIn,
  FaVk
} from "react-icons/fa";

const SocialShare1 = [
  {Social: <FaFacebookF/>, link: "https://www.linkedin.cn/in/alexey-tarasov-13a400222/"},
  {Social: <FaVk/>, link: "https://github.com/TarasovAleksei"},
  {Social: <FaWhatsapp/>, link: "https://wa.me/79256523200"},
  {Social: <FaLinkedinIn/>, link: "https://www.linkedin.cn/in/"},
  {Social: <FaTelegram/>, link: "https://t.me/79256523200"},
];

export const Social1 = () => {
  return (
      <div className="nav social-icons justify-content-center">
        {SocialShare1.map((val, i) => (
            <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
              {val.Social}
            </a>
        ))}
      </div>
  );
};
const SocialShare2 = [
  {Social: <FaFacebookF/>, link: "https://www.linkedin.cn/in/alexey-tarasov-13a400222/"},
  {Social: <FaVk/>, link: "https://github.com/TarasovAleksei"},
  {Social: <FaWhatsapp/>, link: "https://wa.me/79256523200"},
  {Social: <FaLinkedinIn/>, link: "https://www.linkedin.cn/in/"},
  {Social: <FaTelegram/>, link: "https://t.me/79256523200"},
];

export const Social2 = () => {
  return (
      <div className="nav social-icons justify-content-center">
        {SocialShare2.map((val, i) => (
            <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
              {val.Social}
            </a>
        ))}
      </div>
  );
};
