import type { SectionTitleProps } from "../../types/type";



function ButtonPrimary({ innerText, className }: SectionTitleProps) {
  return <button className={`${className} text-white hover:scale-105 transition-all duration-300 bg-primary01 cursor-pointer  `}>{innerText}</button>;
}

export default ButtonPrimary;
