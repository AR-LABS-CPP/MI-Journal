import { BsLinkedin, BsGithub } from "react-icons/bs"

interface INavBarProps {
    children?: React.ReactNode
}

const NavBar: React.FC<INavBarProps> = ({ children }) => {
    const isLoggedIn = () => {
        return true
    }

    return (
        <>
            <div className="flex items-center justify-between shadow-md py-5 px-20">
                <p className="text-5xl font-bold text-primary">MIJ</p>

                <div className="flex gap-x-7">
                    <a target="_blank" href="https://github.com/AR-LABS-CPP" className="hover:-translate-y-1 transition-transform duration-300">
                        <BsGithub className="text-primary" size={50} />
                    </a>

                    <a href="#" className="hover:-translate-y-1 transition-transform duration-300">
                        <BsLinkedin className="text-primary" size={50} />
                    </a>
                </div>
            </div>

            {
                children
            }
        </>
    )
}

export default NavBar