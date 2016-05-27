import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';
import Hello from './components/hello/Hello.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="container">
        <Hello message="Hello, world!" />
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};

render();
