import React from 'react';
import reactLogo from '../../assets/react-logo.png';
import userIcon from '../../assets/user-icon.svg';

export interface IconProps {
  name?: string;
  className?: string;
  [key: string]: any;
}

const ICONS: Record<string, string | React.FC<any>> = {
  'react-logo': reactLogo,
  'user-icon': userIcon,
};

export default function getIcon(key: string, props: IconProps) {
  const icon: string | React.FC<any> | undefined = ICONS[key];

  if (!key || !icon) {
    return React.createElement('div', null, `Изображение ${key} не найдено`);
  }

  if (typeof icon === 'string') {
    if (icon.endsWith('.png') || icon.startsWith('data:image/')) {
      return React.createElement('img', { src: icon, ...props });
    } else {
      return React.createElement(
        'div',
        null,
        `Неподдерживаемый формат изображения: ${key}`,
      );
    }
  } else {
    return React.createElement(icon, props);
  }
}
