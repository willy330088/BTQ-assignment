import React from 'react';

export default function ContentItem({ subtitle, title, content, img }) {
  return (
    <li className="mb-[70px] sm:w-[47%] md:w-[22%]">
      <div className="bg-red w-full rounded-[5px]">
        <img src={img} alt={'related-pic'} className="m-auto" />
      </div>
      <h4 className="text-center text-grey mt-[30px] mb-[10px] text-[11px]">
        {subtitle}
      </h4>
      <h2 className="text-center text-black mb-[15px] text-[18px]">{title}</h2>
      <p className="text-dark mb-[20px] text-[13px]">{content}</p>
    </li>
  );
}
