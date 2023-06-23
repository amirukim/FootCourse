import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

const TrainModul = () => {
  const navigate = useNavigate();
  const [trainModul, setModul] = useState([]);
  const { aspect } = useParams();

  useEffect(() => {
    getModulByAspect();
  }, []);

  const getModulByAspect = async () => {
    const response = await axios.get(`https://footcourse-backend-production.up.railway.app/train/technique/${aspect}`);
    setModul(response.data);
  };

  return (
    <section className='container py-10 lg:px-14 mx-auto flex flex-col min-h-screen'>
      <div className='pl-4 lg:px-14 pt-6 flex flex-row gap-1 items-center'>
        <a href='/trains/techniqueCategory' className='text-base text-white sm:text-lg font-monsterrat font-bold  hover:text-hijau'>
          Technique
        </a>
        <Icon className='font-bold text-white' icon='ep:arrow-right-bold' />
        <a href={`/trains/techniqueCategory/trainModul/${aspect}`} className='text-base text-oren sm:text-lg font-monsterrat font-bold '>
          {aspect}
        </a>
      </div>
      <div className='mx-1 px-2 lg:px-14'>
        <h2 className='pt-4 text-base text-white sm:text-2xl font-monsterrat font-bold '>{aspect} Module</h2>
        <div className='py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
          {trainModul.map((Technique, index) => (
            <a href={`/trains/techniqueCategory/trainModul/${aspect}/${Technique.courseName}`} className='flex flex-col xl:flex-row'>
              <div className='flex flex-col xl:flex-row shadow hover:bg-white/20 w-full bg-hover-purple rounded-lg overflow-hidden cursor-pointer' key={index.id}>
                <img class='object-cover w-auto h-48 md:h-full md:w-52' src={`/images/Trains/Technique/${Technique.image}`} alt={Technique.courseName} />
                <div className='relative p-4 sm:flex sm:flex-col sm:justify-between'>
                  <h4 className='text-2xl py-2 font-bebas text-white'>{Technique.courseName}</h4>

                  <div className='w-fit p-2 rounded-lg bg-white/20'>
                    <p className=' sm:text-lg font-bebas text-white'>{Technique.duration} Min</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainModul;
