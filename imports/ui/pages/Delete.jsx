import React from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react'
import ReactDOM from "react-dom";
import students from "../../api/students";

class Delete extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    students.remove(this.props.location.state.id);

    this.props.history.push('/');
  }

  render() {
    return (
      <div className='delete'>
        <h1>Delete Page</h1>

        <h2>Do you want to delete {this.props.location.state.name} ?</h2>

            <Button type='submit' onClick={this.handleSubmit}>Submit</Button>


      </div>
    );
  }

}

export default Delete;
