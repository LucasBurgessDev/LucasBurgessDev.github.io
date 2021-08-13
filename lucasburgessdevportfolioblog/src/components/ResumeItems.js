import '../App.css';
import './Resume.css';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from "../docs/Burgess_Luke_Data_Architect.pdf";
import Video from '../videos/video-5.mp4';

function ResumeItems() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    }
return (
        <div className='resume'>
{/*             <video src={Video} alt="background - Video by Pressmaster from Pexels" autoPlay loop muted />
            <h1>RESUME</h1>*/}
            <div className="resume-pages">
                        <Document
                            file={pdfFile}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={1} />
                        </Document>
                        <Document
                            file={pdfFile}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={2} />
                        </Document>
            </div>
        </div>
    )
}

export default ResumeItems