import '../App.css';
import './Resume.css';
import React from 'react';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import pdfFile from "../docs/Burgess_Luke_Data_Architect.pdf";
//import Video from '../videos/video-5.mp4';

function ResumeItems() {

return (
        <div className='resume'>
{/*             <video src={Video} alt="background - Video by Pressmaster from Pexels" autoPlay loop muted />*/}
            <div className="resume-pages">
                         <Document
                            file={pdfFile}
                        >
                            <Page pageNumber={1} />
                        </Document>
                        <Document
                            file={pdfFile}
                        >
                            <Page pageNumber={2} />
                        </Document>
            </div>
        </div>
    )
}

export default ResumeItems