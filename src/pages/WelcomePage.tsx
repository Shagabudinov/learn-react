import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonSize, Icon, Text } from '@ui';

const WelcomePage = ({ setIsShouldRedirectToWelcome }: any) => {
  const handleContinueClick = (e) => {
    //e.preventDefault();
    localStorage.setItem('isShouldRedirectToWelcome', 'false');
    setIsShouldRedirectToWelcome('false');
  };
  return (
    <div className="h-[100vh] flex justify-center items-center flex-row gap-[80px]">
      <div>
        <Icon name="react-logo" className="w-408 h-355 object-contain" />
        <Text className="text-[36px] select-none">Learn React -</Text>
        <Text className="text-[24px] select-none mt-[-12px]">
          Онлайн учебник по React.js
        </Text>
      </div>
      <div className="flex flex-col gap-[36px] justify-center">
        <Text className="text-[36px] select-none">
          Начни изучать React прямо сейчас!
        </Text>
        <Text className="text-[24px] select-none">
          Отслеживай свой прогресс с помощью <br /> персонального аккаунта
        </Text>
        <div className="flex gap-[96px]">
          <Button className="text-[32px]" size={ButtonSize.Big}>
            <p className="text-primary text-[32px]">Войти</p>
          </Button>
          <Button className="text-[32px]" size={ButtonSize.Big}>
            <p className="text-primary text-[32px]">Регистрация</p>
          </Button>
        </div>
        <Text className="text-[24px] flex gap-2 select-none">
          Или{' '}
          <Link onClick={handleContinueClick} to={'/'}>
            <span className="underline">продолжить без аккаунта</span>
          </Link>
        </Text>
      </div>
    </div>
  );
};

export default WelcomePage;
