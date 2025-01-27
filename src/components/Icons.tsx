import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
interface IconProps {
  className?: string;
}
export const GithubIcon: FC<IconProps> = ({ className }) => {
  return (
    <a href="https://github.com/piyusss11" target="_blank">
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
