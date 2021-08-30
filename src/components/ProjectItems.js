import React from 'react';
import CommandLine from 'react-command-line';
import './ProjectItems.css';

function ProjectItems() {

        const commands = {
            hello: {
                fn: args => {
                    return `The arguments are ${args}`
                }
            }
        }

return (
    <div className='ProjectItems'>
            <CommandLine commands={commands} />
    </div>
    )
}

export default ProjectItems