import PropTypes from "prop-types";
import { useState } from "react";

export default function Button({ ...props }) {
    let recognition = window.webkitSpeechRecognition || window.SpeechRecognition
    const [Status, setStatus] = useState(false);
    recognition = new recognition();

    recognition.onresult = (event) => {
        const resultIndex = event.resultIndex;
        const transcript = event.results[resultIndex][0].transcript;
        props.setText(transcript);
    };

    recognition.onerror = (event) => {
        console.error(event.error);
    };
    
    recognition.onspeechend = () => { 
        setStatus(false);
        recognition.stop(); 
    }

    function startVoice() {
        props.setText('Say something...');
        if (!recognition.running) {
            setStatus(true);
            recognition.start();
        } else {
            setStatus(false);
            recognition.stop();
        }
        console.log();
    }

    return (
        <button onClick={startVoice} className="bg-white/40 rounded-full p-2" >
            {Status ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:h-8 md:w-8 animate-pulse">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:h-8 md:w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
            }
        </button>
    );
}

Button.propTypes = {
    setText: PropTypes.func
}
