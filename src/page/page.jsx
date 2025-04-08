import React, { useEffect, useState } from 'react'
// import { useTranslation } from 'react-i18next';
import { GiJapan } from "react-icons/gi";
import img1 from '../assets/image.png'
import img2 from '../assets/image copy.png'
import img3 from '../assets/image copy 2.png'
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import study1 from './image copy.png'
import study2 from './image copy 2.png'
import study10 from './image copy 12.png'
import study3 from './image copy 3.png'
import study4 from './image copy 4.png'
import study5 from './image copy 5.png'
import study6 from './image copy 6.png'
import resalt from './image copy 7.png'
import Marquee from "react-fast-marquee";
import resalt2 from './image copy 8.png'
import image1 from './image copy 9.png'
import city from './image copy 10.png'
import city2 from './image copy 11.png'
import sertifikat from './image copy 13.png'
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { ChevronDown } from "lucide-react"; // Убедись, что установлен lucide-react



const page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What are the best airlines for flights to Japan?",
      answer:
        "Some of the top airlines for flights to Japan include ANA, Japan Airlines (JAL), United Airlines, and Delta Airlines.",
    },
    {
      question: "How long is a flight to Japan?",
      answer:
        "The flight duration depends on your departure city. On average, flights from the US to Japan take about 10-14 hours.",
    },
    {
      question: "Do I need a visa to travel to Japan?",
      answer:
        "Citizens of many countries, including the US, the UK, and the EU, can visit Japan for short stays (up to 90 days) without a visa. However, it’s always recommended to check with the Japanese embassy for up-to-date requirements.",
    },
    {
      question: "What is the best time to book flights to Japan?",
      answer:
        "The best time to book flights to Japan is typically 2-3 months before your travel date. For cheaper tickets, consider flying during the off-season, such as late autumn or winter.",
    },
    {
      question: "Are direct flights available to Japan?",
      answer:
        "Yes, there are direct flights to Japan from major cities like New York, Los Angeles, Chicago, and San Francisco. However, not all destinations offer direct flights.",
    },
    {
      question: "Can I get a refund if I miss my flight to Japan?",
      answer:
        "Refund policies depend on the airline and ticket type. It's advisable to check the airline’s terms and conditions. Some airlines offer rebooking options or partial refunds depending on the circumstances.",
    },
    {
      question: "What is the baggage allowance for flights to Japan?",
      answer:
        "Baggage allowance varies by airline. On average, international flights to Japan allow 1 checked bag up to 23 kg (50 lbs) and 1 carry-on bag. Check with your airline for specific details.",
    },
    {
      question: "What are the health and safety requirements for flying to Japan?",
      answer:
        "Japan may have specific health and safety protocols, including COVID-19 testing, quarantine, and vaccination requirements. Be sure to check Japan’s Ministry of Health website for the latest updates before traveling.",
    },
    {
      question: "How can I get from the airport to my hotel in Japan?",
      answer:
        "Most airports in Japan offer convenient transportation options, such as trains, buses, and taxis. You can also book airport transfer services in advance.",
    },
    {
      question: "What currency should I bring for my trip to Japan?",
      answer:
        "Japan’s official currency is the Japanese yen (JPY). While credit cards are widely accepted, it’s recommended to carry some cash, as certain places may not accept cards.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    console.log('Initializing Swiper');
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: { clickable: true },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });

    return () => {
      swiper.destroy();
      console.log('Swiper destroyed');
    };
  }, []);
  const { t, i18n } = useTranslation();

  const [loading, setLoading] = useState(false)
  const SendMessage = (event) => {
    setLoading(true)
    event.preventDefault();
    const token = "8130735213:AAHtQtiykIJm_Yjt43o22xlB99uDSOsOmH4";
    const chat_id = ""
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("name").value;
    const MessageContent = `Isim ${name} /n Failiyasi ${surname}`
    axios({
      url: url,
      method: 'POST',
      dat: {
        "chat_id": chat_id,
        "text": name
      }
    }).then((res) => {
      document.getElementById("MyForm").reset()
      alert("Mission Complate")
    }).catch((error) => {
      console.log("Yuborishda xatolik", error);
    }).finally(() => {
      setLoading(false)
    })
  }



  return (
    <div className='bg-white/75'>
      <div className="mx-auto max-w-[1440px] px-4">
        <p className="text-lg font-medium text-gray-800 bg-gradient-to-r p-4 rounded-2xl">
          {t('text1')}
        </p>
        <hr />

        <h1 className="text-3xl md:text-4xl md:w-[600px] font-medium p-5">
          {t('text2')}
        </h1>

        <div className="flex flex-col md:flex-row items-center p-4 gap-4">
          <div className="flex items-center md:w-[400px] w-full">
            <GiJapan className="text-6xl" />
            <p className="text-2xl">{t('text3')}</p>
          </div>
          <div className="flex items-center md:w-[400px] w-full">
            <GiJapan className="text-6xl" />
            <p className="text-2xl">{t('text4')}</p>
          </div>
        </div>
        <button className="w-full md:w-[334px] h-[78px] text-white rounded-4xl bg-cyan-700 text-2xl text-center transition-all duration-300 transform hover:bg-cyan-600 hover:scale-105 hover:shadow-lg">
         <a href="#sendMessage">
         {t('text5')}
          </a>
        </button>


        <p className="text-lg font-medium text-gray-800 bg-gradient-to-r p-4 rounded-2xl">
          {t('text5')}
        </p>

        <br />
        <h1 className="text-4xl text-center">{t('text6')}</h1>
        <br />

        <div className="swiper w-full md:h-[400px] h-[200px] relative">
  <div className="swiper-wrapper">
    <div className="swiper-slide">
      <img src={img1} alt="Slide 1" className="w-full h-full object-cover rounded-xl" />
    </div>
    <div className="swiper-slide">
      <img src={img2} alt="Slide 2" className="w-full h-full object-cover rounded-xl" />
    </div>
    <div className="swiper-slide">
      <img src={img3} alt="Slide 3" className="w-full h-full object-cover rounded-xl" />
    </div>
  </div>

  {/* Pagination */}
  <div className="swiper-pagination"></div>

  {/* Next Button */}
  <div className="swiper-button-next flex items-center absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-cyan-700 hover:bg-cyan-600 rounded-full shadow-lg transition-all duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5 text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
    <span className="ml-2 text-white text-lg">Next</span>
  </div>

  {/* Previous Button */}
  <div className="swiper-button-prev flex flex-row-reverse items-center absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-cyan-700 hover:bg-cyan-600 rounded-full shadow-lg transition-all duration-300">
    <span className="mr-2 text-white text-lg">Back</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5 text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
</div>

        <div>
          <br />
          <h1 className="text-4xl text-center p-4">{t('text7')}</h1>

          <div className="flex  flex-wrap justify-center gap-[100px] p-4">
            {[study1, study2, study3, study4, study5, study6].map((img, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[300px] text-center h-auto transition-transform transform hover:scale-105 p-5"
              >
                <img className="w-[144px] h-[144px] rounded-[50px] bg-white m-auto" src={img} alt="" />
                <p className="text-lg font-medium text-gray-800 bg-gradient-to-r p-4 rounded-2xl">
                  {
                    [
                      'Want to start speaking Japanese in a short time',
                      'Want to learn Japanese and build your career',
                      'Want to get a JLPT certificate and win a scholarship to prestigious Japanese universities',
                      'Plan to study and work in Japan',
                      'Have been studying for years but haven’t achieved results',
                      'Have been studying for years but haven’t achieved results',
                    ][idx]
                  }
                </p>
              </div>
            ))}
          </div>

          <br />
          <h1 className="text-4xl text-center p-4">{t('text8')}</h1>
        </div>
      </div>

      <br />
      <Marquee className='' pauseOnHover={true} speed={40}>
        <div className='flex gap-[40px]'>
          <img src={resalt} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
        </div>
      </Marquee>
      <br />
      <h1 className='text-4xl text-center p-[15px]'>{t('text9')}</h1>
      <br />
      <Marquee className='' direction='right' pauseOnHover={true} speed={40}>
        <div className='flex gap-[40px]'>
          <img src={resalt2} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt2} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt2} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt2} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt2} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt2} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt2} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt2} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt2} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
          <img src={resalt2} alt="certificate" style={{ maxWidth: "200px", marginRight: "16px", borderRadius: "12px" }} />
        </div>
      </Marquee>
      <br />
      <br />
      <div className="max-w-[1440px] w-full mx-auto px-4">
        <h1 className="text-4xl text-center p-4">{t('text10')}</h1>
        <br />

        <div className="flex flex-col md:flex-row items-center justify-between max-w-[950px] mx-auto p-4 gap-6">
          <img src={image1} alt="" className="w-full md:w-auto" />
          <p className="text-lg font-medium text-gray-800 bg-gradient-to-r p-4 rounded-2xl">
            {t('text11')}
          </p>
        </div>

        <br />
        <h1 className="text-4xl text-center p-4">{t('text12')}</h1>
        <br />
        <br />

        <div
          id="result"
          className="flex flex-col md:flex-row items-center justify-around flex-wrap gap-6"
        >
          {[500, 500, 320].map((num, idx) => (
            <div key={idx} className="w-full sm:w-[288px] h-auto text-center">
              <p className="text-[45px] w-[162px] h-[162px] m-auto rounded-full text-emerald-400 bg-white flex items-center justify-center">
                {num}+
              </p>
              <p className="text-lg font-medium text-gray-800 bg-gradient-to-r p-4 rounded-2xl">
                {
                  [
                    'Students who have received certificates',
                    'Students who have received visas',
                    'Students who have been admitted to universities',
                  ][idx]
                }
              </p>
            </div>
          ))}
        </div>

        <br />
        <br />
        <h1 className="text-4xl text-center p-4 max-w-[900px] mx-auto">{t('text13')}</h1>
      </div>

      <br />
      <Marquee className='' pauseOnHover={true} speed={40}>
        <div className="flex items-center justify-around gap-[50px] p-[20px]">
          <div className="max-w-xs bg-gradient-to-r  rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">{t('text14')}</h1>
            <p className=" opacity-90">
              {t('text15')}
            </p>
          </div>
          <div className="max-w-xs bg-gradient-to-r  rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">{t('text14')}</h1>
            <p className=" opacity-90">
              {t('text15')}
            </p>
          </div>
          <div className="max-w-xs bg-gradient-to-r  rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">{t('text14')}</h1>
            <p className=" opacity-90">
              {t('text15')}            </p>
          </div>
          <div className="max-w-xs bg-gradient-to-r  rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">{t('text14')}</h1>
            <p className=" opacity-90">
              {t('text15')}            </p>
          </div>
          <div className="max-w-xs bg-gradient-to-r  rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">{t('text14')}</h1>
            <p className=" opacity-90">
              {t('text15')}            </p>
          </div>
          <div className="max-w-xs bg-gradient-to-r  rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">{t('text14')}</h1>
            <p className=" opacity-90">
              {t('text15')}            </p>
          </div>
          <div className="max-w-xs bg-gradient-to-r  rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">{t('text14')}</h1>
            <p className=" opacity-90">
              {t('text15')}            </p>
          </div>

        </div>
      </Marquee>
      <br />
      <Marquee className='' direction='right' pauseOnHover={true} speed={40}>
        <div className='flex items-center justify-around gap-[40px] p-[20px]'>

          <div className="max-w-xs bg-gradient-to-r text-gray rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city2}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">TCC</h1>
            <p className=" opacity-80">
              {t('text17')}            </p>
          </div>
          <div className="max-w-xs bg-gradient-to-r text-gray rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city2}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">TCC</h1>
            <p className=" opacity-80">
              {t('text17')}            </p>
          </div>
          <div className="max-w-xs bg-gradient-to-r text-gray rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city2}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">TCC</h1>
            <p className=" opacity-80">
              {t('text17')}               </p>
          </div>
          <div className="max-w-xs bg-gradient-to-r text-gray rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city2}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">TCC</h1>
            <p className=" opacity-80">
              {t('text17')}               </p>
          </div>
          <div className="max-w-xs bg-gradient-to-r text-gray rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city2}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">TCC</h1>
            <p className=" opacity-80">
              {t('text17')}               </p>
          </div>
          <div className="max-w-xs bg-gradient-to-r text-gray rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city2}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">TCC</h1>
            <p className=" opacity-80">
              {t('text17')}               </p>
          </div>
          <div className="max-w-xs bg-gradient-to-r text-gray rounded-lg shadow-xl p-5 text-center hover:scale-105 transition-all duration-300">
            <img
              src={city2}
              alt="Waseda University"
              className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold  mb-2">TCC</h1>
            <p className=" opacity-80">
              {t('text17')}               </p>
          </div>
        </div>
      </Marquee>
      <br />
      <div className=' flex items-center justify-center'>
        <button className='w-full sm:w-[334px] h-[78px] text-white rounded-4xl bg-cyan-700 text-2xl text-center transition-all duration-300 transform hover:bg-cyan-600 hover:scale-105 hover:shadow-lg'>

          <a href="#sendMessage">Contact Us</a>
        </button>

      </div>
      <br />
      <br />
      <h1 id='course' className='text-4xl text-center p-[15px] m-auto'>
        Register for the Course that Suits You
      </h1>
      <br />
      <div className="w-full px-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[373px] h-[450px] shadow-lg rounded-3xl bg-white"
            >
              <img className="rounded-t-3xl w-full h-[200px] object-cover" src={study10} alt="" />
              <h1 className="flex items-center justify-between text-[19px] p-3 px-4">
                N3 Group
                <button className="w-[140px] h-[37px] text-white bg-cyan-700 rounded-3xl text-[15px] transition-all duration-300 transform hover:bg-cyan-600 hover:scale-105 hover:shadow-md">
                  Duration 4 months
                </button>

              </h1>
              <p className="px-4 pb-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea minima enim minus ad fugiat.
              </p>
              <div className="flex items-center justify-between px-4 pt-2">
                <button className="w-[140px] h-[37px] text-white bg-cyan-700 rounded-3xl text-sm transition-all duration-300 transform hover:bg-cyan-600 hover:scale-105 hover:shadow-md">
                  Register
                </button>

                <h1 className="text-cyan-700 text-[16px]">500,000 UZS / month</h1>
              </div>
            </div>
          ))}
        </div>
      </div>


      <br />
      <br />
      <h1 className='text-4xl text-center p-[15px] m-auto'>
        {t('text19')}
      </h1>
      <div className="max-w-[1440px] w-full mx-auto px-4 flex flex-col lg:flex-row items-center justify-around gap-6">
        <div className="w-full lg:w-[700px] p-4">
          <h1 className="text-2xl">
            {t('text20')}
          </h1>
          <p className="text-lg font-medium text-gray-800 bg-gradient-to-r pt-4 rounded-2xl">
            Our Nippon Learning Center is a private educational institution licensed to conduct extracurricular activities and licensed in accordance with the law. This means that you can trust us and everything is legal.
          </p>
        </div>
        <img
          src={sertifikat}
          className="w-full sm:w-[302px] h-auto max-h-[400px] object-contain"
          alt=""
        />
      </div>


      <br />
      <br />
      <div id="whyus" className='w-full max-w-[1440px] flex flex-wrap justify-center gap-[40px] m-auto text-white'>
        <div className='w-full sm:w-[450px] h-[258px] rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-white p-[5px]'>
          <h1 className='w-[80px] h-[80px] text-bold text-5xl text-white bg-cyan-700 flex items-center justify-center rounded-2xl relative bottom-[20px] left-[14px] font-bold'>01</h1>
          <h1 className='p-[5px] text-2xl font-bold text-gray-700'>{t('text21')}</h1>
          <p className='text-lg font-medium text-gray-800 bg-gradient-to-r p-4 rounded-2xl'>{t('text22')}</p>
        </div>
        <div className='w-full sm:w-[450px] h-[258px] rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-white p-[5px]'>
          <h1 className='w-[80px] h-[80px] text-bold text-5xl text-white bg-cyan-700 flex items-center justify-center rounded-2xl relative bottom-[20px] left-[14px] font-bold'>02</h1>
          <h1 className='p-[5px] text-2xl font-bold text-gray-700'>{t('text23')}</h1>
          <p className='text-lg font-medium text-gray-800 bg-gradient-to-r p-4 rounded-2xl'>{t('text24')}</p>
        </div>
        <div className='w-full sm:w-[450px] h-[258px] rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-white p-[5px]'>
          <h1 className='w-[80px] h-[80px] text-bold text-5xl text-white bg-cyan-700 flex items-center justify-center rounded-2xl relative bottom-[20px] left-[14px] font-bold'>03</h1>
          <h1 className='p-[5px] text-2xl font-bold text-gray-700'>{t('text25')}</h1>
          <p className='text-lg font-medium text-gray-800 bg-gradient-to-r p-4 rounded-2xl'>
            Lessons are conducted using interactive methods and an individual approach, guaranteeing a deep understanding of Japanese language and culture.
          </p>
        </div>
        <div className='w-full sm:w-[450px] h-[258px] rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-white p-[5px]'>
          <h1 className='w-[80px] h-[80px] text-bold text-5xl text-white bg-cyan-700 flex items-center justify-center rounded-2xl relative bottom-[20px] left-[14px] font-bold'>04</h1>
          <p className='text-lg font-medium text-gray-800 bg-gradient-to-r p-4 rounded-2xl'>{t('text27')}</p>
        </div>
        <div className='w-full sm:w-[450px] h-[258px] rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-white p-[5px]'>
          <h1 className='w-[80px] h-[80px] text-bold text-5xl text-white bg-cyan-700 flex items-center justify-center rounded-2xl relative bottom-[20px] left-[14px] font-bold'>05</h1>
          <h1 className='p-[5px] text-2xl font-bold text-gray-700'>{t('text28')}</h1>
          <p className='text-lg font-medium text-gray-800 bg-gradient-to-r p-4 rounded-2xl'>
            Evaluate your Japanese language level for free and choose the course that suits you!
          </p>
        </div>
        <div className='w-full sm:w-[450px] h-[258px] rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-white p-[5px]'>
          <h1 className='w-[80px] h-[80px] text-bold text-5xl text-white bg-cyan-700 flex items-center justify-center rounded-2xl relative bottom-[20px] left-[14px] font-bold'>06</h1>
          <p className='text-lg font-medium text-gray-800 bg-gradient-to-r p-4 rounded-2xl'>{t('text30')}</p>
        </div>
      </div>

      <br />
      <br />
      <h1 className='text-center text-[60px]'>{t('text31')}   </h1>
      <br />
      <br />

      <div>
        <div id='faq' className="w-full max-w-[1150px] mx-auto my-8 p-4">
          <h2 className="text-2xl font-semibold text-center mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {questions.map((faq, index) => (
              <div key={index} className="border-b overflow-hidden">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="w-full flex justify-between items-center text-left py-3 px-4 text-lg font-medium focus:outline-none"
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out px-4 text-gray-700 overflow-hidden ${activeIndex === index ? "max-h-40 py-2" : "max-h-0"}`}
                >
                  <div className="opacity-100">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id='sendMessage' className="bg-cyan-700 py-10 px-4">
        <div className="max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 text-gray-700">
          {/* Text Block */}
          <div className="text-center lg:text-left w-full lg:w-[50%]">
            <h1 className="font-bold text-3xl sm:text-4xl mb-4">{t('text32')}</h1>
            <p className="text-lg font-medium bg-gradient-to-r p-4 rounded-2xl lg:w-[300px]">
              {t('text33')}
            </p>
          </div>

          {/* Form Block */}
          <div className="w-full max-w-[500px] lg:w-[40%]">
            <form id="MyForm" onSubmit={SendMessage}>
              <label className="block font-medium mb-2 text-2xl text-white">
                {t('text34')}
              </label>
              <div className="space-y-5">
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full h-[55px] px-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
                <input
                  type="number"
                  id="phone"
                  placeholder="Your phone number"
                  className="w-full h-[55px] px-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="w-full h-[60px] border text-white rounded-3xl bg-cyan-800 text-2xl transition-all duration-300 transform hover:bg-cyan-700 hover:scale-105 hover:shadow-lg"
                >
                  {loading ? "Yuborlimoqda...." : "Yuborildi"}
                </button>

              </div>
            </form>
          </div>
        </div>

      </div>

    </div>
  )
}

export default page