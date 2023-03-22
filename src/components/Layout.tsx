interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <div className="min-h-full mx-10 mt-10 border-[1px] border-gray-200 rounded-md px-3">
            {children}
        </div>
    )
}

export default Layout