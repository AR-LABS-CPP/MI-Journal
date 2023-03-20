interface INavBarProps {
    children?: React.ReactNode
}

const NavBar: React.FC<INavBarProps> = ({ children }) => {
    const isLoggedIn = () => {
        return true
    }

    return (
        <>
            <div className="flex items-center justify-between shadow-md py-3 px-20">
                <p className="text-5xl font-bold text-primary">MIJ</p>
                {
                    isLoggedIn() ? <p className="text-2xl">User Name</p> : null
                }
                <button className="shadow-md px-14 py-3 rounded-full bg-primary text-white font-medium text-lg">
                    {
                        isLoggedIn() ? "Logout" : "Login"
                    }
                </button>
            </div>

            {
                children
            }
        </>
    )
}

export default NavBar