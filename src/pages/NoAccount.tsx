import React from 'react';
import { Button, ButtonSize, Icon } from '@ui';

interface CodeSandboxEmbedProps {
  sandboxUrl: string;
}

const CodeSandboxEmbed: React.FC<CodeSandboxEmbedProps> = ({ sandboxUrl }) => {
  return (
    <iframe
      src={sandboxUrl}
      style={{
        width: '100%',
        height: '500px',
        border: '0',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      title="CodeSandbox"
    ></iframe>
  );
};

const NoAccount = () => {
  const sandboxUrl =
    'https://codesandbox.io/embed/zms5dm?codemirror=1&highlights=6,7,8,9';
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* {' '}
      <Icon name="cancel" className="text-white mb-10" />{' '}
      <p className="text-white text-[16px] mb-10">
        Вам недоступен данный раздел так как вы не авторизованы.
      </p>
      <div className="flex gap-[40px]">
        <Button className="text-[16px]" size={ButtonSize.Default}>
          <p className="text-primary text-[16px]">Войти</p>
        </Button>
        <Button className="text-[16px]" size={ButtonSize.Default}>
          <p className="text-primary text-[16px]">Регистрация</p>
        </Button>
      </div> */}
      <CodeSandboxEmbed sandboxUrl={sandboxUrl} />
    </div>
  );
};

export default NoAccount;
