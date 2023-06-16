import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

function Navbar() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");

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
    <header className='sticky top-0 z-30 w-full px-2 py-4 bg-transparent sm:px-4 '>
      <nav className='sticky sm:m-4 bg-white  px-2 sm:px-4 py-2.5 rounded-lg shadow-xl'>
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='flex flex-col p-1 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-bebas md:font-bold md:border-0 md:bg-white'>
              <li>
                <a href='/homepage' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0'>
                  HOME
                </a>
              </li>
              <li>
                <a href='/learns' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0'>
                  LEARN
                </a>
              </li>
              <li>
                <a href='/trains' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0'>
                  TRAIN
                </a>
              </li>
              <li>
                <a href='/tests' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0'>
                  TESTS
                </a>
              </li>
              <li>
                <a href='/boots' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0'>
                  BOOT
                </a>
              </li>
            </ul>
          </div>
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='flex flex-col p-1 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-bebas md:font-bold md:border-0 md:bg-white'>
              <li>
                <a href={`/profile/${name}`} className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0'>
                  {name}
                </a>
              </li>
              <li>
                <button onClick={Logout} className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-400 md:p-0'>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
