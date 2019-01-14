import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import students  from '../../api/students';


export default class List extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();

    students.insert ({
      name
    });
    console.log(name);

    ReactDOM.findDOMNode(this.refs.name).value = '';
  }

  render() {
    return (
      <div className='List'>
        <form onSubmit={() => this.handleSubmit}>
        <input type="text" ref="name" placeholder="Student's name"/>
        <input type="submit"/>
        </form>

        <div>
          <h2>List</h2>



        </div>

      </div>
    );
  }
}

export default withTracker(() => {
  return {
    students: students.find({}).fetch(),
  };
})(List);
