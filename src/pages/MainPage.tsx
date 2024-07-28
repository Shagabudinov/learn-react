import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { Text, CornerBox, TextWithDivider } from '@ui';
import './MainPage.css';
import { Link } from 'react-router-dom';
//@ts-ignore
import modules from '../lessons/modules.json';

const MainPage = () => {
  return (
    <div className="container flex flex-col gap-8 my-4">
      {modules.map((module) => (
        <React.Fragment key={module.id}>
          <TextWithDivider fontSize="big">{module.title}</TextWithDivider>
          <div className="grid-container">
            {module.lessons.map((lesson) => (
              <Link
                key={`${module.id}-${lesson.id}`}
                to={`/module/${module.id}/lesson/${lesson.id}`}
              >
                <CornerBox>{lesson.title}</CornerBox>
              </Link>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MainPage;
