import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Boots(props) {
  const [boots, setBoots] = useState([]);
  const [selected, setSelected] = useState("");
  const [link, setLink] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [foot, setFoot] = useState("");
  const [position, setPosition] = useState("");
  const [material, setMaterial] = useState("");
  const [ground, setGround] = useState("");

  const [link2, setLink2] = useState("");
  const [brand2, setBrand2] = useState("");
  const [price2, setPrice2] = useState("");
  const [image2, setImage2] = useState("");
  const [foot2, setFoot2] = useState("");
  const [position2, setPosition2] = useState("");
  const [material2, setMaterial2] = useState("");
  const [ground2, setGround2] = useState("");

  useEffect(() => {
    getBoots();
    //getBootById();
  }, []);

  /*const getBoots = async () => {
    const response = await axios.get("http://localhost:5000/boot").then((response) => {
      setBoots(response.data);
    });
  };*/

  const getBoots = async () => {
    const response = await axios.get("https://footcourse-backend-production.up.railway.app/boot").then((response) => {
      setBoots(response.data);
    });
  };
  /*const getBootById = async () => {
    const response = await axios.get(`http://localhost:5000/boot/ ${value}`);
    setDetails(response.data.details);
    setPrice(response.data.price);
  };*/

  return (
    <>
      <section className='container py-10 mx-auto flex flex-col lg:px-14'>
        <h1 className='text-xl text-hijau sm:text-3xl md:text-4xl font-monsterrat font-bold lg:px-14'>Boot</h1>
        <div className='lg:px-14'>
          <h2 className=' text-base text-white sm:text-2xl font-monsterrat font-bold pt-8 pb-4 '>Determine Your Foot</h2>
          <div className='p-2 rounded-2xl bg-dark-purple'>
            <p className='text-base font-semibold text-white/80 text-justify sm:text-lg m-2 p-5'>
              If your not sure about your size then you can measure your feet at home, this is as simple as standing on a ruler and measuring the length and then the width. For length measure from the
              heel to either your big toe or second toe whichever is the longest distance, and for width measure the widest part of your foot. Reduce these measurements by 3-5mm and then compare with
              the chart below.
            </p>
          </div>
        </div>
        <div className='lg:px-14'>
          <h2 className=' text-base text-white sm:text-2xl font-monsterrat font-bold pt-8 md:pt-10 pb-4 '>Boot Comparision</h2>
          <div className='md:relative md:mx-auto lg:px-14s'>
            <div className='p-4 grid grid-cols-1 sm:grid-cols-2 gap-6 md:h-auto md:max-w-7xl md:mx-auto md:place-content-evenly'>
              <div className='flex flex-col bg-dark-purple p-4 rounded-2xl'>
                <select
                  className='text-white bg-white/20  hover:bg-neutral-300 hover:text-dark-purple focus:ring-2 focus:outline-none font-bebas  rounded-lg md:text-2xl text-md px-4 py-2.5 text-center inline-flex items-center'
                  onChange={(e) => {
                    console.log(e.target.value);
                    const b = boots.find((x) => x.id == e.target.value);
                    console.log(b);
                    setLink(b.buyLink);
                    setBrand(b.brand);
                    setPrice(b.price);
                    setImage(b.bootImage1);
                    setFoot(b.footShape);
                    setPosition(b.position);
                    setGround(b.ground);
                    setMaterial(b.material);
                  }}
                >
                  {boots
                    ? boots.map((boot) => (
                        <option key={boot.id} value={boot.id}>
                          {boot.bootName}
                        </option>
                      ))
                    : null}
                </select>

                <div className='relative'>
                  <img className=' h-auto max-w-full mx-auto md:h-96  object-cover py-2' src={`../images/Boots/${image}`} />
                </div>
                <div className='md:pl-8'>
                  <h4 className='text-2xl py-2 font-bebas text-white'>
                    Brand : <span className='text-hijau'>{brand}</span>
                  </h4>
                  <h4 className='text-2xl py-2 font-bebas text-white'>
                    Price : <span className='text-hijau'>RM {price}</span>{" "}
                  </h4>
                  <h4 className='text-2xl py-2 font-bebas text-white'>
                    Foot Shape : <span className='text-hijau'>{foot}</span>
                  </h4>
                  <h4 className='text-2xl py-2 font-bebas text-white'>
                    Preferred Position : <span className='text-hijau'>{position}</span>
                  </h4>
                  <h4 className='text-2xl py-2 font-bebas text-white'>
                    Material : <span className='text-hijau'>{material}</span>
                  </h4>
                  <h4 className='text-2xl py-2 font-bebas text-white'>
                    Suitable Ground : <span className='text-hijau'>{ground}</span>
                  </h4>
                </div>
                <div class='flex justify-center space-x-2 pt-8 pb-6'>
                  <a href={link} target='_blank'>
                    <button
                      type='button'
                      class='inline-block rounded-lg bg-white/20 px-6 pt-2.5 pb-2 text-md font-bold font-monsterrat uppercase leading-normal text-white hover:bg-hijau hover:text-dark-purple '
                    >
                      Buy Now
                    </button>
                  </a>
                </div>
              </div>
              <div className='flex flex-col bg-dark-purple p-4 rounded-2xl'>
                <select
                  className='text-white bg-white/20  hover:bg-neutral-300 hover:text-dark-purple focus:ring-2 focus:outline-none font-bebas  rounded-lg md:text-2xl text-md px-4 py-2.5 text-center inline-flex items-center'
                  onChange={(e) => {
                    console.log(e.target.value);
                    const c = boots.find((x) => x.id == e.target.value);
                    console.log(c);
                    setLink2(c.buyLink);
                    setBrand2(c.brand);
                    setPrice2(c.price);
                    setImage2(c.bootImage1);
                    setFoot2(c.footShape);
                    setPosition2(c.position);
                    setGround2(c.ground);
                    setMaterial2(c.material);
                  }}
                >
                  {boots
                    ? boots.map((boot) => (
                        <option key={boot.id} value={boot.id}>
                          {boot.bootName}
                        </option>
                      ))
                    : null}
                </select>
                <div className='relative'>
                  <img className=' h-auto max-w-full mx-auto md:h-96 object-cover py-2' src={`../images/Boots/${image2}`} />
                </div>
                <div className='md:pl-8'>
                  <h4 className='text-2xl py-2 font-bebas text-white'>
                    Brand : <span className='text-hijau'>{brand2}</span>
                  </h4>
                  <h4 className='text-2xl py-2 font-bebas text-white'>
                    Price : <span className='text-hijau'>RM {price2}</span>{" "}
                  </h4>
                  <h4 className='text-2xl py-2 font-bebas text-white'>
                    Foot Shape : <span className='text-hijau'>{foot2}</span>
                  </h4>
                  <h4 className='text-2xl py-2 font-bebas text-white'>
                    Preferred Position : <span className='text-hijau'>{position2}</span>
                  </h4>
                  <h4 className='text-2xl py-2 font-bebas text-white'>
                    Material : <span className='text-hijau'>{material2}</span>
                  </h4>
                  <h4 className='text-2xl py-2 font-bebas text-white'>
                    Suitable Ground : <span className='text-hijau'>{ground2}</span>
                  </h4>
                </div>
                <div class='flex justify-center space-x-2 pt-8 pb-6'>
                  <a href={link2} target='_blank'>
                    <button
                      type='button'
                      class='inline-block rounded-lg bg-white/20 px-6 pt-2.5 pb-2 text-md font-bold font-monsterrat uppercase leading-normal text-white hover:bg-hijau hover:text-dark-purple '
                    >
                      Buy Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Boots;
