import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom'
import {Button, Form} from 'semantic-ui-react'
import students from '../../api/students.js';
import styled from 'styled-components';
import Colors from '../assets/styles/Colors';

class List extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    const surname = ReactDOM.findDOMNode(this.refs.surname).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.email).value.trim();

    students.insert({
      name,
      surname,
      email
    });

    ReactDOM.findDOMNode(this.refs.name).value = '';
  }

  goToEdit(id, name, surname, email) {
    this.props.history.push({pathname: `edit/${id}`, state: {id: id, name: name, surname: surname, email: email}  });
  }

    goToDelete(id, name, surname, email) {
      this.props.history.push({pathname: `delete/${id}`, state: {id: id, name: name, surname: surname, email: email}});
  }


  render() {
    return (
      <ListContainer>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input className="list-input" ref="name" placeholder='First Name'/>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input className="list-input" ref="surname" placeholder='Last Name'/>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input className="list-input" ref="email" placeholder='Email'/>
          </Form.Field>
          <Form.Field>
            <Button type='submit' className="submit" onClick={this.handleSubmit}>Submit</Button>

          </Form.Field>
        </Form>

        <div className="list">
          <h2>List</h2>
          {this.props.students.map(student => (
            <div className="list-item" key={student._id}>{student.name}
              <Button className="edit" onClick={() => this.goToEdit(student._id, student.name, student.surname, student.email)}>Edit</Button>
              <Button className="delete" onClick={() => this.goToDelete(student._id, student.name, student.surname, student.email)}>Delete</Button>
            </div>
          ))}

        </div>
      </ListContainer>
    );
  }

}

const ListContainer = styled.div`

width: 50%;
margin: 0 auto;

.edit, .delete, .submit {
  background-color: ${Colors.primary};
  color: white;
  margin: 1rem 0;
  
}

.edit, .delete {
  margin: 1rem 2rem;
}

.list-item {
  margin: 2rem 0;
}


`


export default withRouter(withTracker(() => {
  return {
    students: students.find({}).fetch(),
  };
})(List));
