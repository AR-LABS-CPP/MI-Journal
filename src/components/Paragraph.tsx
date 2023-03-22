interface IParagraphProps {
    children: React.ReactNode
}

const Paragraph: React.FC<IParagraphProps> = ({ children }) => {
    return (
        <p className="tracking-wide mx-4 mt-4 dark:text-gray-200">
            {
                children
            }
        </p>
    )
}

export default Paragraph