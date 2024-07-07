import React from 'react';
import Markdown from 'markdown-to-jsx';
import WelcomePage from '../pages/WelcomePage';

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

const App = () => {
  return (
    <>
      <WelcomePage />
    {/* <h1 className="text-2xl font-bold mb-4 text-red-500">Markdown in React</h1>
    <Markdown
      options={{
        overrides: {
          h1: { component: Heading },
          p: { component: Paragraph },
        },
      }}
    >
      {markdownContent}
    </Markdown> */}
  </>
  )
};

export default App;
