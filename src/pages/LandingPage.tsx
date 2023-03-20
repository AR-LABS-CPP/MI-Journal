import NavBar from "../components/NavBar"
import LandingPageImage from "../assets/LandingPageImage.png"

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-full">
            <div className="mt-20 w-full flex justify-center items-center gap-x-10">
                <div className="flex flex-col items-center gap-y-6">
                    <p className="w-64 text-center font-semibold text-gray-600">MI-Journal let's you express your idead and concepts in an intuitive way. Let others see what you have to say, so why wait.</p>
                    <button className="bg-primary hover:-translate-y-1 transition-transform duration-300 w-44 rounded-full py-3 text-white font-medium shadow-md">Get Started</button>
                </div>

                <img src={LandingPageImage} alt="Landing_Page_Image" />
            </div>

            <div className="mt-24 flex justify-center gap-x-10">
                <div className="flex flex-col gap-y-4 justify-center items-center w-96 h-48 px-5 shadow-md border-[1px] rounded-md">
                    <p className="text-5xl font-semibold text-primary">100% Free</p>
                    <p className="text-gray-600 text-center w-72">MI-Journal is completely free and you can create as many articles as you want so enjoy the freedom.</p>
                </div>

                <div className="flex flex-col gap-y-4 justify-center items-center w-96 h-48 px-5 shadow-md border-[1px] rounded-md">
                    <p className="text-5xl font-semibold text-primary">Expressive</p>
                    <p className="text-gray-600 text-center w-72">MI-Journal lets you be as expressive as possible by letting you format you blog and add images as well.</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage