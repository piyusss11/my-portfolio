import { FC } from "react";
import { FaGithub, FaLinkedin, FaVideo } from "react-icons/fa";
import { FaHashnode, FaLink } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { HiBars2 } from "react-icons/hi2";
import { MdOutlineMore } from "react-icons/md";
interface IconProps {
  className?: string;
  link?: string;
}
export const SettingIcon: FC<IconProps> = ({ className }) => {
  return <HiBars2 className={`${className}`} />;
};
export const GithubIcon: FC<IconProps> = ({
  className,
  link = "https://github.com/piyusss11",
}) => {
  return (
    <a href={link} target="_blank">
      <FaGithub
        className={`hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer ${className}`}
      />
    </a>
  );
};
export const LinkedinIcon: FC<IconProps> = ({ className }) => {
  return (
    <a href="https://www.linkedin.com/in/piyusss11/" target="_blank">
      <FaLinkedin
        className={`hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer ${className}`}
      />
    </a>
  );
};
export const HashnodeIcon: FC<IconProps> = ({ className }) => {
  return (
    <a href="https://hashnode.com/@piyusss11" target="_blank">
      <FaHashnode
        className={`hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer ${className}`}
      />
    </a>
  );
};
export const TwitterIcon: FC<IconProps> = ({ className }) => {
  return (
    <a href="https://twitter.com/piyusss11" target="_blank">
      <FaXTwitter
        className={`hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer ${className}`}
      />
    </a>
  );
};

export const VideoIcon: FC<IconProps> = ({ className, link }) => {
  return (
    <a href={link} target="_blank">
      <FaVideo
        className={`hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer ${className}`}
      />
    </a>
  );
};
export const LinkIcon: FC<IconProps> = ({ className, link }) => {
  return (
    <a href={link} target="_blank">
      <FaLink
        className={`hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer ${className}`}
      />
    </a>
  );
};

export const MoreProjectsIcon: FC<IconProps> = ({
  className,
  link = "https://docs.google.com/spreadsheets/d/1LVBCuGuXQgOYJhftaqfEfnaNVioPh6XusDYHq6M9jWM/edit?usp=sharing",
}) => {
  return (
    <a href={link} target="_blank">
      <MdOutlineMore className={` rotate-180  ${className}`} />
    </a>
  );
};
