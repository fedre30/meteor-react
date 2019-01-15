import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom'
import {Button, Checkbox, Form} from 'semantic-ui-react'
import students from '../../api/students.js';
import styled from 'styled-components';

class List extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();

    students.insert({
      name
    });
    console.log(name);

    ReactDOM.findDOMNode(this.refs.name).value = '';
  }

  goToEdit(id) {
    this.props.history.push(`edit/${id}`);
  }

    goToDelete(id) {
      this.props.history.push(`delete/${id}`);
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
            <Button type='submit' onClick={this.handleSubmit}>Submit</Button>

          </Form.Field>
        </Form>

        <div className="list">
          <h2>List</h2>
          {this.props.students.map(student => (
            <div className="list-item" key={student._id}>{student.name}
              <Button className="edit" onClick={() => this.goToEdit(student._id)}>Edit</Button>
              <Button className="delete" onClick={() => this.goToDelete(student._id)}>Delete</Button>
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


`


export default withRouter(withTracker(() => {
  return {
    students: students.find({}).fetch(),
  };
})(List));
