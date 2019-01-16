import React from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react'
import ReactDOM from "react-dom";
import students from "../../api/students";
import Colors from '../assets/styles/Colors';
import styled from 'styled-components';

class Delete extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    students.remove(this.props.location.state.id);

    this.props.history.push('/');
  }

  render() {
    return (
      <DeleteContainer>
        <h1>Delete Page</h1>

        <h2>Do you want to delete {this.props.location.state.name} ?</h2>

            <Button type='submit' className="submit" onClick={this.handleSubmit}>Submit</Button>


      </DeleteContainer>
    );
  }

}

const DeleteContainer = styled.div`
width: 50%;
margin: 2rem auto;

.edit, .delete, .submit {
  background-color: ${Colors.primary};
  color: white;
  margin: 1rem 0;
  
}

.edit, .delete {
  margin: 1rem 2rem;
}

`

export default Delete;
