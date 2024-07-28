import React from 'react';
import classNames from 'classnames';
import Text from '../Text';

type SwitchOptions = {
  optionTitle: string;
  path: string;
};

type SwitchProps = {
  options: SwitchOptions[];
  activePath: string;
  onSwitchChange: (path: string) => void;
};

const Switch = ({ options, activePath, onSwitchChange }: SwitchProps) => {
  return (
    <div className="flex flex-row bg-primary rounded-full">
      {options.map((option) => (
        <div
          key={option.path}
          onClick={() => onSwitchChange(option.path)}
          className={classNames('px-3 py-2 rounded-full cursor-pointer', {
            'bg-accent': activePath === option.path,
          })}
        >
          <Text color={activePath === option.path ? 'text-primary' : ''}>
            {option.optionTitle}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default Switch;
