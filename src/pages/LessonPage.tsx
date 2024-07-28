import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export const loadMarkdown = async (moduleId, lessonId) => {
  try {
    const currentLesson = await import(
      `../lessons/module-${moduleId}/lesson-${lessonId}.md`
    );
    return currentLesson.default;
  } catch (error) {
    console.error('Ошибка загрузки Markdown:', error);
    throw error;
  }
};

const LessonPage = () => {
  const { moduleId, lessonId } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setLoading(true);
        const markdownContent = await loadMarkdown(moduleId, lessonId);
        setMarkdown(markdownContent);
      } catch (err) {
        setError(
          'Не удалось загрузить урок. Возможно, модуль или урок не существуют.',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [moduleId, lessonId]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

   return (
     <div className="flex flex-col mt-4">
       <Link to={"/"} className="text-blue-500 hover:underline">
         Назад
       </Link>
       <div className="markdown-content">
         <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
       </div>
     </div>
   );
};

export default LessonPage;
