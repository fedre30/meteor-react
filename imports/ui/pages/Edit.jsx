import React from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react'
import ReactDOM from "react-dom";
import students from "../../api/students";

class Edit extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();

    students.update(this.props.location.state.id, {
      $set: { name: name },
    });

    this.props.history.push('/');
  }

  render() {
    return (
      <div className='Edit'>
        <h1>Edit Page</h1>

        <Form>
          <Form.Field>
            <label>First Name</label>
            <input className="list-input" ref="name" placeholder={this.props.location.state.name}/>
          </Form.Field>
          <Form.Field>
            <Button type='submit' onClick={this.handleSubmit}>Edit</Button>

          </Form.Field>
        </Form>

      </div>
    );
  }

}

export default Edit;
