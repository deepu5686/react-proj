import React,{useState} from 'react';
import './App.css';
import Person from './components/Person';
import styled from 'styled-components';

const StyledButton = styled.button`

  background-color: ${props => props.alt ? 'red': 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover{
    background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
    color: black;
  }`

class App extends React.Component{
  state ={
    persons :[
      {id:1, name:'John', age:28},
      {id:2, name: 'Max', age: 20},
      {id:3, name: 'David', age:24},
    ],
    otherState: "Other state data",
    showPerson: true
  }
 

  render() {

  const switchNameHandler = (newName) =>{
  
    this.setState({
      persons :[
        {id:1, name: newName, age:28},
        {id:2, name: 'Max', age: 20},
        {id:3, name: 'David', age:29}
      ],
      otherState: this.state.persons.otherState
    })
  }

  const toggleHandler = () =>{
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow})
  }

 

  const deleteHandler = (personIndex) =>{
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  const nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

    

    let persons = null;
    if(this.state.showPerson){
      persons  = (
        <div>
          {this.state.persons.map((res, index) =>(
            <Person 
            click = {() => deleteHandler(index)}
            name={res.name} 
            age={res.age}
            key={res.id}
            changed={(event) => nameChangeHandler(event, res.id)} />
          ))}
        </div> 
      )

    }
    
    let classes = [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <p className={classes.join(' ')}>This is really working</p>
        <StyledButton alt={this.state.showPerson}
        onClick={() => toggleHandler()}>Toggle persons</StyledButton>
        {persons}
      </div>
  )
  }
}





export default App;