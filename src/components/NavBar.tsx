import { BsLinkedin, BsGithub } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

interface INavBarProps {
    children?: React.ReactNode
}

const NavBar: React.FC<INavBarProps> = ({ children }) => {
    const navigate = useNavigate()

    return (
        <>
            <div className="flex flex-col items-center justify-between shadow-md py-5 px-20 gap-y-6 sm:flex-row md:flex-row lg:flex-row xl:flex-row sm:gap-y-0 md:gap-y-0 lg:gap-y-0 xl:gap-y-0">
                <p className="text-5xl font-bold text-primary hover:cursor-pointer" onClick={() => navigate("/")}>MIJ</p>

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