import { useNavigate } from 'react-router-dom';

/**
 * A custom hook to simplify navigation within the application.
 *
 * @returns A function that takes a path and navigates to it.
 */
const useNavigateTo = (): ((path: string) => void) => {
  const navigate = useNavigate();

  /**
   * Navigates to the specified path.
   *
   * @param path - The path to navigate to. It will be converted to lowercase and prefixed with '/'.
   */
  const navigateTo = (path: string): void => {
    navigate(path);
  };

  return navigateTo;
};

export default useNavigateTo;
