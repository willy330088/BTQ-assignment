import React from 'react';
import workshops from '../../lists/workshops';
import festival from '../../lists/festival';
import fringe from '../../lists/fringe';
import ContentItem from './ContentItem';

export default function ContentSection({ title, info }) {
  function showMainContent() {
    if (title === 'Workshops') {
      return (
        <ul className="w-full sm:flex sm:flex-wrap sm:justify-around max-w-[1150px]">
          {workshops.map((w) => {
            return (
              <ContentItem
                key={w.title}
                subtitle={w.subtitle}
                title={w.title}
                content={w.content}
                img={w.img}
              />
            );
          })}
        </ul>
      );
    } else if (title === 'Festival') {
      return (
        <ul className="w-full md:flex max-w-[1150px] md:justify-around">
          {festival.map((f) => {
            return (
              <li className="mb-[70px] md:w-[30%]" key={f.title}>
                <div className="bg-black w-full rounded-[5px]">
                  <img src={f.img} alt={'related-pic'} className="m-auto" />
                </div>
                <h4 className="text-center text-grey mt-[30px] mb-[10px] text-[11px]">
                  {f.subtitle}
                </h4>
                <h2 className="text-center text-black mb-[15px] text-[18px]">
                  {title}
                </h2>
                <p className="text-dark mb-[20px] text-[13px]">{f.content}</p>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <ul className="w-full sm:flex sm:flex-wrap sm:justify-around max-w-[1150px]">
          {fringe.map((f) => {
            return (
              <ContentItem
                key={f.title}
                subtitle={f.subtitle}
                title={f.title}
                content={f.content}
                img={f.img}
              />
            );
          })}
        </ul>
      );
    }
  }

  return (
    <div className="px-[20px] py-[50px] flex flex-col items-center bg-divider bg-repeat-x bg-center bg-dividerH">
      <h2 className="mb-[15px] w-[250px] text-center text-[30px] md:text-[38px] lg:text-[48px] pb-[17px] bg-nutsRed bg-no-repeat bg-center bg-nuts">
        {title}
      </h2>
      <p className="text-center text-[15px] text-grey mb-[48px] sm:text-[18px] md:text-[17px] lg:text-[21px] lg:mb-[20px] max-w-[560px]">
        {info}
      </p>
      {showMainContent()}
    </div>
  );
}
