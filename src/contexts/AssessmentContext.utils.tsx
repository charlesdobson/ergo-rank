import {
  EAccessoriesQuestion,
  EChairQuestions,
  EHealthQuestions,
} from 'contexts';
import { ECategories, EMonitorQuestions, TCurrent } from './AssessmentContext';

export const getNextQuestion = ({ category, question }: TCurrent): TCurrent => {
  // TODO: Generate this
  const questionMatrix = [
    [
      EChairQuestions.FEET_SUPPORTED,
      EChairQuestions.BACK_SUPPORTED,
      EChairQuestions.ARMREST_ADJUSTABLE,
    ],
    [
      EMonitorQuestions.POSITION,
      EMonitorQuestions.HEIGHT,
      EMonitorQuestions.GLARE,
    ],
    [
      EAccessoriesQuestion.HEIGHT,
      EAccessoriesQuestion.DISTANCE,
      EAccessoriesQuestion.POSITION,
    ],
    [
      EHealthQuestions.EYE_BREAKS,
      EHealthQuestions.PHYSICAL_BREAKS,
      EHealthQuestions.LIGHT_LEVEL,
    ],
  ];

  // TODO: Figure out how to loop through enum
  const ECategoriesMap = [
    ECategories.CHAIR,
    ECategories.MONITOR,
    ECategories.ACCESSORIES,
    ECategories.HEALTH,
  ];

  const rows = Object.keys(ECategories).length;
  const columns = 3; // TODO: Generate this from all category questions

  let nextCategory;
  let nextQuestion;

  for (let i = 0; i < columns * rows; i++) {
    const row = Math.floor(i / columns);
    const column = i % columns;
    const rownext = Math.floor((i + 1) / columns);
    const colnext = (i + 1) % columns;

    if (
      category === ECategoriesMap[row] &&
      question === questionMatrix[row][column]
    ) {
      nextCategory = ECategoriesMap[rownext];
      nextQuestion = questionMatrix[rownext][colnext];
      break;
    }
  }

  return {
    category: nextCategory,
    question: nextQuestion,
  } as TCurrent;
};
