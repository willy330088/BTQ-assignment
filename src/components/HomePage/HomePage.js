import React from 'react';
import Header from '../Header/Header';
import ConferenceSection from './ConferenceSection';
import ContentSection from './ContentSection';
import section from '../../lists/section';

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="h-[18px] bg-pattern bg-contain bg-red md:h-[31px]"></div>
      <ConferenceSection />
      <div className="bg-conf bg-cover h-[170px]"></div>
      {section.map((s) => {
        return <ContentSection title={s.title} info={s.info} key={s.title} />;
      })}
    </>
  );
}
