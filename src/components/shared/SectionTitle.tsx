import type { SectionTitleProps } from "../../types/type"


function SectionTitle({innerText, className} : SectionTitleProps) {
  return (
    <h2 className={`text-[#191919] font-semibold text-center  text-4xl ${className}`}> {innerText} </h2>
  )
}

export default SectionTitle