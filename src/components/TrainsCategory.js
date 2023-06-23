import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const TrainCategory = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
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

  /*const getUsers = async () => {
    const respone = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(respone.data);
  };*/

  return (
    <section className='container px-4 py-14 lg:px-14 mx-auto flex flex-col'>
      <h1 className='text-xl lg:px-14 text-hijau sm:text-3xl md:text-4xl font-monsterrat font-bold '>Technique Training</h1>
      <div>
        <h2 className='text-lg lg:px-14 text-white sm:text-2xl font-monsterrat font-bold pt-8 pb-4 '>I want to improve my...</h2>
        <div class='container lg:px-14  py-4 '>
          <div class='flex flex-wrap '>
            <div class='flex flex-wrap  w-1/2'>
              <div class='w-1/2 p-1 h-40 md:p-2'>
                <a href='/trains/techniqueCategory/trainModul/Dribbling' className='rounded-lg h-full w-full flex justify-center items-center bg-dark-purple hover:bg-hover-purple'>
                  <h2 className='text-base sm:text-3xl font-bebas text-white p-2 sm:px-8'>Dribbling</h2>
                </a>
              </div>
              <div class='w-1/2 p-1 h-40 md:p-2'>
                <a href='/trains/techniqueCategory/trainModul/Finishing' className='rounded-lg h-full w-full flex justify-center items-center bg-dark-purple hover:bg-hover-purple'>
                  <h2 className='text-base sm:text-3xl font-bebas text-white p-2 sm:px-8'>Finishing</h2>
                </a>
              </div>
              <div class='w-full p-1 h-40 md:p-2'>
                <a href='/trains/techniqueCategory/trainModul/Crossing' className='rounded-lg h-full w-full flex justify-center items-center bg-dark-purple hover:bg-hover-purple'>
                  <h2 className='text-base sm:text-3xl font-bebas text-white p-2 sm:px-8'>Crossing</h2>
                </a>
              </div>
            </div>
            <div class='flex flex-wrap w-1/2'>
              <div class='w-full p-1 h-40 md:p-2'>
                <a href='/trains/techniqueCategory/trainModul/Control' className='rounded-lg h-full w-full flex justify-center items-center bg-dark-purple hover:bg-hover-purple'>
                  <h2 className='text-base sm:text-3xl font-bebas text-white p-2 sm:px-8'>Touch & Control</h2>
                </a>
              </div>
              <div class='w-1/2 p-1  h-40 md:p-2'>
                <a href='/trains/techniqueCategory/trainModul/Passing' className='rounded-lg h-full w-full flex justify-center items-center bg-dark-purple hover:bg-hover-purple'>
                  <h2 className='text-base sm:text-3xl font-bebas text-white p-2 sm:px-8'>Passing</h2>
                </a>
              </div>
              <div class='w-1/2 p-1 h-40 md:p-2'>
                <a href='/trains/techniqueCategory/trainModul/Header' className='rounded-lg h-full w-full flex justify-center items-center bg-dark-purple hover:bg-hover-purple'>
                  <h2 className='text-base sm:text-3xl font-bebas text-white p-2 sm:px-8'>Header</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainCategory;
