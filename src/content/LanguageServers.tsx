import Heading from "../components/Heading"
import Image from "../components/Image"
import Layout from "../components/Layout"
import Paragraph from "../components/Paragraph"
import SubHeading from "../components/SubHeading"
import LSPImage from "/LSP.png"

const LanguageServers = () => {
    return (
        <Layout>
            <Heading text="Language Servers" date="September-06-2023" />

            <Paragraph>
                Have you ever wondered or thought how you get all the code completion and syntax analysis
                in your code editor or IDE?. Features such as auto-completion and syntax analysis, are made
                possible by <strong>Language Servers</strong>. Language servers are an essential component of
                modern code editors and integrated development environments (IDEs) that enable intelligent code
                editing and analysis.
            </Paragraph>

            <Paragraph>
                Language Servers are software components that provide language-specific analysis and assistance for
                code editors and integrated development environments (IDEs). They are responsible for enhancing the coding
                experience, syntax analysis, error checking, and more.
            </Paragraph>

            <Paragraph>
                Let's have a brief look at how Language Servers powered, their important bits and peices and how they are able
                to provide real-time updates to your editor/IDE.
            </Paragraph>

            <SubHeading text="How Language Servers Work" />

            <Paragraph>
                Language Servers work by analyzing the code in the background as you type or make changes.
                They communicate with your code editor or IDE through a standardized protocol, such as the&nbsp;
                <strong>Language Server Protocol (LSP).</strong>
            </Paragraph>

            <Paragraph>
                Though it was not always this simple. In earlier times, vendors used to develop plugins for each
                language for their IDE. But still, this was not scale-able. Microsoft came up with the idea of introducting
                Language Server Protocol (LSP). The working of LSP is given in the below diagram.
            </Paragraph>

            <Image image={LSPImage} styling="py-10" />

            <Paragraph>
                The key steps in how language servers works include:
            </Paragraph>

            <Paragraph>
                <strong>Initialization:</strong> When you open a code file, your editor or IDE initializes a
                Language Server for the specific programming language. This server loads language-specific settings
                and configurations.
            </Paragraph>

            <Paragraph>
                <strong>Code Analysis:</strong> As you type, the Language Server analyzes your code and provides suggestions,
                error messages, and other key information. It constantly updates it analysis using the changes you make.
            </Paragraph>

            <Paragraph>
                <strong>Communication:</strong> Your editor communicates with the Language Server using the LSP protocol. This
                communication ensures that the editor can display the Language Server's feedback and suggestions to you in real-time.
            </Paragraph>

            <Paragraph>
                You might have noticed that Language Server Protocol uses JSON-RPC. In short, JSON-RPC allows a client to request another
                program to run a method with parameters and return a result or an error. LSP builds on this and defines the methods available, expected
                data structures, and a few more rules around the transaction.
            </Paragraph>

            <SubHeading text="Technical Deep-Dive" />

            <Paragraph>
                In the Language Server Protocol, there are several message types that facilitate communication between the client
                (your code editor or IDE) and the server (the Language Server). These message types include requests, responses and notifications.
            </Paragraph>

            <Paragraph>
                <strong>Requests:</strong> The client sends a request to the server, asking it to perform a specific operation,
                such as providing code suggestions or performing a code search. The server processes the request and sends back a response.
            </Paragraph>

            <Paragraph>
                <strong>Responses:</strong> When the server receives a request, it performs the requested operation and sends
                a response back to the client. This response may include the results of the operation or an error message if
                something goes wrong.
            </Paragraph>

            <Paragraph>
                <strong>Notifications:</strong> Unlike requests, notifications are one-way messages sent from the client to the
                server without expecting a direct response. They are used to inform the server about certain events, such as changes
                in the code or user interactions.
            </Paragraph>

            <Paragraph>
                In the Language Server Protocol, various methods and events are defined to facilitate specific interactions
                between the client and server. These interactions are initiated by the client (your code editor or IDE) and
                processed by the server (the Language Server). Here are some of the key LSP methods and events:
            </Paragraph>

            <SubHeading text="Methods" />

            <Paragraph>
                <strong>textDocument/didOpen:</strong> This method is called by the client when a text document is opened.
                It informs the server that a new document is available for analysis. The server can then start processing
                and analyzing the content of the document.
            </Paragraph>

            <Paragraph>
                <strong>textDocument/didChange:</strong> When the client detects changes in a document
                (e.g., as you type or edit code), it sends this method to the server. The server updates
                its analysis based on the changes, providing real-time feedback and suggestions.
            </Paragraph>

            <Paragraph>
                <strong>textDocument/completion:</strong> This method is used to request code completion
                suggestions. When you trigger auto-completion in your code editor, it sends this request
                to the server, which responds with a list of completion items based on the current context.
            </Paragraph>

            <Paragraph>
                <strong>textDocument/hover:</strong> When you hover over a symbol in your code, the client
                sends this method to the server to request information about the symbol. The server replies
                with details like documentation, type information, and more.
            </Paragraph>

            <SubHeading text="Events" />

            <Paragraph>
                <strong>textDocument/didSave:</strong> This event is triggered when the client saves a document.
                It informs the server that the document has been saved, and the server may choose to perform
                additional analysis or processing at this point.
            </Paragraph>

            <Paragraph>
                <strong>textDocument/didClose:</strong> When a document is closed in the client, this event is
                sent to the server. The server can use this information to release any resources associated
                with the closed document.
            </Paragraph>

            <Paragraph>
                <strong>workspace/didChangeConfiguration:</strong> If the client's configuration changes,
                such as code style settings or compiler options, this event is sent to the server.
                The server can adjust its behavior based on the updated configuration.
            </Paragraph>

            <Paragraph>
                <strong>workspace/didChangeWatchedFiles:</strong> This event notifies the server of changes
                to files or directories that the client is watching. It allows the server to react to
                external changes that may impact the analysis.
            </Paragraph>

            <Paragraph>
                These methods and events are just a subset of the functionality provided by
                the Language Server Protocol. They enable seamless communication between the
                client and server, ensuring that your code editor can provide intelligent features
                like code completion, syntax analysis, and more, all while you code.
            </Paragraph>

            <Paragraph>
                We can also extend the Language Servers to support custom methods and events. Developers can create custom LSP
                extensions to add domain-specific functionality or integrate with external tools and services.
            </Paragraph>

            <SubHeading text="Conclusion" />

            <Paragraph>
                In summary, Language Servers have emerged as the cornerstone of modern software development, 
                seamlessly integrating into our coding environments and catalyzing productivity. 
                Their unrelenting commitment to code analysis, real-time feedback, and intelligent 
                assistance empowers developers to craft high-quality software with confidence. As we 
                continue to explore new horizons in programming and technology, Language Servers serve 
                as dependable companions on our journey, offering invaluable insights and support. With 
                each line of code we write, we owe a debt of gratitude to these unassuming workhorses that 
                quietly contribute to the brilliance of software engineering, simplifying complexities and 
                transforming ideas into functional reality.
            </Paragraph>
        </Layout>
    )
}

export default LanguageServers