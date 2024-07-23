import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import Text from '../Text';
import Switch from '../Switch';

const Header = () => {
  const switchOptions = [
    {
      optionTitle: 'Учебник',
      isActive: true,
      onChangeTitle: () => {},
    },
    {
      optionTitle: 'Мой прогресс',
      isActive: false,
      onChangeTitle: () => {},
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between w-full py-[4px] px-[8px] sticky">
        <Link to={'/'} className="flex items-center">
          <Icon name="react-logo" className="w-[48px] h-[40px]"></Icon>
          <span className="px-[8px]">
            <Text className="text-[24px] select-none">Learn React -</Text>
            <Text className="text-[14px] mt-[-6px] select-none">
              Онлайн учебник по React.js
            </Text>
          </span>
        </Link>
        <Switch options={switchOptions}></Switch>
        <div className='bg-primary p-2 rounded-full'>
          <Icon name="user-icon"></Icon>
        </div>
      </div>
      <div className="h-[2px] w-full bg-primary mt-1" />
    </>
  );
};

export default Header;
