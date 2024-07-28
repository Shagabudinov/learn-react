import React from 'react';
import Text from '../Text/Text';
import classNames from 'classnames';
import './style.css';

const TextWithDivider = ({ children, fontSize = '16' }) => {
  const dividerWidth = children.length;
  console.log(dividerWidth);
  return (
    // <span>
    //   <Text className={classNames(`text-${fontSize}`)}>{children}</Text>
    //   <div
    //     className={classNames(`h-[2px] bg-primary mb-2 w-[${Number(dividerWidth) * 10}px]`)}
    //   />
    // </span>
    <span className="text-with-line mb-[18px] mt-[8px]">
      <Text className={classNames(`text-${fontSize}`)}>{children}</Text>
    </span>
  );
};

export default TextWithDivider;
