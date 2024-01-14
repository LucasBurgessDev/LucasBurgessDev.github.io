import "../../App.css";
import './Resume.css';
import React from 'react';
// using CommonJS modules
import { Document, Page } from "react-pdf";
//import pdfFile from "../docs/Burgess_Luke_Data_Architect.pdf";
//import Video from '../videos/video-5.mp4';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeItems() {

return (
        <div className='resume'>
{/*             <video src={Video} alt="background - Video by Pressmaster from Pexels" autoPlay loop muted />*/}
            <div className="resume-pages">
                         <Document
                            //file={pdfFile}
                        >
                            <Page pageNumber={1} />
                        </Document>
                        <Document
                            //file={pdfFile}
                        >
                            <Page pageNumber={2} />
                        </Document>
            </div>
        </div>
    )
}

export default ResumeItems