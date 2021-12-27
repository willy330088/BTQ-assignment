import React from 'react';
import Header from '../Header/Header';
import ConferenceSection from './ConferenceSection';
import ContentSection from './ContentSection';
import section from '../../lists/section';
import popupList from '../../lists/popupList';

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="h-[18px] bg-shadow bg-contain bg-red md:h-[31px]"></div>
      <ConferenceSection />
      <div className="bg-conf bg-cover h-[170px]"></div>
      {section.map((s) => {
        return <ContentSection title={s.title} info={s.info} key={s.title} />;
      })}
      <section className="px-[20px] mt-[30px] bg-divider bg-repeat-x bg-center bg-dividerH">
        <ul className="sm:flex sm:justify-around max-w-[1150px] m-auto">
          {popupList.map((p) => {
            return (
              <li className="mb-[30px] sm:w-[47%]">
                <h4 className="text-center text-grey mt-[30px] mb-[10px] text-[11px]">
                  {p.subtitle}
                </h4>
                <h2 className="text-center text-black mb-[15px] text-[18px]">
                  {p.title}
                </h2>
                <p className="text-dark mb-[20px] text-[13px]">{p.content}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
