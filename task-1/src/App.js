import { Fragment } from 'react';
import Child from './components/Child';

function App() {
  let count = 1;
  return (
    <Fragment>
      <h1>Personal Details</h1>
      <h3>Person {count++}</h3>
      <Child name="Gayathri" age="23" phone={9443514698} address="Bangalore"/>
      <h3>Person {count++}</h3>
      <Child name="Divya" age="20" phone={9343514698} address="Chennai"/>
      <h3>Person {count++}</h3>
      <Child name="Lakshmi" age="45" phone={9943514698} address="Salem"/>
      <h3>Person {count++}</h3>
      <Child name="Bhavvya" age="25" phone={9843514698} address="Trichy"/>
      <h3>Person {count++}</h3>
      <Child name="Akila" age="27" phone={9243514698} address="Coimbatore"/>
    </Fragment>
  );
}

export default App;
