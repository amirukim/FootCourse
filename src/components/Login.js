import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      //await axios.post("http://localhost:5000/login", {
      await axios.post("https://footcourse-backend-production.up.railway.app/login", {
        email: email,
        password: password,
      });
      navigate("/homepage");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
          toast.error(error.response.data.msg, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };
  return (
    <section className='h-screen flex bg-light-purple sm:bg-white'>
      <div className='container sm:m-auto sm:max-w-3xl  bg-light-purple rounded-2xl   sm:shadow-default p-3 sm:py-10 sm:px-16 '>
        <h1 className='text-4xl md:text-5xl font-extrabold font-monsterrat text-hijau mt-4 mb-6'>Login to FootCourse!</h1>
        <h3 className='text-2xl md:text-3xl font-bebas text-hijau mt-2 '>
          DONT GIVEUP, STAY WAKE UP<h3 className='text-2xl font-bebas text-white mb-12 '> BE PROFESSIONAL!</h3>
        </h3>
        <div className=' grid grid-cols-1 sm:grid-cols-2'>
          <div className='flex flex-col'>
            <form onSubmit={Auth}>
              <div>
                <label className='text-xl font-bebas  text-hijau' htmlFor='email'>
                  Email
                </label>
              </div>
              <input
                type='email'
                className={`w-full sm:w-full  p-2 text-primary  rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id='email'
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div>
                <label className=' text-xl font-bebas  text-hijau' htmlFor='password'>
                  Password
                </label>
              </div>
              <input
                type='password'
                className={`w-full sm:w-2/3   p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id='password'
                placeholder='********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className=' flex  items-center mt-6'>
                <button className={`bg-hijau  py-2 px-8 font-bebas text-md text-black rounded  hover:bg-blue-400 `}>LOGIN</button>
                <h4 className='px-2 text-white font-monsterrat '>
                  Don't have an account ?{" "}
                  <a className='text-hijau font-semibold hover:text-blue-400' href='/register'>
                    Register
                  </a>
                </h4>
              </div>
            </form>
          </div>

          <div className='flex p-3  pt-5 md:p-5 justify-center items-center sm:items-end'>
            <img class='inline  w-1/2 md:w-full' src='./images/shilloutes1.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
