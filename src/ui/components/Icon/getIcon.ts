import React from 'react';
import reactLogo from "../../assets/react-logo.png";

export interface IconProps {
  name: string;
  className?: string;
  [key: string]: any;
}

const ICONS: Record<string, string | React.FC<any>> = {
  "react-logo": reactLogo,
};

export default function getIcon(key: string, props: IconProps) {
  const icon: string | React.FC<any> | undefined = ICONS[key];

  if (!key || !icon) {
    return React.createElement("div", null, `Изображение ${key} не найдено`);
  }

  if (typeof icon === "string" && icon.endsWith(".png")) {
    return React.createElement("img", { src: icon, ...props });
  } else {
    return React.createElement(icon, props);
  }
}
