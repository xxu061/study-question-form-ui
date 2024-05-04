import { ref, provide, inject } from 'vue';
import QuestionService from '../service/QuestionService'

export interface IQuestionService {
  getInitialQuestions(): any;
  answerQuestion(application: any): any;
  createApplication(): any;
  updateApplication(application: any): any;
  getMajorSuggestions(criteria: string): any;
  getPaths(application: any): any;
  getStudyProgrames(application: any): any;
  getApplication(id: any): any;
  choosePath(application: any): any;
}

const questionServiceSymbol = 'QuestionService';

export const provideQuestionService = () => {
  provide<IQuestionService>(questionServiceSymbol, new QuestionService());
};

export const useQuestionService = () => {
  const questionService = inject<IQuestionService>(questionServiceSymbol);

  return questionService;
};
