import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import Text from '../Text';

const Header = () => {
  return (
    <>
      <div className="flex w-full py-[4px] px-[8px]">
        <Link to={'/'} className="flex items-center">
          <Icon name="react-logo" className="w-[48px] h-[40px]"></Icon>
          <span className="px-[8px]">
            <Text className="text-[24px] select-none">Learn React -</Text>
            <Text className="text-[14px] mt-[-6px] select-none">
              Онлайн учебник по React.js
            </Text>
          </span>
        </Link>
        <div></div>
      </div>
      <div className="h-[2px] w-full bg-primary mt-1" />
    </>
  );
};

export default Header;
