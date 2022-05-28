import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HOME</h1>
      <Link to='/'>home</Link><br /><br />
      <Link to='/topics'>topics list</Link><br /><br />
      <Link to='/topic/43'>topic detail</Link>
    </div>
  );
}

const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TOPICS LIST</h1>
      <Link to='/'>home</Link><br /><br />
      <Link to='/topics'>topics list</Link><br /><br />
      <Link to='/topic/43'>topic detail</Link>
    </div>
  );
}

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL {props.match.params.topicId}</h1>
      <Link to='/'>home</Link><br /><br />
      <Link to='/topics'>topics list</Link><br /><br />
      <Link to='/topic/43'>topic detail</Link><br /><br />
      <Link to={`${props.match.url}/salam`}>link</Link>
    </div>
  );
}

function App() {
  return (
    <div>
      
        <Route exact path='/' component={HomePage} />
        <Route exact path='/topics' component={TopicsList} />
        <Route exact path='/topic/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
