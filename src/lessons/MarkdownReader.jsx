import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

const MarkdownRenderer = ({ fileName }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (fileName) {
      setLoading(true);
      import(`${fileName}`)
        .then((module) => {
          setContent(module.default);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [fileName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading file: {error.message}</p>;

  return (
    <div>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default MarkdownRenderer;
