import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";


const SpeechApp = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });



    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className=" p-8  bg-purple-600">
                <h2 className='text-center text-5xl tracking-tighter'>Speech to Text Converter</h2>
                <br />


                <div className="   min-h-[437px]  bg-white border border-gray-300 rounded-2xl focus:border-gray-700 focus:border-opacity-30 focus:outline-none" onClick={() => setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className=" flex mt-8">

                    <button className='bg-green-600 text-white rounded-md px-8 py-4 border-none text-lg   tracking-wide font-medium  m-auto flex relative cursor-pointer focus:bg-green-400 hover:bg-green-400 focus:shadow-lg hover:shadow-lg' onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button className='bg-green-600 text-white rounded-md px-8 py-4 border-none text-lg   tracking-wide font-medium  m-auto flex relative cursor-pointer focus:bg-green-400 hover:bg-green-400 focus:shadow-lg hover:shadow-lg' onClick={startListening}>Start Listening</button>
                    <button className='bg-green-600 text-white rounded-md px-8 py-4 border-none text-lg   tracking-wide font-medium  m-auto flex relative cursor-pointer focus:bg-green-400 hover:bg-green-400 focus:shadow-lg hover:shadow-lg' onClick={SpeechRecognition.stopListening}>Stop Listening</button>

                </div>

            </div>

        </>
    );
};

export default SpeechApp;
