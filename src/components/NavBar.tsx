import { BsLinkedin, BsGithub } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import useThemeStore from "../store/Theme"

const NavBar: React.FC = () => {
    const navigate = useNavigate()

    const { enableDarkMode, disableDarkMode, darkMode} = useThemeStore()

    const handleToogleTheme = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if(evt.target.checked) {
            enableDarkMode()
        }
        else {
            disableDarkMode()
        }
    }

    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <div className={`dark:bg-slate-800 dark:border-b-[1px] dark:border-gray-400 flex flex-col items-center justify-between shadow-md py-5 px-20 gap-y-6 sm:flex-row md:flex-row lg:flex-row xl:flex-row sm:gap-y-0 md:gap-y-0 lg:gap-y-0 xl:gap-y-0`}>
                <p className="text-5xl font-bold text-primary hover:cursor-pointer" onClick={() => navigate("/")}>MIJ</p>

                <div className="flex gap-x-7">
                    <a target="_blank" href="https://github.com/AR-LABS-CPP" className="hover:-translate-y-1 transition-transform duration-300">
                        <BsGithub className="text-primary" size={50} />
                    </a>

                    <a href="#" className="hover:-translate-y-1 transition-transform duration-300">
                        <BsLinkedin className="text-primary" size={50} />
                    </a>
                </div>


                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" onChange={handleToogleTheme}/>
                        <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        <span className="ml-3 text-sm font-medium dark:text-white">Dark Mode</span>
                </label>

            </div>
        </div>
    )
}

export default NavBar