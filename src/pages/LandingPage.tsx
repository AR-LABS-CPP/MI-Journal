import ArticleCard from "../components/ArticleCard"
import useThemeStore from "../store/Theme"

const LandingPage: React.FC = () => {
    const { darkMode } = useThemeStore()

    const articles = [
        {
            title: "Like a flask",
            description: "In this article I describe my experience with flask especially when doing token signing",
            link: "/content/FlaskExperience"
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
                        I am an enthusiastic learner and like to read and write things. This is where I write about random things and experiences with different technologies
                    </p>
                </div>

                <img src="/Profile.jpg" alt="Profile Picture" className="mb-10 w-80 sm:w-96 md:w-96 lg:w-96 xl-96 rounded-full border-[1px] border-gray-400" />
            </div>
            <div className="border-b-[1px] border-gray-400 mx-5"></div>

            <div className="dark:bg-slate-800 pt-7 pb-10 grid place-items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    articles.map(article => {
                        return <ArticleCard cardTitle={article.title} cardDescription={article.description} linkToArticle={article.link} key={article.link} />
                    })
                }
            </div>
        </div>
    )
}

export default LandingPage