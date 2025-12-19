import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";


export function ThemeToggle() {

    const {theme, toggleTheme} = useContext(ThemeContext);




    return (
    // <button className=" text-md border-gray-950 bg-slate-500 py-2 px-4 rounded mt-2" onClick={toggleTheme}>Change Theme</button>

    <button className={`m-3 border-gray-950 p-2 text-xl rounded ${theme === 'light' ? "bg-slate-200 text-gray-800" : "bg-gray-800 text-slate-200"}`} onClick={toggleTheme}>Change Theme to {theme === 'light' ? "dark" : "light"}</button>
    )
}