import React from 'react';
import SpeakerTop from '../../lists/SpeakerTop';
import SpeakerBottom from '../../lists/SpeakerBottom';

export default function ConferenceSection() {
  return (
    <section className="bg-red flex flex-col items-center px-[6%] md:py-[50px]">
      <h2 className="text-[30px] text-white py-[30px] md:text-[38px] lg:text-[48px]">
        Get Ready to Build
      </h2>
      <p className="text-[11px] text-pink text-center tracking-[1px] mb-[20px] lg:text-[13px]">
        NOVEMBER 12-16, 2012 IN BELFAST, NORTHERN IRELAND
      </p>
      <p className="text-[15px] leading-[21px] text-pink text-center tracking-[1px] max-w-[560px] pb-[48px] sm:text-[18px] sm:leading-[25px] md:text-[17px] lg:text-[21px] lg:max-w-[820px] lg:pb-[20px]">
        Build is a festival for people who design for the web. For one week in
        November, a community of smart, talented people come together to share
        ideas, tell stories, get their hands dirty, and drink
        a&nbsp;few&nbsp;beers.
      </p>
      <button className="w-[140px] h-[40px] text-white bg-black rounded-[7px] mb-[35px]">
        SOLD OUT
      </button>
      <ul className="w-[100%] max-w-[1165px] sm:flex sm:flex-wrap md:justify-between">
        {SpeakerTop.map((speaker) => {
          return (
            <li className="mb-[30px] sm:w-[50%] md:w-[22%]" key={speaker.name}>
              <img src={speaker.photoURL} alt={speaker} className="m-auto" />
              <h3 className="text-center text-pink text-[18px]">
                {speaker.name}
              </h3>
            </li>
          );
        })}
      </ul>
      <ul className="w-[100%] max-w-[1165px] sm:flex sm:flex-wrap md:justify-evenly">
        {SpeakerBottom.map((speaker, index) => {
          if (index + 1 === SpeakerBottom.length) {
            return (
              <li
                className="mb-[30px] sm:w-[100%] md:w-[22%]"
                key={speaker.name}
              >
                <img src={speaker.photoURL} alt={speaker} className="m-auto" />
                <h3 className="text-center text-pink text-[18px]">
                  {speaker.name}
                </h3>
              </li>
            );
          } else {
            return (
              <li
                className="mb-[30px] sm:w-[50%] md:w-[22%]"
                key={speaker.name}
              >
                <img src={speaker.photoURL} alt={speaker} className="m-auto" />
                <h3 className="text-center text-pink text-[18px]">
                  {speaker.name}
                </h3>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
}
