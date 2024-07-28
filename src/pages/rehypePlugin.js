// rehypePlugin.js

import { visit } from 'unist-util-visit';

// Плагин rehype для обработки кастомных элементов
export const rehypePlugin = () => {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'code') {
        const value = node.children[0]?.value;
        if (value && value.startsWith('<CodeSandbox')) {
          const match = value.match(/id="([^"]+)"/);
          if (match) {
            // Заменяем элемент 'code' на компонент CodeSandboxEmbed
            node.type = 'text';
            node.value = `<!-- CodeSandbox id="${match[1]}" -->`;
          }
        }
      }
    });
  };
};
