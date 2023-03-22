interface IHeadingProps {
    text: string,
    date: string
}

const Heading: React.FC<IHeadingProps> = ({ text, date }) => {
    return (
        <>
            <p className="text-4xl font-medium text-center mt-4 mb-2 dark:text-gray-300">{text}</p>
            <p className="text-center font-medium mb-1 dark:text-gray-300">{date}</p>
            <div className="border-b-[1px] mb-4 mx-5 border-gray-300"></div>
        </>
    )
}

export default Heading