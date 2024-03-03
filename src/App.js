import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpeechApp from "./components/SpeechApp";
import TranslateApp from "./components/TranslateApp";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TranslateApp" element={<TranslateApp />} />
        <Route path="/SpeechApp" element={<SpeechApp />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

// import Translator from './components/TranslateApp';

// function App() {
//   return (

//       <Translator></Translator>

//   );
// }

// export default App;
