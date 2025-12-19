import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";

export function Welcome() {
    const {theme} = useContext(ThemeContext);
    return (
    // <h1 className="text-6xl text-gray-800 text-bold">Welcome To Theme Changing App</h1>
    <h1 className={`text-4xl  text-bold ${theme === 'light' ? "text-gray-800 bg-slate-200" : "text-slate-200 bg-gray-800"} `}>Welcome To Theme Changing App</h1>
    )
}