import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Trains = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
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

  /*const getUsers = async () => {
    const respone = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(respone.data);
  };*/

  return (
    <section className='container p-4 py-16 lg:px-14 mx-auto flex flex-col'>
      <h1 className='text-xl lg:px-14 text-hijau sm:text-3xl  md:text-4xl Fitness font-monsterrat font-bold '>Training Session</h1>
      <div>
        <h2 className='text-lg lg:px-14 text-white sm:text-2xl font-monsterrat font-bold pt-8 pb-4 '>Explore</h2>
        <div className='flex flex-col gap-8 lg:px-14'>
          <div className='container h-40  bg-dark-purple rounded-lg  hover:bg-hover-purple '>
            <a href='/trains/techniqueCategory' className=' h-full w-full flex items-center'>
              <h2 className='text-lg sm:text-3xl font-bebas text-white p-2 sm:px-8'>Develop your Technique</h2>
            </a>
          </div>
          <div className='container h-40 bg-dark-purple  rounded-lg hover:bg-hover-purple flex items-center'>
            <a href='/trains/fitness' className=' h-full w-full flex items-center'>
              <h2 className='text-lg sm:text-3xl font-bebas text-white p-2 sm:px-8'>Improve your Fitness</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trains;
