import React from 'react';
import CommandLine from 'react-command-line';
import './ProjectItems.css';

function ProjectItems() {

const messages = {
  'WELCOME_MESSAGE': 'Welcome! Type "help" to see a list of commands.',
  'INVALID_COMMAND': 'Invalid command. Try typing "help" to see a list of supported commands.'
}

const commands = {
  help: {
    fn: args => {
      return `Supported commands: foo
foo [args]: Echoes 'bar' and the arguments.
sleep: Waits for 5 seconds, then returns with a message.`
    }
  },
  foo: {
    fn: args => {
      return `bar. Arguments were: [${args.join(', ')}]`;
    }
  },
  sleep: {
    fn: args => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('done!');
        }, 5000);
      });
    },
    isAsync: true
  }
}

return (
    <div className='ProjectItems'>
            <CommandLine commands={commands} />
    </div>
    )
}

export default ProjectItems