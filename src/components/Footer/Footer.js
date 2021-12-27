import React from 'react';
import footer from '../../lists/footer';

export default function Footer() {
  return (
    <footer className="bg-black py-[20px]">
      <ul className="flex flex-wrap justify-center md:flex-nowrap max-w-[1150px] m-auto">
        {footer.map((f) => {
          return (
            <li className="w-[45%]" key={f.title}>
              <h4 className="hidden text-[11px] text-grey text-center mb-[10px] md:block">
                {f.subtitle}
              </h4>
              <h3 className="text-[14px] text-white text-center mb-[15px]">
                {f.title}
              </h3>
              <img
                className="w-[40px] m-auto mb-[50px]"
                src={f.img}
                alt={'icon'}
              />
            </li>
          );
        })}
      </ul>
      <div className="border-t-[1px] border-solid border-grey text-white text-center py-[50px] px-[20px]">
        &copy; 2012 ANDY MCMILLAN / DESIGN BY KYLE MEYER / DEVELOPMENT BY RIOT /
        ICONS BY TIM BOELAARS / REFUND POLICY
      </div>
    </footer>
  );
}
