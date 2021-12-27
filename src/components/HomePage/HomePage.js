import React from 'react';
import Header from '../Header/Header';
import ConferenceSection from './ConferenceSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="h-[18px] bg-pattern bg-contain bg-red md:h-[31px]"></div>
      <ConferenceSection />
    </>
  );
}
