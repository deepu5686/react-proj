import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

@media (min-width: 500px){
 
        width:'450px';
 
}`

const Person = (props) =>{
    return (
       
        <StyledDiv>
             <h3 onClick={props.click}>Hi my name is {props.name} and my age is {props.age}</h3>
           <input onChange={props.changed} value={props.name}/>
        </StyledDiv>
           
       
    )
}

export default Person;