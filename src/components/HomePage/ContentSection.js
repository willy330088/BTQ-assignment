import React from 'react';

export default function ContentSection({ title, info }) {
  return (
    <div className="px-[20px] py-[50px] flex flex-col items-center bg-divider bg-repeat-x bg-center bg-dividerH">
      <h2 className="mb-[15px] w-[250px] text-center text-[30px] md:text-[38px] lg:text-[48px] pb-[17px] bg-nutsRed bg-no-repeat bg-center bg-nuts">
        {title}
      </h2>
      <p className="text-center text-[15px] text-grey sm:text-[18px] md:text-[17px] lg:text-[21px] max-w-[560px]">
        {info}
      </p>
    </div>
  );
}
