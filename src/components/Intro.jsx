import React from 'react'

import SocialButton from './SocialButton'

import { introText, introLinks } from '../constants/index.js'

const Intro = () => {
  return (
    <div className='dark:bg-white/25 bg-lightPurple/25
      md:w-23/24 flex justify-center mb-20 ss:mb-40 p-10 ss:p-16 px-14 sm:px-22 md:px-32 lg:pr-16
      md:rounded-r-full'>
      <div className='max-w-screen-xl flex content-center items-center'>
        <div className='lg:w-8/12 lg:mr-32 flex justify-center'>
          <div>
            <div className='flex justify-center lg:hidden select-none mb-5 '>
              <img src='julian.jpg' className='rounded-full drop-shadow-5 h-32 w-32 ss:h-56 ss:w-56' />
            </div>
            <div className='dark:text-washedYellow text-darkBlue dark:text-whi te'>
              <div className='flex justify-center'>
                <div className='w-max'>
                  <div className='ss:text-xl text-left hidden sm:block'>{introText.hi}</div>
                  <div className='text-[1.75rem] xs:text-4xl ss:text-5xl md:text-6xl
                    drop-shadow-4 sm:text-center font-semibold'>
                    {introText.name}
                    </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='text-2xl ss:text-3xl text-center
                  dark:border-t-washedYellow border-t-2
                  w-max pt-2 xs:pt-4 px-4 sm:px-20 mt-2 xs:mt-4 mb-7 xs:mb-10'>
                    {introText.title}
                </div>
              </div>
              <div className='text-lg ss:text-[1.35rem] text-left leading-9'>{introText.paragraph}</div>
            </div>
            {/*
            <div className='mt-10 flex justify-center'>
              {
                introLinks.map((e) => (
                  <SocialButton key={'SocialButton' + e.name} name={e.name} url={e.url} download={e.download} svgPath={e.svgPath} />
                ))
              }
            </div>
            */}
          </div>
        </div>
        <div className='hidden lg:block select-none'>
          <img src='julian.jpg' className='rounded-full w-72 drop-shadow-5' />
        </div>
      </div>
    </div>
  )
}

export default Intro