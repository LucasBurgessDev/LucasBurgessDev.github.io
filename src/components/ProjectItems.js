import React from 'react';
import CommandLine from 'react-command-line';
import './ProjectItems.css';

function ProjectItems() {

        const commands = {
            terraform_init: {
                fn: args => {
                    return `Terraform Initiated`
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