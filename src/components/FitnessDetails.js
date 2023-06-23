import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Player } from "video-react";

const FitnessDetails = () => {
  const navigate = useNavigate();
  const [videoModul, setModule] = useState([]);
  const { courseName } = useParams();
  //const { aspect } = useParams();
  // const [selectedModule, setSelectedModule] = useState([]);
  const [moduleName, setModuleName] = useState("");
  const [moduleLevel, setModuleLevel] = useState("");
  const [moduleDuration, setModuleDuration] = useState("");
  const [moduleImage, setModuleImage] = useState("");
  const [equipment1, setEquipment1] = useState("");
  const [equipment2, setEquipment2] = useState("");
  const [iconEquipment1, setIconEquipment1] = useState("");
  const [iconEquipment2, setIconEquipment2] = useState("");

  const module = useEffect(() => {
    getVideoByModul();
    getSelectedModule();
  }, []);

  const getSelectedModule = async () => {
    const response = await axios.get(`https://footcourse-backend-production.up.railway.app/train/fitness/${courseName}`);
    //setSelectedModule(response.data);
    setModuleName(response.data.courseName);
    setModuleLevel(response.data.level);
    setModuleDuration(response.data.duration);
    setModuleImage(response.data.image);
    setEquipment1(response.data.equipment1);
    setEquipment2(response.data.equipment2);
    setIconEquipment1(response.data.iconEquipment1);
    setIconEquipment2(response.data.iconEquipment2);
  };

  const getVideoByModul = async () => {
    const response = await axios.get(`https://footcourse-backend-production.up.railway.app/train/fitness/${courseName}/video`);
    setModule(response.data);
  };

  return (
    <section className='container py-10 lg:px-14 mx-auto flex flex-col'>
      <div className='pl-4 md:pt-6 flex flex-row gap-1 items-center lg:px-14'>
        <a href='/trains/fitness' className='text-base text-white sm:text-lg font-monsterrat font-bold  hover:text-hijau'>
          Trains
        </a>{" "}
        <Icon className='font-bold text-white' icon='ep:arrow-right-bold' />
        <a href='/trains/fitness' className='text-base text-white sm:text-lg font-monsterrat font-bold hover:text-hijau'>
          Fitness
        </a>
        <Icon className='font-bold text-white' icon='ep:arrow-right-bold' />
        <h3 className='text-base text-oren sm:text-lg font-monsterrat font-bold inline'>{moduleName}</h3>
      </div>

      <div className='flex justify-center lg:px-14'>
        <div className='p-4 flex justify-center w-full'>
          <div className='flex flex-col md:flex-row  shadow bg-dark-purple w-full rounded-2xl overflow-hidden cursor-pointer'>
            <img class='object-cover w-full h-48 md:h-full md:w-1/3 pr-8' src={`/images/Trains/Fitness/${moduleImage}`} />
            <div className='flex p-4 justify-between sm:flex-col'>
              <div>
                <h4 className='text-lg md:text-4xl py-2 font-bebas text-white'>{moduleName}</h4>
                <h4 className='text-sm py-2 font-monsterrat text-white'>
                  <Icon className='inline mx-1' icon='carbon:skill-level-advanced' />
                  {moduleLevel}
                </h4>
              </div>

              <div>
                <h4 className='text-sm py-2 font-monsterrat text-white'>Equipment:</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 '>
                  <div className='flex flex-col justify-center items-center  bg-white/20 py-1 px-4 rounded-lg'>
                    <Icon className='inline mx-1 text-white text-base md:text-3xl' icon={`${iconEquipment1}`} />
                    <h4 className='hidden md:block mx-1 text-sm  font-bebas text-white'>{equipment1}</h4>
                  </div>
                  <div className='flex flex-col justify-center items-center  bg-white/20 py-1 px-4 rounded-lg'>
                    <Icon className='inline mx-1 text-white text-base md:text-3xl' icon={`${iconEquipment2}`} />
                    <h4 className='hidden md:block mx-1 text-sm font-bebas text-white'>{equipment2}</h4>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <h4 className=' inline text-2xl py-4 font-bebas text-white'>
                  <Icon className='inline mx-1 text-white' icon='ic:round-access-time' />
                  {moduleDuration} min
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:px-14'>
        <h2 className='pl-4 pt-6 text-base text-white sm:text-2xl font-monsterrat font-bold '>Exercises</h2>
        <div className='flex justify-center'>
          <div className='p-4 grid grid-cols-1 gap-4 w-3/4'>
            <div className='flex flex-col lg:flex-row shadow  w-full bg-dark-purple rounded-2xl overflow-hidden cursor-pointer'>
              <video className='hidden md:block' width='60%' height='70%' controls>
                                
                <source src={`/videos/warmup.mp4`} type='video/mp4' />
                            
              </video>
              <video className='block md:hidden' width='100%' height='50%' controls>
                                
                <source src={`/videos/warmup.mp4`} type='video/mp4' />
                            
              </video>
              <div className='relative p-4 sm:flex sm:flex-col sm:justify-between'>
                <h4 className='text-3xl py-2 font-bebas text-white'>Warm Up</h4>
                <h4 className='text-l py-2 font-monsterrat text-white'>
                  <Icon className='inline mx-1' icon='carbon:skill-level-advanced' />
                  Fundamental
                </h4>
                <div className='flex justify-center items-center w-1/3 bg-hijau rounded-lg'>
                  <h4 className='px-4 text-l py-2 font-monsterrat font-semibold text-darkpurple'>Preparation</h4>
                </div>

                <p className='text-base py-2 font-semibold text-justify text-white/80'>Do this warm up session before you start the training module.</p>
              </div>
            </div>
            {videoModul.map((video, index) => (
              <div className='flex flex-col lg:flex-row shadow  w-full bg-dark-purple rounded-2xl overflow-hidden cursor-pointer' key={index.id}>
                <video className='hidden md:block' width='60%' height='70%' controls>
                                  
                  <source src={`/videos/fitness/${video.videoLocation}`} type='video/mp4' />
                              
                </video>

                <video className='block md:hidden' width='100%' height='50%' controls>
                                  
                  <source src={`/videos/fitness/${video.videoLocation}`} type='video/mp4' />
                              
                </video>

                <div className='relative p-4 sm:flex sm:flex-col sm:justify-between'>
                  <h4 className='text-3xl py-2 font-bebas text-white'>{video.videoName}</h4>
                  <h4 className='text-l py-2 font-monsterrat text-white'>
                    <Icon className='inline mx-1' icon='carbon:skill-level-advanced' />
                    {video.courselevel}
                  </h4>
                  <div className='flex justify-center items-center w-1/3 bg-hijau rounded-lg'>
                    <h4 className='px-4 text-l py-2 font-monsterrat font-semibold text-darkpurple'>{video.aspect}</h4>
                  </div>

                  <p className='text-base py-2 font-semibold text-justify text-white/80'>{video.detail}</p>
                </div>
              </div>
            ))}
            <div className='flex flex-col lg:flex-row shadow  w-full bg-dark-purple rounded-2xl overflow-hidden cursor-pointer'>
              <video className='hidden md:block' width='60%' height='70%' controls>
                                
                <source src={`/videos/cooldown.mp4`} type='video/mp4' />
                            
              </video>
              <video className='block md:hidden' width='100%' height='50%' controls>
                                
                <source src={`/videos/cooldown.mp4`} type='video/mp4' />
                            
              </video>
              <div className='relative p-4 sm:flex sm:flex-col sm:justify-between'>
                <h4 className='text-3xl py-2 font-bebas text-white'>Cool Down</h4>
                <h4 className='text-l py-2 font-monsterrat text-white'>
                  <Icon className='inline mx-1' icon='carbon:skill-level-advanced' />
                  Fundamental
                </h4>
                <div className='flex justify-center items-center w-1/3 bg-hijau rounded-lg'>
                  <h4 className='px-4 text-l py-2 font-monsterrat font-semibold text-darkpurple'>Fitness</h4>
                </div>

                <p className='text-base py-2 font-semibold text-justify text-white/80'>Do this cooldown session when you finish the training module.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessDetails;
