import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Learns from "./components/Learn";
import Trains from "./components/Trains";
import TrainCategory from "./components/TrainsCategory";
import TrainModul from "./components/TrainModul";
import Boots from "./components/Boot";
import TechniqueDetails from "./components/TechniqueDetails";
import FitnessModul from "./components/FitnessModul";
import FitnessDetails from "./components/FitnessDetails";
import Tests from "./components/Test";
import TestDetails from "./components/TestDetails";
import Profile from "./components/Profile";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/homepage'
          element={
            <>
              <Navbar2 />
              <Homepage />
              <Footer />
            </>
          }
        />
        <Route
          path='/learns'
          element={
            <>
              <Navbar2 />
              <Learns />
              <Footer />
            </>
          }
        />
        <Route
          path='/trains'
          element={
            <>
              <Navbar2 />
              <Trains />
              <Footer />
            </>
          }
        />
        <Route
          path='/trains/techniqueCategory'
          element={
            <>
              <Navbar2 />
              <TrainCategory />
              <Footer />
            </>
          }
        />
        <Route
          path='/tests'
          element={
            <>
              <Navbar2 />
              <Tests />
              <Footer />
            </>
          }
        />
        <Route
          path='/tests/:category/:testName'
          element={
            <>
              <Navbar2 />
              <TestDetails />
              <Footer />
            </>
          }
        />
        <Route
          path='/boots'
          element={
            <>
              <Navbar2 />
              <Boots />
              <Footer />
            </>
          }
        />
        <Route
          path='/trains/techniqueCategory/trainModul/:aspect'
          element={
            <>
              <Navbar2 />
              <TrainModul />
              <Footer />
            </>
          }
        />
        <Route
          path='/trains/techniqueCategory/trainModul/:aspect/:courseName'
          element={
            <>
              <Navbar2 />
              <TechniqueDetails />
              <Footer />
            </>
          }
        />
        <Route
          path='/trains/fitness'
          element={
            <>
              <Navbar2 />
              <FitnessModul />
              <Footer />
            </>
          }
        />
        <Route
          path='/trains/fitness/:courseName'
          element={
            <>
              <Navbar2 />
              <FitnessDetails />
              <Footer />
            </>
          }
        />

        <Route
          path='/profile/:name'
          element={
            <>
              <Navbar2 />
              <Profile />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
