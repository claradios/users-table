import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import { fetchCharacters } from './services/fetchCharacters';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }
  getCharacters() {

    fetchCharacters()
      .then(data => {

        this.setState({
          api: data
        })
      })
  }

  handleChange(event) {
    const value = event.currentTarget.value;
    this.setState({
      search: value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <div className="header__container">   
          <h1 className="App__title">Usuarios</h1>         
          </div>
        </header>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Home
                search={this.state.search}
                handleChange={this.handleChange}
                api={this.state.api}
              />
            );
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
