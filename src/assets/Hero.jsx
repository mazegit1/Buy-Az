import React from 'react';
import adfirst from './img/adfisrt.png';
import adsecond from './img/adsecond.png';
import adthird from './img/adthird.png';
import adfourth from './img/adfourth.png';
import adfifth from './img/adfifth.png';
import adsixth from './img/adsixth.png';
import vitofirst from './img/vitofirst.png';
import vitosecond from './img/vitosecond.png';
import vitothird from './img/vitothird.png';
import mainlogo from './img/mainlogo.png';

const Hero = () => {
  return (
    <>
      <div id='/' className='hero'>
        <div className='hero-top mt-14 px-4 sm:px-6 md:px-8 lg:px-10'>
          <div className='hero-title'>
            <h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[96px] font-semibold text-center'>
              Find anything that you <br /> want, in one 
              <span className='text-[#5E2BFF]'> website!</span>
            </h1>
          </div>
          <div className='hero-buttons flex items-center gap-4 sm:gap-6 md:gap-8 justify-center mt-6 flex-wrap'>
            <div className='hero-button active:translate-x-[-5px] transition-all ease-in-out duration-300 cursor-pointer mb-6 sm:mb-10 md:mb-16 lg:mb-20 active:translate-y-[-5px] rounded-3xl px-6 sm:px-8 md:px-10 lg:px-[50px] py-3 sm:py-4 md:py-5 lg:py-[16px] text-white text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold bg-[#5E2BFF]'>
              Get Started
            </div>
            <div className='hero-button active:translate-x-[-5px] transition-all ease-in-out duration-300 cursor-pointer mb-6 sm:mb-10 md:mb-16 lg:mb-20 active:translate-y-[-5px] rounded-3xl px-6 sm:px-8 md:px-10 lg:px-[50px] py-3 sm:py-4 md:py-5 lg:py-[16px] bg-[#E85F5C] font-semibold text-lg sm:text-xl md:text-2xl lg:text-[24px] text-black'>
              Contact Us
            </div>
          </div>
        </div>
        <div id='ads' className='hero-bottom'>
          <div className='hero-bottom_title font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14'>
            Our Partners
          </div>
          <div className='hero-ads grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center justify-items-center px-4 sm:px-6 md:px-8 lg:px-10'>
            <img src={adfirst} alt='Partner 1' className='h-auto max-w-full' />
            <img src={adsecond} alt='Partner 2' className='h-auto max-w-full' />
            <img src={adthird} alt='Partner 3' className='h-auto max-w-full' />
            <img src={adfourth} alt='Partner 4' className='h-auto max-w-full' />
            <img src={adfifth} alt='Partner 5' className='h-auto max-w-full' />
            <img src={adsixth} alt='Partner 6' className='h-auto max-w-full' />
          </div>
        </div>
      </div>

      <div className='info grid grid-cols-1 sm:grid-cols-3 mt-10 sm:mt-16 md:mt-20 pb-8 sm:pb-10 md:pb-14 pt-8 sm:pt-10 md:pt-14 bg-[#d4d4d4] gap-6 sm:gap-8'>
        <div className='infos'>
          <h1 className='text-3xl sm:text-[70px] text-center text-[#5E2BFF] font-bold'>
            100K+
          </h1>
          <p className='text-gray-500 font-semibold text-lg sm:text-xl md:text-[28px] text-center'>
            USERS
          </p>
        </div>
        <div className='infos'>
          <h1 className='text-3xl sm:text-[70px] text-center text-[#5E2BFF] font-bold'>
            500K+
          </h1>
          <p className='text-gray-500 font-semibold text-lg sm:text-xl md:text-[28px] text-center'>
            CLASSIFIEDS
          </p>
        </div>
        <div className='infos'>
          <h1 className='text-3xl sm:text-[70px] text-center text-[#5E2BFF] font-bold'>
            25000+
          </h1>
          <p className='text-gray-500 font-semibold text-lg sm:text-xl md:text-[28px] text-center'>
            USERS/DAY
          </p>
        </div>
      </div>

      <div id='cards' className='cards mb-10 sm:mb-16 md:mb-20 flex items-center flex-col mt-10 sm:mt-16 md:mt-20'>
        <div className='cards-title font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14'>
          Our Testimonials
        </div>
        <div className='cards-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16 xl:gap-20 px-4 sm:px-6 md:px-8 lg:px-10'>
          <div className='card'>
            <div className='card-top pb-2 sm:pb-4 mb-2 gap-2 sm:gap-4 flex items-center'>
              <img
                src={vitofirst}
                alt='Vito Corleone'
                className='w-12 sm:w-16 md:w-20'
              />
              <h1 className='text-lg sm:text-xl md:text-2xl font-bold'>
                Vito Corleone
              </h1>
            </div>
            <div className='card-bottom'>
              <p className='text-[#17212199] font-normal text-base sm:text-lg md:text-[18px]'>
                “I needed to find old cars to sell, I found them! I can assure
                you it’s the best classifieds service I have ever seen. The user
                interface is incredibly intuitive and makes browsing through
                listings a breeze. The search functionality is powerful,
                allowing me to filter by make, model, year, and price range with
                ease. ”
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='card-top pb-2 sm:pb-4 mb-2 gap-2 sm:gap-4 flex items-center'>
              <img
                src={vitosecond}
                alt='Vito Corleone'
                className='w-12 sm:w-16 md:w-20'
              />
              <h1 className='text-lg sm:text-xl md:text-2xl font-bold'>
                Vito Corleone
              </h1>
            </div>
            <div className='card-bottom'>
              <p className='text-[#17212199] font-normal text-base sm:text-lg md:text-[18px]'>
                “I needed to find old cars to sell, I found them! I can assure
                you it’s the best classifieds service I have ever seen. The user
                interface is incredibly intuitive and makes browsing through
                listings a breeze. The search functionality is powerful,
                allowing me to filter by make, model, year, and price range with
                ease. ”
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='card-top pb-2 sm:pb-4 mb-2 gap-2 sm:gap-4 flex items-center'>
              <img
                src={vitothird}
                alt='Vito Corleone'
                className='w-12 sm:w-16 md:w-20'
              />
              <h1 className='text-lg sm:text-xl md:text-2xl font-bold'>
                Vito Corleone
              </h1>
            </div>
            <div className='card-bottom'>
              <p className='text-[#17212199] font-normal text-base sm:text-lg md:text-[18px]'>
                “I needed to find old cars to sell, I found them! I can assure
                you it’s the best classifieds service I have ever seen. The user
                interface is incredibly intuitive and makes browsing through
                listings a breeze. The search functionality is powerful,
                allowing me to filter by make, model, year, and price range with
                ease. ”
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className='footer pb-4 flex items-center justify-between pt-8 mx-6 sm:mx-12 md:mx-24 border-t border-t-gray-400 flex-wrap gap-6'
        id='contacts'
      >
        <div className='footer-left'>
          <div className='footer-wrapper flex items-center gap-4 sm:gap-6'>
            <img src={mainlogo} className='h-8 sm:h-10 md:h-12' alt='Logo' />
            <div className='header-left flex items-center'>
              <a
                href='/'
                className='text-[#5E2BFF] font-bold text-2xl sm:text-3xl md:text-4xl'
              >
                Buy.<span className='text-[#E85F5C]'>az</span>
              </a>
            </div>
          </div>
          <div className='footer-info mt-2'>
            <p className='text-gray-500 font-medium text-sm sm:text-base md:text-[20px]'>
              Babek Pr. 14.
            </p>
            <p className='text-gray-500 font-medium text-sm sm:text-base md:text-[20px]'>
              Baku, Azerbaijan.
            </p>
          </div>
        </div>
        <div className='footer-right'>
          <h1 className='text-base sm:text-xl md:text-2xl font-semibold text-gray-500'>
            Made by Huseyn Khalil | Mazegit
          </h1>
          <a
            href='https://github.com/mazegit1'
            className='text-base sm:text-xl md:text-2xl font-semibold text-[#5E2BFF]'
          >
            Github Profile Here
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
