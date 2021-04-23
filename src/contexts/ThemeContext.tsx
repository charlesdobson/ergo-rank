import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';

interface IThemeContext {
  isDarkMode: boolean;
}

interface IThemeProvider {
  state: IThemeContext;
  setState:
    | React.Dispatch<React.SetStateAction<IThemeContext>>
    | ((args: unknown) => void);
}

const ThemeContextInitialState: IThemeContext = {
  isDarkMode: false,
};

const ThemeContext = createContext<IThemeProvider>({
  state: ThemeContextInitialState,
  setState: () => undefined,
});

interface IThemeContextProviderProps {
  children: ReactNode[];
  initialState?: IThemeContext;
}
export const ThemeContextProvider = ({
  children,
  initialState = ThemeContextInitialState,
}: IThemeContextProviderProps): ReactElement => {
  const [state, setState] = useState<IThemeContext>(initialState);
  return (
    <ThemeContext.Provider value={{ state, setState }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): IThemeProvider => {
  return useContext(ThemeContext);
};
