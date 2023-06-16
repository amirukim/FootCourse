import React, { useState, useEffect } from "react";
import axios from "axios";
//import jwt_decode from "jwt-decode";
//import { useNavigate } from "react-router-dom";

const Tests = () => {
  const [techniqueTest, setTechniqueTest] = useState([]);
  const [fitnessTest, setFitnessTest] = useState([]);
  //const navigate = useNavigate();

  useEffect(() => {
    //refreshToken();
    getFitnessTest();
    getTechniqueTest();
  }, []);

  const getFitnessTest = async () => {
    const response = await axios.get("http://localhost:5000/test/fitness");
    setFitnessTest(response.data);
  };
  const getTechniqueTest = async () => {
    const response = await axios.get("http://localhost:5000/test/technique");
    setTechniqueTest(response.data);
  };

  return (
    <section className='container  py-10 mx-auto flex flex-col'>
      <h1 className='text-xl text-hijau sm:text-4xl  md:text-5xl Fitness font-monsterrat font-bold '>Test</h1>
      <div>
        <h2 className='text-base text-white sm:text-2xl font-monsterrat font-bold pt-8 pb-4 '>Fitness Test</h2>
        <div className='py-4 grid grid-cols-1 gap-2 m-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:w-full'>
          {fitnessTest.map((FitnessTest, index) => (
            <a href={`/tests/fitness/${FitnessTest.testName}`} className='flex flex-col xl:flex-row'>
              <div className='flex items-center flex-col p-5 xl:flex-row shadow hover:bg-white/20 w-full bg-hover-purple rounded-lg overflow-hidden cursor-pointer' key={index.id}>
                <h4 className='text-2xl py-2 font-bebas text-white '>{FitnessTest.testName}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div>
        <h2 className='text-base text-white sm:text-2xl font-monsterrat font-bold pt-8 pb-4  '>Technique Test</h2>
        <div className='py-4 grid grid-cols-1 gap-2 m-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:w-full'>
          {techniqueTest.map((TechniqueTest, index) => (
            <a href={`/tests/technique/${TechniqueTest.testName}`} className='flex flex-col xl:flex-row'>
              <div className='flex flex-col xl:flex-row shadow hover:bg-white/20 w-full bg-hover-purple rounded-lg overflow-hidden cursor-pointer' key={index.id}>
                <div className='relative p-4 sm:flex sm:flex-col sm:justify-between'>
                  <h4 className='text-2xl py-2 font-bebas text-white'>{TechniqueTest.testName}</h4>

                  <div className='w-fit p-2 rounded-lg bg-white/20'>
                    <p className=' sm:text-lg font-bebas text-white'>{TechniqueTest.aspect}</p>
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

export default Tests;
