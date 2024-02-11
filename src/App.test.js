import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

test('renders app page', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
});
