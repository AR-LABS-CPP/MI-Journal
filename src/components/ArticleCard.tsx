import { useNavigate } from "react-router-dom"

interface IArticleCardProps {
    cardTitle: string,
    cardDescription: string,
    linkToArticle: string
}

const ArticleCard: React.FC<IArticleCardProps> = ({ cardTitle, cardDescription, linkToArticle }) => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(linkToArticle)} className="relative hover:shadow-lg hover:cursor-pointer transition-transform duration-300 flex flex-col gap-y-4 justify-center items-center w-82 sm:w-96 md:w-96 lg:w-96 xl:w-96 h-48 px-5 shadow-md border-[1px] rounded-md">
            <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-200 hover:opacity-20"></div>
            <p className="text-5xl font-semibold text-primary">{cardTitle}</p>
            <p className="text-gray-600 text-center w-72">{cardDescription}</p>
        </div>
    )
}

export default ArticleCard