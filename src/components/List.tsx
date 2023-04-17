interface IListProps {
    children: React.ReactNode
}

const List: React.FC<IListProps> = ({ children }) => {
    return (
        <ul className="tracking-wide mx-4 mt-4 dark:text-gray-200">
            {
                children
            }
        </ul>
    )
}

export default List