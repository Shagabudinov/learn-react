import React, { useEffect, useState, lazy, Suspense } from 'react';
import Markdown from 'markdown-to-jsx';
import WelcomePage from '../pages/WelcomePage';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { OutletWithHeaderFooter } from '../ui';
import LessonPage from '../pages/LessonPage';
import NoAccount from '../pages/NoAccount';

//const LessonPage = lazy(() => import('../pages/LessonPage'));

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
    //<Suspense fallback={<p>Loading...</p>}>
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

          <Route
            path="/module/:moduleId/lesson/:lessonId"
            element={<LessonPage />}
          />
          <Route path="/progress" element={<NoAccount />} />
        </Route>
      )}
    </Routes>
    //</Suspense>
  );
};

export default App;
