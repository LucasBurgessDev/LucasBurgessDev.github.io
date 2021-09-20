import React from 'react';
import PropTypes from 'prop-types';

// Import the AceEditor Component
import AceEditor from 'react-ace';
// Import a Mode (language)
import "ace-builds/src-noconflict/mode-java";
// Import a Theme (okadia, github, xcode etc)
import "ace-builds/src-noconflict/theme-github";

const editorStyle = {
  border: '1px solid lightgray',
};

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue) {
    //this.props.onChange(newValue);
  }

  render() {
    return (
      <AceEditor
        style={editorStyle}
        readOnly={true}
        //onChange={this.onChange}
        width="70%"
        height="400px"
        theme="github"
        name="aceCodeEditor"
        // onLoad={this.onLoad}
        fontSize={14}
        showPrintMargin
        showGutter
        highlightActiveLine
        value={this.props.code}
        editorProps={{
          $blockScrolling: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    );
  }
}

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CodeEditor;

function LoadLogs() {
    const GitHubURL="https://api.github.com/repos/LucasBurgessDev/LucasBurgessDev.github.io/actions/workflows?accept=application/vnd.github.v3+json&per_page=30&page=1"
    return (
        GetLogs(GitHubURL).then(data => console.log(data))
    )
}

async function GetLogs(GitHubURL) {
    let response = await fetch(GitHubURL)
    let data = await response.json()
    return data
}