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

        <div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>

            <h2 className='text-center text-5xl tracking-tighter mr-[4rem]'>Speech to Text Converter</h2>
            <br />
            <div className=" pt-[31px] font-serif font-bold px-[29px] text-2xl min-h-[437px] max-w-[67rem] ml-[12rem] bg-gradient-to-r from-cyan-400 to-blue-500  rounded-2xl focus:border-gray-700 focus:border-opacity-30 focus:outline-none" onClick={() => setTextToCopy(transcript)}>
                {transcript}
            </div>
            <div className=" flex mt-8 ">
                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-8 py-4 border-none text-lg   tracking-wide font-medium  m-auto flex relative cursor-pointer focus:bg-green-400 ' onClick={setCopied}>
                    {isCopied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-8 py-4 border-none text-lg   tracking-wide font-medium  m-auto flex relative cursor-pointer focus:bg-green-400 ' onClick={startListening}>Start Listening</button>
                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-8 py-4 border-none text-lg   tracking-wide font-medium  m-auto flex relative cursor-pointer focus:bg-green-400   ' onClick={SpeechRecognition.stopListening}>Stop Listening</button>
            </div>


        </div>
     
    );
};

export default SpeechApp;
