import React, { useState } from 'react';
import logo from './1.png';
import uzs from './image copy.png';
import eng from './image copy 2.png';
import ru from './image copy 3.png';
import { useTranslation } from 'react-i18next';
import japan from './image.png';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const storedLanguage = localStorage.getItem('language') || 'en';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleChange = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-white">
            <div className="w-full max-w-[1440px] m-auto p-[10px] flex items-center justify-between">
                <div className="flex gap-[15px] items-center">
                    <img className="w-[90px] h-[90px]" src={logo} alt="Logo" />
                    <div>
                        <p className="w-[100px] text-lg">{t('navbar5')}</p>
                        <p className="text-sm">{t('navbar6')}</p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="gap-[20px] flex text-lg hidden md:flex">
                    <li><a href="#whyus">{t('navbar1')}</a></li>
                    <li><a href="#result">{t('navbar2')}</a></li>
                    <li><a href="#course">{t('navbar3')}</a></li>
                    <li><a href="#faq">{t('navbar4')}</a></li>
                </ul>

                {/* Language Selector and Contact Info */}
                <div className="flex items-center gap-[10px]">
                    <div className="flex gap-[10px]">
                        <img
                            className="w-[18px] h-[18px] cursor-pointer"
                            onClick={() => handleChange('en')}
                            src={eng}
                            alt="English"
                        />
                        <img
                            className="w-[18px] h-[18px] cursor-pointer"
                            onClick={() => handleChange('jpn')}
                            src={japan}
                            alt="Japan"
                        />
                        <img
                            className="w-[18px] h-[18px] cursor-pointer"
                            onClick={() => handleChange('ru')}
                            src={ru}
                            alt="Russian"
                        />
                        <img
                            className="w-[18px] h-[18px] cursor-pointer"
                            onClick={() => handleChange('uz')}
                            src={uzs}
                            alt="Uzbek"
                        />
                    </div>

                    <div className="space-y-2 text-lg font-medium text-gray-700">
                        <p><span className="text-cyan-400">📞</span> +998 (94) 772 2032</p>
                        <p><span className="text-cyan-400">📞</span> +998 (90) 444 7000</p>
                    </div>


                    {/* Burger Icon for Mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-xl text-gray-700">☰</button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-100 p-4 flex flex-col items-center">
                    <ul className="flex flex-col gap-4">
                        <li><a href="#">{t('navbar1')}</a></li>
                        <li><a href="#">{t('navbar2')}</a></li>
                        <li><a href="#">{t('navbar3')}</a></li>
                        <li><a href="#">{t('navbar4')}</a></li>
                    </ul>

                    <div className="flex gap-4 mt-4">
                        <img
                            className="w-[20px] h-[20px] cursor-pointer"
                            onClick={() => handleChange('en')}
                            src={eng}
                            alt="English"
                        />
                        <img
                            className="w-[20px] h-[20px] cursor-pointer"
                            onClick={() => handleChange('jpn')}
                            src={japan}
                            alt="Japan"
                        />
                        <img
                            className="w-[20px] h-[20px] cursor-pointer"
                            onClick={() => handleChange('ru')}
                            src={ru}
                            alt="Russian"
                        />
                        <img
                            className="w-[20px] h-[20px] cursor-pointer"
                            onClick={() => handleChange('uz')}
                            src={uzs}
                            alt="Uzbek"
                        />
                    </div>

                    <div className="mt-4">
                        <p>+998 (94) 772 2032</p>
                        <p>+998 (90) 444 7000</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
