import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';

// TODO: The typings in this file are messy and could use some cleaning up.
// There is duplication in parts that should be refactored.

export enum ECategories {
  CHAIR = 'chair',
  MONITOR = 'monitor',
  ACCESSORIES = 'accessories',
  HEALTH = 'health',
}

export enum EChairQuestions {
  FEET_SUPPORTED = 'feetSupported',
  BACK_SUPPORTED = 'backSupported',
  ARMREST_ADJUSTABLE = 'armrestAdjustable',
}

export enum EMonitorQuestions {
  POSITION = 'position',
  HEIGHT = 'height',
  GLARE = 'glare',
}

export enum EAccessoriesQuestion {
  HEIGHT = 'height',
  DISTANCE = 'distance',
  POSITION = 'position',
}

export enum EHealthQuestions {
  EYE_BREAKS = 'eyeBreaks',
  PHYSICAL_BREAKS = 'physicalBreaks',
  LIGHT_LEVEL = 'lightLevel',
}

interface IQuestions<T> {
  [ECategories.CHAIR]: Record<EChairQuestions, T>;
  [ECategories.MONITOR]: Record<EMonitorQuestions, T>;
  [ECategories.ACCESSORIES]: Record<EAccessoriesQuestion, T>;
  [ECategories.HEALTH]: Record<EHealthQuestions, T>;
}

export const QUESTIONS_MAP: IQuestions<string> = {
  [ECategories.CHAIR]: {
    [EChairQuestions.FEET_SUPPORTED]:
      'Are your feet fully supported and flat on the floor when seated?',
    [EChairQuestions.BACK_SUPPORTED]:
      "Is your back fully supported by your chair's backrest?",
    [EChairQuestions.ARMREST_ADJUSTABLE]:
      'Do your armrests allow you to position yourself close to your workstation?',
  },
  [ECategories.MONITOR]: {
    [EMonitorQuestions.POSITION]:
      'Are you able to position yourself directly in front of your monitor(s)?',
    [EMonitorQuestions.HEIGHT]:
      'Is your monitor height slightly below eye level when properly seated?',
    [EMonitorQuestions.GLARE]: 'Is your monitor free from glare?',
  },
  [ECategories.ACCESSORIES]: {
    [EAccessoriesQuestion.HEIGHT]:
      'Are your keyboard, mouse, and work surface at elbow height?',
    [EAccessoriesQuestion.DISTANCE]:
      'Are your frequently used accessories within easy reach?',
    [EAccessoriesQuestion.POSITION]:
      'When using your keyboard and mouse, are your wrists straight and your arms relaxed?',
  },
  [ECategories.HEALTH]: {
    [EHealthQuestions.EYE_BREAKS]:
      'Do you take frequent breaks from looking at your monitor?',
    [EHealthQuestions.PHYSICAL_BREAKS]:
      'Do you take frequent breaks with light exercise?',
    [EHealthQuestions.LIGHT_LEVEL]:
      'Is your room lighting adequate for reading and writing?',
  },
};

type TCurrentChair = {
  category: ECategories.CHAIR;
  question: EChairQuestions;
};
type TCurrentMonitor = {
  category: ECategories.MONITOR;
  question: EMonitorQuestions;
};
type TCurrentAccessories = {
  category: ECategories.ACCESSORIES;
  question: EAccessoriesQuestion;
};
type TCurrentHealth = {
  category: ECategories.HEALTH;
  question: EHealthQuestions;
};

export type TCurrent =
  | TCurrentChair
  | TCurrentMonitor
  | TCurrentAccessories
  | TCurrentHealth;

interface IAssessmentContext {
  current: TCurrent;
  results: IQuestions<boolean | null>;
}

interface IAssessmentProvider {
  state: IAssessmentContext;
  setState:
    | React.Dispatch<React.SetStateAction<IAssessmentContext>>
    | ((args: unknown) => void);
}

const AssessmentInitialState: IAssessmentContext = {
  current: {
    category: ECategories.CHAIR,
    question: EChairQuestions.FEET_SUPPORTED,
  },
  results: {
    [ECategories.CHAIR]: {
      [EChairQuestions.FEET_SUPPORTED]: null,
      [EChairQuestions.BACK_SUPPORTED]: null,
      [EChairQuestions.ARMREST_ADJUSTABLE]: null,
    },
    [ECategories.MONITOR]: {
      [EMonitorQuestions.POSITION]: null,
      [EMonitorQuestions.HEIGHT]: null,
      [EMonitorQuestions.GLARE]: null,
    },
    [ECategories.ACCESSORIES]: {
      [EAccessoriesQuestion.HEIGHT]: null,
      [EAccessoriesQuestion.DISTANCE]: null,
      [EAccessoriesQuestion.POSITION]: null,
    },
    [ECategories.HEALTH]: {
      [EHealthQuestions.EYE_BREAKS]: null,
      [EHealthQuestions.PHYSICAL_BREAKS]: null,
      [EHealthQuestions.LIGHT_LEVEL]: null,
    },
  },
};

const AssessmentContext = createContext<IAssessmentProvider>({
  state: AssessmentInitialState,
  setState: () => undefined,
});

interface IThemeContextProviderProps {
  children: ReactNode | ReactNode[];
  initialState?: IAssessmentContext;
}
export const AssessmentContextProvider = ({
  children,
  initialState = AssessmentInitialState,
}: IThemeContextProviderProps): ReactElement => {
  const [state, setState] = useState<IAssessmentContext>(initialState);
  return (
    <AssessmentContext.Provider value={{ state, setState }}>
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessmentContext = (): IAssessmentProvider => {
  return useContext(AssessmentContext);
};
