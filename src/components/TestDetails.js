import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const TestDetails = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const { testName } = useParams();
  const { category } = useParams();
  //const { aspect } = useParams();
  const [TestName, setTestName] = useState("");
  const [ImageTest, setImageTest] = useState("");
  const [Details, setDetails] = useState("");
  const [Aspect, setAspect] = useState("");
  const [Finishing, setTestFinishing] = useState("");
  const [Dribbling, setTestDribbling] = useState("");
  const [Agility, setTestAgility] = useState("");
  const [Speed, setTestSpeed] = useState("");
  const [Strength, setTestStrength] = useState("");
  const [Control, setTestControl] = useState("");
  const [Passing, setTestPassing] = useState("");
  const [Header, setTestHeader] = useState("");
  const [Crossing, setTestCrossing] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getSelectedTest();
    getUserByName();
  }, []);

  const getSelectedTest = async () => {
    const response = await axios.get(`http://localhost:5000/test/${category}/${testName}`);
    setTestName(response.data.testName);
    setImageTest(response.data.imageTest);
    setDetails(response.data.details);
    setAspect(response.data.aspect);
  };

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

  const saveTestDribbling = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Dribbling,
      });
      console.log(Dribbling);
    } catch (error) {
      console.log(error);
    }
  };

  const saveTestFinishing = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Finishing,
      });
      console.log(Finishing);
    } catch (error) {
      console.log(error);
    }
  };

  const saveTestAgility = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Agility,
      });
      console.log(Agility);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const saveTestStrength = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Strength,
      });
      console.log(Strength);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const saveTestSpeed = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Speed,
      });
      console.log(Speed);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };
  const saveTestControl = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Control,
      });
      console.log(Control);
    } catch (error) {
      console.log(error);
    }
  };

  const saveTestPassing = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Passing,
      });
      console.log(Passing);
    } catch (error) {
      console.log(error);
    }
  };

  const saveTestHeader = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Header,
      });
      console.log(Header);
    } catch (error) {
      console.log(error);
    }
  };

  const saveTestCrossing = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Crossing,
      });
      console.log(Crossing);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserByName = async () => {
    const response = await axios.get(`http://localhost:5000/users/${name}`);
    setTestDribbling(response.data.Dribbling);
    setTestAgility(response.data.Agility);
    setTestSpeed(response.data.Speed);
    setTestStrength(response.data.Strength);
    setTestFinishing(response.data.Finishing);
    setTestPassing(response.data.Passing);
    setTestHeader(response.data.Header);
    setTestControl(response.data.Control);
    setTestCrossing(response.data.Crossing);
  };

  return (
    <section className='container py-10 mx-auto flex flex-col'>
      <h1 className='text-2xl m-2 text-hijau sm:text-4xl md:text-5xl font-monsterrat font-bold '>Test Your Limit</h1>
      <h2 className='pt-4 m-2 text-lg text-white sm:text-2xl md:pt-8  font-monsterrat font-bold '>{TestName}</h2>
      <div className='flex flex-col items-center'>
        <div className='p-4 flex flex-col items-center w-full'>
          <img class='object-cover w-auto md:h-full md:w-3/4 pr-8' src={`/images/Tests/${ImageTest}`} />
          <div className='bg-dark-purple rounded-2xl p-2 md:p-4 md:w-8/12'>
            <p className='font-bebas m-2 p-5 text-white/80 text-justify sm:text-2xl md:mx-8 md:p-5 font-light'>{Details}</p>
          </div>
        </div>
        <div className='flex flex-col p-2 m-2 md:m-8 md:flex-row md:justify-evenly xl:flex-row shadow  w-full bg-hover-purple rounded-2xl overflow-hidden md:w-3/4'>
          <div className='flex flex-col items-center md:p-4 md:m-2'>
            <img className='hidden md:block md:w-2/3' src='/images/shilloutes1.png' />
          </div>
          <div className='flex flex-col items-center p-4 m-2'>
            {(() => {
              switch (Aspect) {
                case "Speed":
                  return (
                    <div>
                      <form className='flex flex-col items-center' onSubmit={saveTestSpeed}>
                        <p className='text-base p-4 text-white text-justify sm:text-2xl md:mx-8 md:p-5 font-monsterrat'>Submit your result here to our calculate your performance.</p>
                        <div className='flex flex-row justify-evenly  py-4'>
                          <input
                            type='text'
                            className={`w-full sm:w-1/2  p-2 my-2 text-primary border rounded-lg outline-none text-sm transition duration-150 ease-in-out`}
                            placeholder='6.8'
                            //value={Speed}
                            onChange={(e) => setTestSpeed(e.target.value)}
                          />
                          <p className='text-base p-4 text-white  sm:text-2xl'>seconds</p>
                        </div>
                        <button
                          type='submit'
                          className='inline-block rounded-2xl pb-3 w-1/3 bg-hijau text-dark-purple px-6 pt-2.5 text-md font-bold font-monsterrat leading-normal  hover:bg-dark-purple hover:text-white '
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  );
                case "Strength":
                  return (
                    <div>
                      <form className='flex flex-col items-center' onSubmit={saveTestStrength}>
                        <p className='text-base p-4 text-white text-justify sm:text-2xl md:mx-8 md:p-5 font-monsterrat'>Submit your result here to our calculate your performance.</p>
                        <div className='flex flex-row gap-1  py-4'>
                          <input
                            type='text'
                            className={`w-full sm:w-1/2  p-2 my-2 text-primary border rounded-lg outline-none text-sm transition duration-150 ease-in-out`}
                            placeholder='2.7'
                            //value={Strength}
                            onChange={(e) => setTestStrength(4.9 * Math.pow(e.target.value * 0.5, 2))}
                          />
                          <p className='text-base p-4 text-white  sm:text-2xl'>seconds</p>
                        </div>
                        <button
                          type='submit'
                          className='inline-block rounded-2xl pb-3 w-1/3 bg-hijau text-dark-purple px-6 pt-2.5 text-md font-bold font-monsterrat leading-normal  hover:bg-dark-purple hover:text-white '
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  );
                case "Agility":
                  return (
                    <div>
                      <form className='flex flex-col items-center' onSubmit={saveTestAgility}>
                        <p className='text-base p-4 text-white text-justify sm:text-2xl md:mx-8 md:p-5 font-monsterrat'>Submit your result here to our calculate your performance.</p>
                        <div className='flex flex-row gap-1  py-4'>
                          <input
                            type='text'
                            className={`w-full sm:w-1/2  p-2 my-2 text-primary border rounded-lg outline-none text-sm transition duration-150 ease-in-out`}
                            placeholder='2.5'
                            //value={Agility}
                            onChange={(e) => setTestAgility(e.target.value)}
                          />
                          <p className='text-base p-4 text-white  sm:text-2xl'>seconds</p>
                        </div>

                        <button
                          type='submit'
                          className='inline-block rounded-2xl pb-3 w-1/3 bg-hijau text-dark-purple px-6 pt-2.5 text-md font-bold font-monsterrat leading-normal  hover:bg-dark-purple hover:text-white '
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  );
                case "Finishing":
                  return (
                    <div>
                      <form className='flex flex-col items-center' onSubmit={saveTestFinishing}>
                        <p className='text-base p-4 text-white text-justify sm:text-2xl md:mx-8 md:p-5 font-monsterrat'>Submit your result here to our calculate your performance.</p>
                        <input
                          type='text'
                          className={`w-full sm:w-1/2  p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                          //value={Finishing}
                          onChange={(e) => setTestFinishing(e.target.value)}
                        />
                        <button
                          type='submit'
                          className='inline-block rounded-lg pb-3 w-1/3 bg-hijau text-dark-purple px-6 pt-2.5 text-md font-bold font-monsterrat leading-normal  hover:bg-dark-purple hover:text-white '
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  );
                case "Dribbling":
                  return (
                    <div>
                      <form className='flex flex-col items-center' onSubmit={saveTestDribbling}>
                        <p className='text-base p-4 text-white text-justify sm:text-2xl md:mx-8 md:p-5 font-monsterrat'>Submit your result here to our calculate your performance.</p>
                        <input
                          type='text'
                          className={`w-full sm:w-1/2  p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                          //value={Dribbling}
                          onChange={(e) => setTestDribbling(e.target.value)}
                        />
                        <button
                          type='submit'
                          className='inline-block rounded-lg pb-3 w-1/3 bg-hijau text-dark-purple px-6 pt-2.5 text-md font-bold font-monsterrat leading-normal  hover:bg-dark-purple hover:text-white '
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  );
                case "Passing":
                  return (
                    <div>
                      <form className='flex flex-col items-center' onSubmit={saveTestPassing}>
                        <p className='text-base p-4 text-white text-justify sm:text-2xl md:mx-8 md:p-5 font-monsterrat'>Submit your result here to our calculate your performance.</p>
                        <input
                          type='text'
                          className={`w-full sm:w-1/2  p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                          //value={Passing}
                          onChange={(e) => setTestPassing(e.target.value)}
                        />
                        <button
                          type='submit'
                          className='inline-block rounded-lg pb-3 w-1/3 bg-hijau text-dark-purple px-6 pt-2.5 text-md font-bold font-monsterrat leading-normal  hover:bg-dark-purple hover:text-white '
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  );
                case "Header":
                  return (
                    <div>
                      <form className='flex flex-col items-center' onSubmit={saveTestHeader}>
                        <p className='text-base p-4 text-white text-justify sm:text-2xl md:mx-8 md:p-5 font-monsterrat'>Submit your result here to our calculate your performance.</p>
                        <input
                          type='text'
                          className={`w-full sm:w-1/2  p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                          //value={Header}
                          onChange={(e) => setTestHeader(e.target.value)}
                        />
                        <button
                          type='submit'
                          className='inline-block rounded-lg pb-3 w-1/3 bg-hijau text-dark-purple px-6 pt-2.5 text-md font-bold font-monsterrat leading-normal  hover:bg-dark-purple hover:text-white '
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  );
                case "Control":
                  return (
                    <div>
                      <form className='flex flex-col items-center' onSubmit={saveTestControl}>
                        <p className='text-base p-4 text-white text-justify sm:text-2xl md:mx-8 md:p-5 font-monsterrat'>Submit your result here to our calculate your performance.</p>
                        <input
                          type='text'
                          className={`w-full sm:w-1/2  p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                          //value={Control}
                          onChange={(e) => setTestControl(e.target.value)}
                        />
                        <button
                          type='submit'
                          className='inline-block rounded-lg pb-3 w-1/3 bg-hijau text-dark-purple px-6 pt-2.5 text-md font-bold font-monsterrat leading-normal  hover:bg-dark-purple hover:text-white '
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  );
                case "Crossing":
                  return (
                    <div>
                      <form className='flex flex-col items-center' onSubmit={saveTestCrossing}>
                        <p className='text-base p-4 text-white text-justify sm:text-2xl md:mx-8 md:p-5 font-monsterrat'>Submit your result here to our calculate your performance.</p>
                        <input
                          type='text'
                          className={`w-full sm:w-1/2  p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                          //value={Crossing}
                          onChange={(e) => setTestCrossing(e.target.value)}
                        />
                        <button
                          type='submit'
                          className='inline-block rounded-lg pb-3 w-1/3 bg-hijau text-dark-purple px-6 pt-2.5 text-md font-bold font-monsterrat leading-normal  hover:bg-dark-purple hover:text-white '
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  );
                default:
                  return (
                    <div>
                      <h4>ERROR IN REQUEST FORM</h4>
                    </div>
                  );
              }
            })()}
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className='justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-full'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-3xl font-monsterrat font-semibold'>Submitted</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>×</span>
                  </button>
                </div>
                {/*body*/}
                <div className='flex justify-center p-6 h-full w-full'>
                  <p className='text-lg md:2xl font-monsterrat font-semibold'>Your test value has been sumbitted. You can view at profile for analysis.</p>
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
    </section>
  );
};

export default TestDetails;
