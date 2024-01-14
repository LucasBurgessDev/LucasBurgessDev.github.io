import React from 'react';
//import CommandLineComponent from 'react-command-line';
//import CommandLine from 'react-command-line';
import './Projects.css';
import CodeEditor from '../codeeditor/CodeEditor';

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
  },
  clear: {
    fn: args => {
      //return CommandLineComponent.clear;
    }
  }
}

return (
    <div className='ProjectItems'>
            {/* <CommandLine commands={commands} /> */}
            <CodeEditor />
    </div>
    )
}

export default ProjectItems