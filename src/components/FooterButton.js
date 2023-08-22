import React from 'react'

const FooterButton = ({ src, title, theme }) => {
  return (
    <button className={`p-3 border ${ theme === "white" ? "border-white bg-black text-white" : "border-black bg-white text-black"}  border-solid rounded-[7px] flex gap-2 justify-center items-center font-primary uppercase font-extrabold text-xs  w-full sm:w-auto`}>
      <img src={src} alt={title} />
      <p>{title}</p>
    </button>
  )
}

export default FooterButton
