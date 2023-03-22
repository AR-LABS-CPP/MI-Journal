import useThemeStore from "../store/Theme"

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    const darkMode = useThemeStore(state => state.darkMode)

    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <div className="dark:bg-slate-800 dark:py-5">
                <div className={`dark:bg-slate-800 min-h-full mx-10 mt-10 border-[1px] border-gray-200 rounded-md px-3 py-5`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout