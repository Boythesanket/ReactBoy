import React from 'react';

function Home() {
    const [text, setText] = React.useState('');
    const [fontSize, setFontSize] = React.useState(16);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const toUpperCase = () => {
        setText(text.toUpperCase());
    };

    const toLowerCase = () => {
        setText(text.toLowerCase());
    };

    const increaseFont = () => {
        setFontSize((size) => size + 2);
    };

    const decreaseFont = () => {
        setFontSize((size) => (size > 8 ? size - 2 : size));
    };

    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const charCount = text.length;

    return ( 
        <>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <textarea
                style={{ width: '100%', fontSize: `${fontSize}px`, minHeight: '100px' }}
                value={text}
                onChange={handleChange}
                placeholder="Type here..."
            />
            <div style={{ margin: '10px 0' }}>
                <button onClick={toUpperCase}>Uppercase</button>
                <button onClick={toLowerCase} style={{ marginLeft: '5px' }}>Lowercase</button>
                <button onClick={increaseFont} style={{ marginLeft: '5px' }}>A+</button>
                <button onClick={decreaseFont} style={{ marginLeft: '5px' }}>A-</button>
            </div>
            <div>
                <span>Words: {wordCount}</span>
                <span style={{ marginLeft: '15px' }}>Characters: {charCount}</span>
            </div>
        </div>
        </>
     );
}

export default Home;
