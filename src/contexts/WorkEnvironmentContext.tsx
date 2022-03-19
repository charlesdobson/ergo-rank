import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';

export enum WORK_ENVIRONMENTS {
  NONE = 'none',
  DESK = 'desk',
}

interface IWorkEnvironmentContext {
  selectedWorkEnvironment: WORK_ENVIRONMENTS;
}

interface IWorkEnvironmentProvider {
  state: IWorkEnvironmentContext;
  setState:
    | React.Dispatch<React.SetStateAction<IWorkEnvironmentContext>>
    | ((args: unknown) => void);
}

const WorkEnvironmentInitialState: IWorkEnvironmentContext = {
  selectedWorkEnvironment: WORK_ENVIRONMENTS.NONE,
};

const WorkEnvironmentContext = createContext<IWorkEnvironmentProvider>({
  state: WorkEnvironmentInitialState,
  setState: () => undefined,
});

interface IThemeContextProviderProps {
  children: ReactNode | ReactNode[];
  initialState?: IWorkEnvironmentContext;
}
export const WorkEnvironmentContextProvider = ({
  children,
  initialState = WorkEnvironmentInitialState,
}: IThemeContextProviderProps): ReactElement => {
  const [state, setState] = useState<IWorkEnvironmentContext>(initialState);
  return (
    <WorkEnvironmentContext.Provider value={{ state, setState }}>
      {children}
    </WorkEnvironmentContext.Provider>
  );
};

export const useWorkEnvironmentContext = (): IWorkEnvironmentProvider => {
  return useContext(WorkEnvironmentContext);
};
