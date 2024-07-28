import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../Icon';
import Text from '../Text';
import Switch from '../Switch';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const switchOptions = [
    {
      optionTitle: 'Учебник',
      path: '/',
    },
    {
      optionTitle: 'Мой прогресс',
      path: '/progress',
    },
  ];

  const handleSwitchChange = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full py-[4px] px-[8px] sticky">
        <a href="/" className="flex items-center">
          <Icon name="react-logo" className="w-[48px] h-[40px]"></Icon>
          <span className="px-[8px]">
            <Text className="text-[24px] select-none">Learn React -</Text>
            <Text className="text-[14px] mt-[-6px] select-none">
              Онлайн учебник по React.js
            </Text>
          </span>
        </a>
        <Switch
          options={switchOptions}
          activePath={location.pathname}
          onSwitchChange={handleSwitchChange}
        />
        <div className="flex gap-4 items-center">
          <Text>Гость</Text>
          <div className="bg-primary p-2 rounded-full">
            <Icon name="user-icon"></Icon>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-primary mt-1 mb-2" />
    </>
  );
};

export default Header;
