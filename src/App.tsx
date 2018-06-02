import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
  public render(): React.ReactElement<any> {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{`Frontend Autochecker`}</h1>
        </header>

        

        <footer className="App-intro">
          hohoho!
        </footer>
      </div>
    );
  }
}
