import React from 'react';


export default class List extends React.Component {
  render() {
    return (
      <div className='List'>
        <h2>List</h2>
        <input type="text" id="name" placeholder="Student's name"/>
        <input type="submit"/>

      </div>
    );
  }
}
