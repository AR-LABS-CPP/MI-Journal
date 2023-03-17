const NavBar: React.FC = () => {
    return (
        <div className="flex items-center justify-between shadow-md py-3 px-20">
            <p className="text-5xl font-bold text-primary">MIJ</p>
            <button className="shadow-md px-14 py-3 rounded-full bg-primary text-white font-medium text-lg">Login</button>
        </div>
    )
}

export default NavBar