import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface ICodeSnippetProps {
    snippet: string
}

const CodeSnippet: React.FC<ICodeSnippetProps> = ({ snippet }) => {
    return (
        <>
            <div className="mx-4 border-[1px] border-gray-300 my-7">
                <SyntaxHighlighter language="python" style={docco}>
                    {snippet}
                </SyntaxHighlighter>
            </div>
        </>
    )
}

export default CodeSnippet