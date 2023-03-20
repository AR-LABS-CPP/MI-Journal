import Wave from "../assets/wave.svg"

const LoginPage = () => {
    const handleFormSubmit = () => {
        console.log("Form Submitted")
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <p className="text-primary font-semibold text-5xl mb-3">MIJ</p>
            <p className="text-gray-600 text-xl font-medium mb-5">Good to see you handing round here</p>

            <form onSubmit={handleFormSubmit} className="bg-white rounded-md flex flex-col border-[1px] border-gray-300 shadow-lg px-5 py-10">
                <div className="flex flex-col w-96">
                    <label htmlFor="email" className="mb-3 font-medium">Can I have your email</label>

                    <div className="flex items-center">
                        <input type="email" placeholder="e.g. lonewolf@mi.journal" className="flex-grow rounded border-[1px] border-gray-600 px-2 py-3 outline-none" />
                    </div>
                </div>

                <div className="mt-7 flex flex-col w-96">
                    <label htmlFor="password" className="mb-3 font-medium">And password as well</label>
                    <input type="password" placeholder="ilovewritingblogs" className="rounded border-[1px] border-gray-600 px-2 py-3" />
                </div>

                <button type="submit" className="bg-primary mt-5 py-3 rounded-full text-white text-xl font-medium hover:-translate-y-1 transition-transform duration-300">Let's Go</button>

                <p className="text-blue-600 underline mt-6 text-center">Oops! I am new here</p>
                <p className="text-blue-600 underline text-center mt-2">Forgot my password, you know</p>
            </form>
        </div>
    )
}

export default LoginPage