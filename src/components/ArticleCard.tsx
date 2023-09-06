import { useNavigate } from "react-router-dom"

interface IArticleCardProps {
    date: string,
    cardTitle: string,
    cardDescription: string,
    linkToArticle: string
}

const ArticleCard: React.FC<IArticleCardProps> = ({ date, cardTitle, cardDescription, linkToArticle }) => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(linkToArticle)} className="w-full relative hover:shadow-lg hover:cursor-pointer transition-transform duration-300 flex flex-col gap-y-4 justify-center items-center sm:w-96 md:w-96 lg:w-96 xl:w-96 h-72 px-5 shadow-md border-[1px] border-gray-300 rounded-md overflow-hidden">
            <p className="absolute top-0 left-0 text-white bg-primary px-4 py-2 rounded-br-lg">{date}</p>
            <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-200 hover:opacity-20"></div>
            <p className="text-5xl text-center font-semibold text-primary">{cardTitle}</p>
            <p className="text-gray-600 text-center w-72 dark:text-gray-200">{cardDescription}</p>
        </div>
    )
}

export default ArticleCard