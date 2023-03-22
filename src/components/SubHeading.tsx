interface ISubHeadingProps {
    text: string
}

const SubHeading: React.FC<ISubHeadingProps> = ({ text }) => {
    return (
        <>
            <div className="border-t-[1px] mt-10 border-gray-200 mx-4 mb-3"></div>
            <p className="ml-4 text-2xl font-semibold text-center">{text}</p>
            <div className="border-t-[1px] border-gray-200 mx-4 mt-3"></div>
        </>
    )
}

export default SubHeading