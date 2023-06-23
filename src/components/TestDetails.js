import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      toast.success("Submission Completed, Go to profile for analysis.");
      console.log(Dribbling);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  const saveTestFinishing = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Finishing,
      });
      toast.success("Submission Completed, Go to profile for analysis.");
      console.log(Finishing);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  const saveTestAgility = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Agility,
      });
      toast.success("Submission Completed, Go to profile for analysis.");
      console.log(Agility);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  const saveTestStrength = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Strength,
      });
      toast.success("Submission Completed, Go to profile for analysis.");
      console.log(Strength);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  const saveTestSpeed = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Speed,
      });
      toast.success("Submission Completed, Go to profile for analysis.");
      console.log(Speed);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };
  const saveTestControl = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Control,
      });
      toast.success("Submission Completed, Go to profile for analysis.");
      console.log(Control);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  const saveTestPassing = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Passing,
      });
      toast.success("Submission Completed, Go to profile for analysis.");
      console.log(Passing);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  const saveTestHeader = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Header,
      });
      toast.success("Submission Completed, Go to profile for analysis.");
      console.log(Header);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  const saveTestCrossing = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${name}`, {
        Crossing,
      });
      toast.success("Submission Completed, Go to profile for analysis.");
      console.log(Crossing);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
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
    <section className='container py-10 lg:px-14 mx-auto flex flex-col'>
      <h1 className='text-2xl m-2 text-hijau sm:text-3xl md:text-4xl font-monsterrat font-bold lg:px-14'>Test Your Limit</h1>
      <h2 className='pt-2 m-2 text-lg text-white sm:text-2xl md:pt-4  font-monsterrat font-bold lg:px-14'>{TestName}</h2>
      <div className='flex flex-col items-center'>
        <div className='p-4 flex flex-col items-center w-full'>
          <img class='object-cover w-auto md:h-full md:w-3/4 pr-8' src={`/images/Tests/${ImageTest}`} />
          <div className='bg-dark-purple rounded-2xl p-2 md:p-4 md:w-8/12'>
            <p className='font-bebas m-2 p-5 text-white/80 text-justify sm:text-2xl md:mx-8 md:p-5 font-light'>{Details}</p>
          </div>
        </div>
        <div className='flex flex-col p-2 m-2 md:m-8 md:flex-row md:justify-evenly xl:flex-row shadow  w-full bg-hover-purple rounded-2xl overflow-hidden md:w-3/4 lg:px-14'>
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
      <ToastContainer />
    </section>
  );
};

export default TestDetails;
