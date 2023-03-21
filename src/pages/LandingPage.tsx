import ArticleCard from "../components/ArticleCard"

const LandingPage: React.FC = () => {
    const articles = [
        {
            title: "Like a flask",
            description: "In this article I describe my experience with flask especially when doing token signing",
            link: "/content/FlaskExperience"
        }
    ]

    return (
        <div className="min-h-full">
            <div className="mt-20 w-full flex justify-center items-center gap-x-20">
                <div className="flex flex-col items-center gap-y-3">
                    <p className="text-2xl font-medium">
                        Hello there! my name is Ali Raza.
                    </p>
                    <p className="w-64 text-center font-semibold text-gray-600">
                        I am an enthusiastic learner and like to read and write things. This is where I write about random things and experiences with different technologies
                    </p>
                </div>

                <img src="/Profile.jpg" alt="Profile Picture" className="w-96 h-96 rounded-full border-[1px] border-gray-400" />
            </div>

            <div className="border-b-[1px] border-gray-300 mx-5 mt-14"></div>

            <div className="mt-5 grid place-items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    articles.map(article => {
                        return <ArticleCard cardTitle={article.title} cardDescription={article.description} linkToArticle={article.link} />
                    })
                }
            </div>
        </div>
    )
}

export default LandingPage