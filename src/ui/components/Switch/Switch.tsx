import React from 'react';
import classNames from 'classnames';
import Text from '../Text';

type SwitchOptions = {
  optionTitle: string;
  onChangeTitle: Function;
  isActive: boolean;
};

const Switch = ({ options }: { options: SwitchOptions[] }) => {
  return (
    <div className="flex flex-row bg-primary rounded-full">
      {options.map((option) => (
        <div
          key={option.optionTitle}
          className={classNames('px-3 py-2 rounded-full', {
            'bg-accent': option.isActive,
          })}
        >
          <Text color={option.isActive ? `text-primary` : ''}>
            {option.optionTitle}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default Switch;
