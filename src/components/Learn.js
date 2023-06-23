import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

function Learns() {
  const [learns, setLearns] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [videoName, setVideoName] = useState("");

  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = learns.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    //refreshToken();
    getTactic();
  }, []);

  const getTactic = async () => {
    const response = await axios.get("https://footcourse-backend-production.up.railway.app/learn");
    setLearns(response.data);
  };

  return (
    <section className='container px-4 py-4 md:py-10  lg:px-14 mx-auto flex flex-col'>
      <h1 className='text-xl px-1 lg:px-14 text-hijau sm:text-3xl md:text-4xl font-monsterrat font-bold '>Tactics & Mentality</h1>
      <div>
        <h2 className='pt-8 px-1 lg:px-14 text-lg text-white sm:text-2xl font-monsterrat font-bold '>Mentality</h2>

        <div className='flex flex-wrap justify-center items-center gap-4 py-4 p-2  m-2  lg:gap-6'>
          <div className='bg-white/20 md:p-4 rounded-lg'>
            <div className='hidden md:block'>
              <iframe
                width='380'
                height='215'
                src='https://www.youtube.com/embed/UjF2X1tNweg'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen='true'
              ></iframe>
            </div>
            <div className='md:hidden'>
              <iframe
                width='300'
                height='150'
                src='https://www.youtube.com/embed/UjF2X1tNweg'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen='true'
              ></iframe>
            </div>
            <div>
              <h4 className='text-base md:text-lg p-4 font-bebas text-white'>5 mental hacks to beat nervousness in football</h4>
            </div>
          </div>
          <div className='bg-white/20 md:p-4 rounded-lg'>
            <div className='hidden md:block'>
              <iframe
                width='380'
                height='215'
                src='https://www.youtube.com/embed/9_8SwnueNCw'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen='true'
              ></iframe>
            </div>
            <div className='md:hidden'>
              <iframe
                width='300'
                height='150'
                src='https://www.youtube.com/embed/9_8SwnueNCw'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen='true'
              ></iframe>
            </div>
            <div>
              <h4 className='text-base md:text-lg p-4 font-bebas text-white'>Watch this if you feel like giving up on football</h4>
            </div>
          </div>
          <div className='bg-white/20 md:p-4 rounded-lg'>
            <div className='hidden md:block'>
              <iframe
                width='380'
                height='215'
                src='https://www.youtube.com/embed/IkB8nCGVy8g'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen='true'
              ></iframe>
            </div>
            <div className='md:hidden'>
              <iframe
                width='300'
                height='150'
                src='https://www.youtube.com/embed/IkB8nCGVy8g'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen='true'
              ></iframe>
            </div>

            <div>
              <h4 className='text-base md:text-lg p-4 font-bebas text-white'>ONE important lesson football has taught me</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className='pt-8 px-1 lg:px-14 text-lg text-white sm:text-2xl font-monsterrat font-bold '>Tactical</h2>
        <div className='p-1 py-4 lg:px-14 m-2  flex flex-col justify-center items-center gap-2  md:grid md:grid-cols-2  md:gap-6 md:w-full xl:grid-cols-3'>
          {currentItems.map((learn, index) => (
            <div className='w-full'>
              <button
                className='flex flex-row shadow hover:bg-dark-purple w-full bg-white/20 rounded-lg overflow-hidden cursor-pointer'
                key={index.id}
                type='button'
                onClick={() => {
                  setShowModal(true);
                  setVideoLink(learn.videoLink);
                  setVideoName(learn.videoname);
                }}
              >
                <img class='object-cover w-40 h-36 md:h-44  ' src={`../images/Learns/${learn.image}`} alt={learn.videoname} />
                <div className='flex p-4 flex-col justify-between'>
                  <h4 className='text-base md:text-lg  py-2 font-bebas text-white md:text-left'>{learn.videoname}</h4>

                  <div className='hidden sm:block w-fit p-2 rounded-lg bg-dark-purple'>
                    <p className='sm:text-base font-bebas text-white'>{learn.videoDuration} Min</p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
        <Pagination totalItems={learns.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={setCurrentPage} />
        {showModal ? (
          <>
            <div className='justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none'>
              <div className='relative w-auto my-6 mx-auto max-w-full'>
                {/*content*/}
                <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  {/*header*/}
                  <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                    <h3 className='text-3xl font-monsterrat font-semibold'>{videoName}</h3>
                    <button
                      className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                      onClick={() => setShowModal(false)}
                    >
                      <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>×</span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className='flex justify-center p-6 h-full w-full'>
                    <iframe
                      width='1000'
                      height='550'
                      src={videoLink}
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowfullscreen='true'
                    ></iframe>
                  </div>
                  {/*footer*/}
                  <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                    <button
                      className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
        ) : null}
      </div>
    </section>
  );
}

export default Learns;
