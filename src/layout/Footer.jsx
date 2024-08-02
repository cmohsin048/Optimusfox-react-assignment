import { Arrow } from '../assets/Icons';
import logo from '../assets/logo.svg';
import { LayoutContainer } from './LayoutContainer';

export function Footer() {
  return (
    <LayoutContainer>
      <div className='hidden md:block py-8 px-7 border border-secondary-border rounded-xl border-solid p-2'>
        <div className='flex justify-between'>
          <div className=''>
            <img src={logo} alt='logo' />
            <h1 className='text-base pt-2'>The new creative community.</h1>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-xs'>Subscribe to newsletter</span>
            <div className='flex flex-col gap-2'>
              <div className='flex relative'>
                <input
                  placeholder='Email address'
                  className='bg-zinc-800 p-3 w-[300px] rounded-xl'
                />
                <div className='absolute left-[260px] top-[15px]'>
                  <Arrow />
                </div>
              </div>
              <div className='text-[#71717A] text-xs'>
                <p>By signing up for email, you agree to QSTN's </p>
                <span className='text-[#A855F7]'>
                  {' '}
                  Terms of Service
                </span> and{' '}
                <span className='text-[#A855F7]'> Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
        <div className='text-xs flex justify-between pt-8'>
          <span className='text-[#52525B]'>
            Copyright © 2023 Sink. All rights reserved
          </span>
          <div className='flex gap-2'>
            <span className='text[#E4E4E7]'>Terms of Service</span>
            <span className='text[#E4E4E7]'>Privacy Policy</span>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
}
