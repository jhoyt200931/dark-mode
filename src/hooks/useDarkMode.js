import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const initialValue = false;
    const [darkMode, setDarkMode] = useLocalStorage('dark', initialValue);

    return [darkMode, setDarkMode];

}

export default useDarkMode;