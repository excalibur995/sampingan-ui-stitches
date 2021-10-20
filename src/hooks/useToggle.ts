import { useState } from 'react';

interface UseToggleHandlers {
  on: () => void;
  off: () => void;
  toggle: () => void;
  reset: () => void;
}
type UseToggle = [boolean, UseToggleHandlers];

/**
 *
 * @param initialState
 * @returns
 */
const useToggle = (initialState: boolean = false): UseToggle => {
  const [state, setState] = useState(initialState);

  const handlers: UseToggleHandlers = {
    on: () => {
      setState(true);
    },
    off: () => {
      setState(false);
    },
    toggle: () => {
      setState((s) => !s);
    },
    reset: () => {
      setState(initialState);
    },
  };

  return [state, handlers];
};

export default useToggle;
