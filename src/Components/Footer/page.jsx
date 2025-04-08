import React from 'react';
import img from './1.png'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='bg-gray-700'>
    <div className='w-full max-w-[1440px] bg-gray-700 text-white m-auto flex flex-col sm:flex-row items-center justify-between p-4'>
  <img src={img} className="w-[60px] h-[60px] mb-4 sm:mb-0" alt="logo" />
  <ul className='flex gap-[15px] mb-4 sm:mb-0'>
    <li><a href="#whyus">{t('navbar1')}</a></li>
                    <li><a href="#result">{t('navbar2')}</a></li>
                    <li><a href="#course">{t('navbar3')}</a></li>
                    <li><a href="#faq">{t('navbar4')}</a></li>
  </ul>
  <div className="text-center sm:text-left">
    <p className="text-lg font-medium"><span className="text-cyan-400">📞</span> +998 (94) 772 2032</p>
    <p className="text-lg font-medium"><span className="text-cyan-400">📞</span> +998 (90) 444 7000</p>
  </div>
</div>

    </div>
  )
}

export default Footer