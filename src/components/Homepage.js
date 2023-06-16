import React, { useState, useEffect, setImageSrc } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
//import { Carousel, initTE } from "tw-elements";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
//import { RxDotFilled } from "react-icons/rx";

const Homepage = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      //const response = await axios.get("http://localhost:5000/token");
      const response = await axios.get("https://footcourse-backend-production.up.railway.app/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const respone = await axios.get("https://footcourse-backend-production.up.railway.app/token");
        config.headers.Authorization = `Bearer ${respone.data.accessToken}`;
        setToken(respone.data.accessToken);
        const decoded = jwt_decode(respone.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const slides = [
    {
      url: "./images/pic1.jpg",
    },
    {
      url: "./images/pic2.jpg",
    },
    {
      url: "./images/pic3.jpg",
    },

    {
      url: "./images/pic4.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  /*const getUsers = async () => {
    const respone = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(respone.data);
  };*/

  return (
    <section className='container py-10 mx-auto flex flex-col'>
      <div className='flex justify-around px-2 pb-5 '>
        <div>
          <h1 className='text-5xl md:text-7xl font-bold font-monsterrat text-hijau mt-10 mb-9'>Welcome {name} !</h1>
          <h2 className='text-3xl md:text-5xl font-semibold font-monsterrat text-white mt-4 mb-4'>Its Time to be a Pro</h2>
          <h3 className='text-2xl md:text-3xl font-bebas text-hijau mt-4 '>
            DONT GIVEUP, STAY WAKE UP<h3 className='text-2xl font-bebas text-white mb-12 '> BE PROFESSIONAL!</h3>
          </h3>
        </div>
        <div className='hidden md:block '>
          <img src='./images/shilloutes1.png' alt='' />
        </div>
      </div>
      <div className='container p-2 md:p-5  m-auto rounded-2xl bg-dark-purple grid grid-cols-3  md:grid-cols-4'>
        <div className='hidden md:block p-4'>
          <img src='./images/silhouette2.svg' alt='' />
        </div>
        <div className='flex flex-col items-center border-r-4 border-gray-400 px-1 md:px-8 '>
          <p className='font-bebas text-white/90 text-lg md:text-2xl my-8'>Train</p>
          <p className='text-center font-bebas text-white/90 text-lg md:text-2xl'>Providing videos of fitness training modules and football skills based on the user's position selection.</p>
        </div>
        <div className='flex flex-col items-center border-r-4 border-gray-400 px-1 md:px-8 '>
          <p className='font-bebas text-white/90  text-lg md:text-2xl my-8'>Learn</p>
          <p className=' text-center font-bebas text-white/90 text-lg md:text-2xl'>Providing tactical videos and information on how to play a football role.</p>
        </div>
        <div className='px-1 md:px-8 flex flex-col items-center '>
          <p className='font-bebas text-white/90  text-lg md:text-2xl my-8 '>Boot</p>
          <p className='text-center font-bebas text-white/90 text-lg md:text-2xl'>Provides information about the user-selected soccer shoes and compares them to other soccer shoes.</p>
        </div>
      </div>
      <div className='container my-5 py-10'>
        <figure class='max-w-screen-md mx-auto text-center'>
          <svg aria-hidden='true' className='w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 text-gray-400' viewBox='0 0 24 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
              fill='currentColor'
            />
          </svg>
          <blockquote>
            <p className='text-xl md:text-5xl italic font-monsterrat font-bold text-hijau'>"When people succeed, it is because of hard work. Luck has nothing to do with success."</p>
          </blockquote>
          <figcaption className='flex items-center justify-center mt-6 space-x-3'>
            <div className='flex items-center divide-x-2 divide-gray-500 '>
              <cite className='pr-3 text-l font-bebas text-white'>Diego Maradona</cite>
              <cite className='pl-3 text-l font-bebas text-gray-400'>the greatest players in the history of Football</cite>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className='container p-1  md:p-5 my-5'>
        <div className='container p-2 md:p-5  m-auto  rounded-2xl bg-dark-purple grid grid-cols-1  md:grid-cols-2'>
          <div className='flex flex-col justify-center items-center p-1 md:p-2'>
            <h4 className='font-monsterrat font-bold text-base md:text-3xl text-white'>In Collaboration with:</h4>
            <div className='flex flex-col justify-center items-center md:p-4'>
              <img src='./images/logo.png' className='w-1/2' alt='' />
              <h4 className='text-base md:text-2xl font-bebas text-white/60'>Akademi Bola Sepak UTHM Kids</h4>
            </div>
          </div>
          <div className='flex flex-row h-40 sm:h-full gap-2 p-1 md:p-2'>
            <div className=' flex justify-center items-center group-hover:block   left-5 text-2xl rounded-lg p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-lg bg-center bg-cover duration-500'></div>
            {/* Left Arrow */}

            {/* Right Arrow */}
            <div className='flex justify-center items-center group-hover:block  right-5 text-2xl rounded-lg p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>
      </div>

      {/*<div className='container p-1 m-1 md:m-5'>
        <div className='flex flex-col sm:flex-row items-center justify-center  gap-3 '>
          <div className='flex md:flex-col justify-evenly items-center bg-dark-purple p-5  md:p-3 rounded-lg w-full'>
            <div>
              <h1 className='font-bebas text-white '>Description</h1>
            </div>
            <div>
              <h1 className='font-bebas text-white '>Train</h1>
            </div>
          </div>
          <div className='bg-dark-purple  p-5 md:p-3 rounded-lg  w-full'>
            <div>
              <h1 className='font-bebas text-white '>Description</h1>
            </div>
            <div>
              <h1 className='font-bebas text-white '>Learn</h1>
            </div>
          </div>
          <div className='bg-dark-purple  p-5 md:p-3 rounded-lg  w-full'>
            <div>
              <h1 className='font-bebas text-white '>Description</h1>
            </div>
            <div>
              <h1 className='font-bebas text-white '>Boots</h1>
            </div>
          </div>
        </div>
      </div>*/}
    </section>
  );
};

export default Homepage;
