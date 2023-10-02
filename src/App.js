import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./components/Home";
import { Generator } from './components/Generator';

import { UrlProvider } from './context/UrlProvider'

function App() {
  return (
    <>
      <UrlProvider>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/generate" element={<Generator />} />
            </Routes>
          </div>
        </Router>
      </UrlProvider>
    </>
  );
}

export default App;
