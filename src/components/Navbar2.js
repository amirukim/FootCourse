import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

function Navbar2() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [navbar, setNavbar] = useState(false);

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setId(decoded.id);
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
        const respone = await axios.get("http://localhost:5000/token");
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

  return (
    <header className='sticky top-0 z-30 w-full px-1 py-4 bg-transparent sm:px-4 '>
      <nav className='sticky w-full bg-white rounded-lg shadow-xl'>
        <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
          <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              <a href='/homepage'>
                <h2 className='text-2xl font-bebas text-dark-purple font-bold'>FootCourse</h2>
              </a>
              <div className='md:hidden'>
                <button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border' onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' viewBox='0 0 20 20' fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
              <ul className='font-bebas text-lg items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                <li className='text-dark-purple hover:text-blue-600'>
                  <a href='/homepage'>Home</a>
                </li>
                <li className='text-dark-purple hover:text-blue-600'>
                  <a href='/learns'>Learn</a>
                </li>
                <li className='text-dark-purple hover:text-blue-600'>
                  <a href='/trains'>Train</a>
                </li>
                <li className='text-dark-purple hover:text-blue-600'>
                  <a href='/tests'>Test</a>
                </li>
                <li className=' text-dark-purple hover:text-blue-600'>
                  <a href='/boots'>Boot</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
              <ul className='font-bebas text-lg items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                <li className='text-dark-purple hover:text-blue-600'>
                  <a href={`/profile/${name}`}>{name}</a>
                </li>
                <li className='text-dark-purple hover:text-red-600'>
                  <button onClick={Logout}>Log Out</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar2;
