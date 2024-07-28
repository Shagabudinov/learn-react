import * as lessons from './index';
import lesson11 from './1.1.md'
import Markdown from 'markdown-to-jsx';


const getLessons = (moduleId, lessonId) => {
  console.log([lesson11, moduleId, lessonId]);
  return lesson11;
};


export default getLessons;