import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import TeamMatches from './Components/TeamMatches';

import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team-matches/:id" element={<TeamMatches />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
