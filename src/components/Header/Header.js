import React from 'react';
import BurgerMenu from './BurgerMenu';
import navTopData from '../../lists/navTop';
import navBottomData from '../../lists/navBottom';

export default function Header() {
  return (
    <header className="bg-black h-[48px] md:h-[156px]">
      <div className="h-full mx-auto flex items-center justify-between max-w-[1165px] md:justify-around">
        <div className="w-[44px] h-[44px] bg-logo bg-contain bg-no-repeat md:mx-[30px]"></div>
        <BurgerMenu />
        <nav className="hidden md:block w-[60%] mr-[50px]">
          <ul className="flex justify-between mb-[15px]">
            {navTopData.map((d) => {
              return (
                <li className="w-[100px]" key={d.day}>
                  <div className="text-grey text-[9px]">{d.day}</div>
                  <div className="text-white text-[13px]">{d.content}</div>
                </li>
              );
            })}
          </ul>
          <ul className="flex justify-between">
            {navBottomData.map((d) => {
              return (
                <li className="w-[100px]" key={d.day}>
                  <div className="text-grey text-[9px]">{d.day}</div>
                  <div className="text-white text-[13px]">{d.content}</div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
