import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const FlaskExperience = () => {
    const flaskInitSnipped = `
    from flask import Flask 
    from routes import auth 
    
    app = Flask(__name__) 
    
    @app.route("/") 
    def index(): 
        return <h1>MIJ Backend Server</h1>
    `

    const flaskEncodeSnippet = `
    import jwt
    from flask import (
        Blueprint,
        request,
        make_response
    )

    secret = "This-is-a-super-secret-key-that-will-be-used-when-signing-the-tokens-and-one-more-thing-that-I-would-like-to-say-is-that-I-have-just-started-with-flask-for-API-development-and-I-like-it-so-far"

    def validate_token(token):
        try:
            decoded_token = jwt.decode(token, secret, algorithms=['HS256'])

            return decoded_token
        except jwt.exceptions.InvalidSignatureError:
            return "BAD REQUEST!"
        except jwt.exceptions.ExpiredSignatureError:
            return "SESSION EXPIRED! LOGIN AGAIN."

    @app.get("/login")
    def login():
        token = jwt.encode({
            "name": "Aliraza",
            "mobile": "123123123123",
        }, key=secret)
    
        resp = make_response()
        resp.set_cookie("token", token)
    
        return resp
    `

    return (
        <div className="min-h-full mx-10 mt-10 border-[1px] border-gray-200 rounded-md px-3">
            <p className="text-4xl font-medium text-center mt-4 mb-2">Like a Flask</p>
            <p className="text-center font-medium mb-1">March-03-2023</p>
            <div className="border-b-[1px] mb-4 mx-5 border-gray-300"></div>

            <p className="tracking-wide ml-4">
                I mostly write API's in express with which I have been familiar for
                quite some time now. Though express has served me well and has helped me with
                every use case that I have encountered, I wanted to try something new and
                so my eyes gazed at Flask.
            </p>

            <p className="tracking-wide mx-4 mt-4">
                For those who are are not familiar with Flask. Flask is used for developing
                web application using the python programming language. It provides the developer
                with exhaustive amount of options that can be utilized in order to create full
                fledged web applications.
            </p>

            <p className="tracking-wide mx-4 mt-4">
                For me, I wanted to create an API for the next project that I was doing and as I
                said earlier that I wanted to try something new. So I headed over to the documentation
                of Flask and started exploring it in order to get familiar with the conventions and
                options that are available in Flask.
            </p>

            <p className="tracking-wide mx-4 mt-4">
                The documentation is very well written which helped me quickly setup a
                local environment using python. I installed Flask and started exploring
                it by programming different concepts that were described in the documentation.
            </p>

            <p className="tracking-wide mx-4 mt-4">
                The very first thing that I encountered was 'authentication' and 'authorization'.
                In express we do these things using JWT (Json Web Tokens) but as I was new to Flask, I
                didn't knew what to use, so I headed over to the internet and searched for auth
                libraries for python. To my surpise, I found a library that is the re-implementation
                of JWT in python, it is called "PyJWT".
            </p>

            <div className="border-t-[1px] mt-10 border-gray-200 mx-4 mb-3"></div>
            <p className="ml-4 text-2xl font-semibold text-center">PyJWT</p>
            <div className="border-t-[1px] border-gray-200 mx-4 mt-3"></div>
            <p className="tracking-wide mx-4 mt-4">
                Aftering finding the library for auth. I headed over to the documentation of PyJWT
                and started exploring it as well. Within few minutes I was up and running with PyJWT
                but the process was a little bit different compared to what I was used to in express.
                Below code snipped shows how we initialize a simple application in Flask.
            </p>

            <div className="mx-4 border-[1px] border-gray-300 my-7">
                <SyntaxHighlighter language="python" style={docco}>
                    {flaskInitSnipped}
                </SyntaxHighlighter>
            </div>

            <p className="tracking-wide mx-4 mt-4">
                In the above code snippet, we import Flask and then instantiate the Flask app.
                We then define a root route that will return a text to the user who visits the URL.
                For my case, it was on localhost so the URL will be "localhost:5000"
            </p>

            <p className="tracking-wide mx-4 mt-4">
                After initializing the application, I started looking through docs for the encoding and
                decoding process and found out the way of doing it. Below snippet shows how we encode
                and create a token using something called 'secret'. A 'secret' is a peice of text that only
                the developer knows. The 'secret' is used to sign the token and decode them.
            </p>

            <div className="mx-4 border-[1px] border-gray-300 my-7">
                <SyntaxHighlighter language="python" style={docco}>
                    {flaskEncodeSnippet}
                </SyntaxHighlighter>
            </div>

            <p className="tracking-wide mx-4 mt-4">
                Let's understand the above snipper of code. We first import three things from
                Flask. Don't worry about what they mean, let's focus on the encoding process.
            </p>

            <p className="tracking-wide mx-4 mt-4">
                First let's discuss the login end-point. The login end-point performs token 
                encoding. We can place any kind of data inside the curly braces but 
                remember to not put any sensitive information which is why I have put my
                name and mobile there. See how we use the 'secret' as key. After encoding, we
                send a response to the request maker and in our response we set a cookie. Don't
                worry about what a 'cookie' is. Just remember that it will be used in subsequent
                requests in order to authenticate the user.
            </p>
            
            <p className="tracking-wide mx-4 mt-4">
                The decoding part is pretty straight forward as well. In my use case, I have
                separated the decoding login into a separate function in order to avoid repitition.
                We use the 'decode' method provided by 'jwt' and pass it the secret. If it decodes successfully
                then we know that the token was not tempared but if it does not decode then
                the token has been modified.
            </p>

            <div className="border-t-[1px] mt-10 border-gray-200 mx-4 mb-3"></div>
            <p className="ml-4 text-2xl font-semibold text-center">Conclusion</p>
            <div className="border-t-[1px] border-gray-200 mx-4 mt-3"></div>
            <p className="tracking-wide mx-4 mt-4 mb-14">
                All in all, I personally found Flask and PyJWT easy to work with. The simplicity
                and power that it provides makes it easy to work plus the ease of documentation 
                makes it easy to understand and work with. Although some people might prefer javascript
                eco-system over the python one, I personally like exploring things so as to get a general
                idea of different tools and technologies.
            </p>
        </div>
    )
}

export default FlaskExperience