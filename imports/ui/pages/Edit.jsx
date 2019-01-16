import React from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react'
import ReactDOM from "react-dom";
import students from "../../api/students";
import styled from 'styled-components';
import Colors from '../assets/styles/Colors';

class Edit extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    const surname = ReactDOM.findDOMNode(this.refs.surname).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.email).value.trim();

    if(name === '' || surname ===  '' || email === '' ) {
      alert('Please fill all fields')
    }
    else {
      students.update(this.props.location.state.id, {
        $set: { name: name, surname: surname, email: email },
      });

      this.props.history.push('/');
    }

  }

  render() {
    return (
      <EditContainer>
        <h1>Edit Page</h1>

          <Form>
            <Form.Field>
              <label>First Name</label>
              <input className="list-input" ref="name" placeholder={this.props.location.state.name}/>
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input className="list-input" ref="surname" placeholder={this.props.location.state.surname}/>
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input className="list-input" ref="email" placeholder={this.props.location.state.email}/>
            </Form.Field>
          <Form.Field>
            <Button type='submit' className="submit" onClick={this.handleSubmit}>Edit</Button>

          </Form.Field>
        </Form>

      </EditContainer>
    );
  }

}

const EditContainer = styled.div`
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

export default Edit;
