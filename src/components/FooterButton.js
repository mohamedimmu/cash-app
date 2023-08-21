import React from 'react'

const FooterButton = ({ src, title }) => {
  return (
    <button className="p-3 border border-white border-solid rounded-[7px] flex gap-2 justify-center items-center font-primary uppercase font-extrabold text-xs bg-black w-full sm:w-auto">
      <img src={src} alt={title} />
      <p>{title}</p>
    </button>
  )
}

export default FooterButton
