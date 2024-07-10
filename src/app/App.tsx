import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import WelcomePage from '../pages/WelcomePage';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { OutletWithHeaderFooter } from '../ui';

const Heading = ({ children, ...props }) => (
  <h1 className="text-2xl font-bold mb-4 text-red-500" {...props}>
    {children}
  </h1>
);

const Paragraph = ({ children, ...props }) => (
  <p className="text-base leading-7 text-red-500 " {...props}>
    {children}
  </p>
);

const App: React.FC = () => {
  const [isShouldRedirectToWelcome, setIsShouldRedirectToWelcome] = useState(
    localStorage.getItem('isShouldRedirectToWelcome') === 'true',
  );

  return (
    <Routes>
      {isShouldRedirectToWelcome === true ? (
        <Route
          path="/"
          element={
            <WelcomePage
              setIsShouldRedirectToWelcome={setIsShouldRedirectToWelcome}
            />
          }
        />
      ) : (
        <Route element={<OutletWithHeaderFooter />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      )}
    </Routes>
  );
};

export default App;
