import ArticleCard from "../components/ArticleCard"
import useThemeStore from "../store/Theme"

const LandingPage: React.FC = () => {
    const { darkMode } = useThemeStore()

    const articles = [
        {
            date: "March-03-2023",
            title: "Like a flask",
            description: "In this article I describe my experience with flask especially when doing token signing",
            link: "/content/FlaskExperience"
        },
        {
            date: "April-17-2023",
            title: "Making it flow",
            description: "In this article I describe how I solved the problem of separating development and production process of several new products using git",
            link: "/content/MakingItFlow"
        },
        {
            date: "September-06-2023",
            title: "Language Servers",
            description: "In this short article, I talk about language server and their importance in code editors and IDEs",
            link: "/content/LanguageServers"
        }
    ]

    return (
        <div className={`${darkMode ? "dark" : ""} flex flex-col min-h-screen`}>
            <div className="flex-grow dark:bg-slate-800 pt-20 w-full flex flex-col-reverse justify-center items-center gap-x-20 sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                <div className="flex flex-col items-center gap-y-3 mx-5">
                    <p className="dark:text-gray-300 text-2xl font-medium text-center">
                        Hello there! my name is Ali Raza.
                    </p>
                    <p className="w-64 text-center font-semibold text-gray-600 dark:text-gray-400">
                        I am an enthusiastic learner and like to read and write things. This is where I write about random things and my experiences with different technologies
                    </p>
                </div>

                <img src="/Profile.jpg" alt="Profile Picture" className="mb-10 w-80 sm:w-96 md:w-96 lg:w-96 xl-96 rounded-full border-[1px] border-gray-400" />
            </div>

            <div className="px-5 dark:bg-slate-800">
                <div className="border-b-[1px] border-gray-400"></div>
            </div>

            <div className="dark:bg-slate-800 pt-7 p-10 pb-10 grid place-items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {
                    articles.map(article => {
                        return <ArticleCard
                            date={article.date}
                            cardTitle={article.title}
                            cardDescription={article.description}
                            linkToArticle={article.link}
                            key={article.link}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default LandingPage