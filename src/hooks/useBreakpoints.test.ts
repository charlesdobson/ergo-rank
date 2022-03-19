import mediaQuery from 'css-mediaquery';
import { renderHook } from '@testing-library/react-hooks';
import useBreakpoints from './useBreakpoints';

declare global {
	interface Window {
		resizeWidthTo: (number: number) => {};
	}
}

beforeAll(() => {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: jest.fn().mockImplementation((query) => {
			const instance = {
				matches: mediaQuery.match(query, {
					width: window.innerWidth,
					height: window.innerHeight,
				}),
				media: query,
				onchange: null,
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			};

			window.addEventListener('resize', () => {
				const change = mediaQuery.match(query, {
					width: window.innerWidth,
					height: window.innerHeight,
				});

				if (change != instance.matches) {
					instance.matches = change;
					instance.dispatchEvent('change');
				}
			});

			return instance;
		}),
	});

	Object.defineProperty(window, 'resizeWidthTo', {
		value: (width: string) => {
			Object.defineProperty(window, 'innerWidth', {
				configurable: true,
				writable: true,
				value: width,
			});
			window.dispatchEvent(new Event('resize'));
		},
	});
});

afterAll(() => {
	jest.clearAllMocks();
});

it('Should determine the current breakpoint', () => {
	window.resizeWidthTo(800);
	const { rerender, result } = renderHook(() => useBreakpoints());

	expect(result.current.isMobile).toBe(false);
	expect(result.current.isTablet).toBe(true);
	expect(result.current.isDesktop).toBe(false);

	window.resizeWidthTo(1150);
	rerender();

	expect(result.current.isMobile).toBe(false);
	expect(result.current.isTablet).toBe(false);
	expect(result.current.isDesktop).toBe(true);

	window.resizeWidthTo(500);
	rerender();

	expect(result.current.isMobile).toBe(true);
	expect(result.current.isTablet).toBe(false);
	expect(result.current.isDesktop).toBe(false);
});
