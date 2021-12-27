import React from 'react';

export default function BurgerMenu() {
  return (
    <div className="w-[44px] md:hidden">
      <div className="w-[18px] h-[3px] rounded-[3px] bg-white mb-[3px] mx-auto"></div>
      <div className="w-[18px] h-[3px] rounded-[3px] bg-white mb-[3px] mx-auto"></div>
      <div className="w-[18px] h-[3px] rounded-[3px] bg-white mx-auto"></div>
    </div>
  );
}
