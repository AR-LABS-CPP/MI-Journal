import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface ICodeSnippetProps {
    snippet: string
}

const CodeSnippet: React.FC<ICodeSnippetProps> = ({ snippet }) => {
    return (
        <>
            <div className="mx-4 border-gray-300 my-7">
                <SyntaxHighlighter
                    language='python'
                    style={dracula}
                >
                    {snippet}
                </SyntaxHighlighter>
            </div>
        </>
    )
}

export default CodeSnippet