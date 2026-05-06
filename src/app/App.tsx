import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';
import { AboutMe } from './pages/AboutMe';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<CaseStudy />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </HashRouter>
  );
}