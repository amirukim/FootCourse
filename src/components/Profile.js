import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Chart, initTE } from "tw-elements";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Profile = () => {
  const { name } = useParams();
  const [Finishing, setTestFinishing] = useState("");
  const [Dribbling, setTestDribbling] = useState("");
  const [Agility, setTestAgility] = useState("");
  const [Speed, setTestSpeed] = useState("");
  const [Strength, setTestStrength] = useState("");
  const [Control, setTestControl] = useState("");
  const [Passing, setTestPassing] = useState("");
  const [Header, setTestHeader] = useState("");
  const [Crossing, setTestCrossing] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Position, setPosition] = useState("");

  useEffect(() => {
    getUserByName();
  }, []);

  const getUserByName = async () => {
    const response = await axios.get(`https://footcourse-backend-production.up.railway.app/${name}`);
    setEmail(response.data.email);
    setName(response.data.name);
    setPhoneNo(response.data.phoneNo);
    setPosition(response.data.position);
    setTestDribbling(response.data.Dribbling);
    setTestAgility(response.data.Agility);
    setTestSpeed(response.data.Speed);
    setTestStrength(response.data.Strength);
    setTestFinishing(response.data.Finishing);
    setTestPassing(response.data.Passing);
    setTestHeader(response.data.Header);
    setTestControl(response.data.Control);
    setTestCrossing(response.data.Crossing);

    console.log(Agility);
  };

  const dataFitness = {
    labels: ["Agility", "Speed", "Strength"],
    datasets: [
      {
        label: "Player Fitness Rating",
        data: [(7 - Agility) * 20, (11 - Speed) * 20, Strength * 5],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        pointStyle: "circle",
      },
    ],
  };

  const dataTechnique = {
    labels: ["Finishing", "Dribbling", "Crossing", "Touch & Control", "Header", "Passing"],
    datasets: [
      {
        label: "Player Technique Rating",
        data: [(72 - Finishing) * 2.6, Dribbling * 7.14, Crossing, Control, Header, Passing],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        pointStyle: "circle",
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        stepSize: 20,
      },
      r: {
        pointLabels: {
          font: {
            size: 100,
          },
        },
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };
  const techniqueData = [
    { testName: "Finishing Test", value: Finishing, unit: "sec" },
    { testName: "Passing Test", value: Passing, unit: "times" },
    { testName: "Dribbling Test", value: Dribbling, unit: "times" },
    { testName: "Header Test", value: Header, unit: "times" },
    { testName: "Crossing Test", value: Crossing, unit: "times" },
    { testName: "Control Test", value: Control, unit: "times" },
  ];

  const fitnessData = [
    { testName: "Agility Test", value: Agility, unit: "sec" },
    { testName: "Speed Test", value: Speed, unit: "sec" },
    { testName: "Strength Test", value: Strength, unit: "sec" },
  ];

  return (
    <div className='container w-auto m-auto p-2 lg:px-14'>
      <h1 className='text-2xl m-2 p-1 md:p-5 text-hijau sm:text-3xl md:text-4xl font-monsterrat font-bold lg:px-14 '>Player Information</h1>
      <div className='flex justify-center lg:px-14'>
        <div className='w-11/12 md:w-3/4 bg-white/90 rounded-2xl flex flex-col'>
          <div className='m-8 shadow-md rounded-lg bg-dark-purple p-2 md:p-10 lg:px-20 lg:py-10'>
            <div className='flex flex-col-reverse md:flex-row  justify-between items-center'>
              <div>
                <h4 className='text-2xl py-2 font-bebas font-normal text-white/90 '>
                  Email: <span className='text-2xl py-2  font-normal text-white/60 '>{Email}</span>
                </h4>
                <h4 className='text-2xl py-2 font-bebas font-normal text-white/90 '>
                  Username: <span className='text-2xl py-2  font-normal text-white/60 '>{Name}</span>
                </h4>
                <h4 className='text-2xl py-2 font-bebas font-normal text-white/90 '>
                  Position:{" "}
                  {(() => {
                    switch (Position) {
                      case "gk":
                        return <span className='text-2xl py-2  font-normal text-white/60 '>Goalkeeper</span>;
                      case "cb":
                        return <span className='text-2xl py-2  font-normal text-white/60 '>Center-Back</span>;
                      case "fb":
                        return <span className='text-2xl py-2  font-normal text-white/60 '>Full-Back</span>;
                      case "cm":
                        return <span className='text-2xl py-2  font-normal text-white/60 '>Center-Midfielder</span>;
                      case "dm":
                        return <span className='text-2xl py-2  font-normal text-white/60 '>Defensive-Midfielder</span>;
                      case "am":
                        return <span className='text-2xl py-2  font-normal text-white/60 '>Attacking-Midfielder</span>;
                      case "w":
                        return <span className='text-2xl py-2  font-normal text-white/60 '>Winger</span>;
                      case "st":
                        return <span className='text-2xl py-2  font-normal text-white/60 '>Striker</span>;
                      default:
                        return <span className='text-2xl py-2  font-normal text-white/60 '>Maybe your are in the bench</span>;
                    }
                  })()}
                </h4>
              </div>

              <div className='m-1 p-2 w-1/2 md:w-1/5'>
                <img src='../images/user.png' alt='' />
              </div>
            </div>
          </div>
          <div>
            <div class='flex flex-col justify-center items-center mx-2 w-auto md:mx-auto  p-1 md:px-5 md:py-10'>
              <h4 className='text-2xl py-2 font-bebas font-bold text-black/80 '>Fitness Performance</h4>
              <div className='flex flex-col sm:flex-row  items-center justify-evenly w-full'>
                <div className='h-3/4'>
                  <Radar data={dataFitness} options={options} />
                </div>
                <div className='m-2 p-5'>
                  <div className='border rounded-2xl overflow-hidden dark:border-gray-700"'>
                    <table className='table-auto border '>
                      <thead>
                        <tr className='bg-dark-purple text-white/80  uppercase text-sm leading-normal'>
                          <th className='px-4 py-2'>Test Name</th>
                          <th className='px-4 py-2'>Value</th>
                          <th className='px-4 py-2'>Unit</th>
                        </tr>
                      </thead>
                      <tbody className='bg-light-purple text-white/60 text-sm font-normal'>
                        {fitnessData.map((item, index) => (
                          <tr className='border-b border-gray-200' key={index}>
                            <td className='px-4 py-2'>{item.testName}</td>
                            <td id='value' className='px-4 py-2'>
                              {item.value}
                            </td>
                            <td className='px-4 py-2'>{item.unit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <h4 className='text-2xl py-2 font-bebas font-bold text-black/80 '>Technique Performance</h4>
              <div className='flex flex-col sm:flex-row items-center justify-evenly w-full'>
                <div className='h-3/4 '>
                  <Radar data={dataTechnique} options={options} />
                </div>
                <div className='m-2 p-5'>
                  <div className='border rounded-2xl overflow-hidden dark:border-gray-700"'>
                    <table className='table-auto border '>
                      <thead>
                        <tr className='bg-dark-purple text-white/80  uppercase text-sm leading-normal'>
                          <th className='px-4 py-2'>Test Name</th>
                          <th className='px-4 py-2'>Value</th>
                          <th className='px-4 py-2'>Unit</th>
                        </tr>
                      </thead>
                      <tbody className='bg-light-purple text-white/60 text-sm font-normal'>
                        {techniqueData.map((item, index) => (
                          <tr className='border-b border-gray-200' key={index}>
                            <td className='px-4 py-2'>{item.testName}</td>
                            <td id='value' className='px-4 py-2'>
                              {item.value}
                            </td>
                            <td className='px-4 py-2'>{item.unit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
