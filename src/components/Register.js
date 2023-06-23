import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import img1 from "./assets/shilloute1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [position, setPosition] = useState("");
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      //await axios.post("http://localhost:5000/users", {
      await axios.post("https://footcourse-backend-production.up.railway.app/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        position: position,
      });
      toast.success("Register Completed!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      if (error.response) {
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

  function validateEmail() {
    var input = document.getElementById("email");
    var email = input.value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
      // Valid email
      input.style.border = "2px solid green";
    } else {
      // Invalid email
      input.style.border = "2px solid red";
    }
  }

  function validatePassword() {
    var input = document.getElementById("password");
    var password = input.value;
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

    if (regex.test(password)) {
      input.setCustomValidity(""); // Valid password
      input.style.border = "2px solid green";
    } else {
      input.setCustomValidity("Password must contain at least one number, one lowercase and one uppercase letter, and be at least 5 characters long."); // Invalid password
      input.style.border = "2px solid red";
    }
  }

  return (
    <section className='h-screen flex bg-light-purple sm:bg-white'>
      <div className='container sm:m-auto sm:max-w-3xl  bg-light-purple rounded-2xl   sm:shadow-default p-3 sm:py-10 sm:px-16 '>
        <h1 className='text-4xl md:text-5xl font-extrabold font-monsterrat text-hijau mt-4 mb-6'>Register to FootCourse!</h1>
        <h3 className='text-2xl md:text-3xl font-bebas text-hijau mt-2'>
          DONT GIVEUP, STAY WAKE UP<h3 className='text-2xl font-bebas text-white mb-12 '> BE PROFESSIONAL!</h3>
        </h3>
        <div className=' grid grid-cols-1 sm:grid-cols-2'>
          <div className='flex flex-col'>
            <form onSubmit={Register}>
              <div>
                <label className='text-base font-bebas  text-hijau' htmlFor='username'>
                  Username
                </label>
              </div>
              <input
                type='username'
                className={`w-full sm:w-1/2  p-1.5 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-2`}
                id='username'
                placeholder='Your Username'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div>
                <label className='text-base font-bebas  text-hijau' htmlFor='email'>
                  Email
                </label>
              </div>
              <input
                type='email'
                className={`w-full sm:w-full  p-1.5  text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-2`}
                id='email'
                placeholder='johndoe@email.com'
                onBlur={validateEmail}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div>
                <label className=' text-base font-bebas  text-hijau' htmlFor='password'>
                  Password
                </label>
              </div>
              <input
                type='password'
                className={`w-2/3  p-1.5  text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-2`}
                id='password'
                placeholder='********'
                pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}'
                title='Must contain at least one number and one uppercase and lowercase letter, and at least 5 or more characters'
                onBlur={validatePassword}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div>
                <label className='text-base font-bebas  text-hijau' htmlFor='email'>
                  Confirm Password
                </label>
              </div>
              <input
                type='password'
                className={`w-2/3   p-1.5  text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-2`}
                id='confPassword'
                placeholder='********'
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />

              <div>
                <label className=' text-base font-bebas  text-hijau' htmlFor='password'>
                  Position
                </label>
              </div>
              <select
                className={`w-1/2  p-1.5  text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-2`}
                id='cars'
                name='cars'
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value='gk'>Goalkeeper</option>
                <option value='cb'>Centre-Back</option>
                <option value='fb'>Full-Back</option>
                <option value='cm'>Central-Midfielder</option>
                <option value='dm'>Defensive-Midfielder</option>
                <option value='am'>Attacking-Midfielder</option>
                <option value='w'>Winger</option>
                <option value='st'>Striker</option>
              </select>

              <div className=' flex  items-center mt-6'>
                <button className={`bg-hijau  py-1.5  px-8 font-bebas text-md text-black rounded  hover:bg-blue-400 `}>Register</button>
                <h4 className='px-2 text-white font-monsterrat '>
                  Have an account ?{" "}
                  <a className='text-hijau font-semibold  hover:text-blue-400' href='/'>
                    Login
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
      <ToastContainer />
    </section>
  );
};

export default Register;
