import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {Dropdown, Menu} from 'semantic-ui-react'
import LoginButtons from './LoginButtons.jsx';
import students from '../../api/students.js';
import {withTracker} from "meteor/react-meteor-data";
import Colors from '../assets/styles/Colors';
import styled from 'styled-components';


class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      students: this.props.students
    }
  }

  goToEdit(id, name) {
    this.props.history.push({pathname: `edit/${i}`, state: {id: id, name: name}});
  }

  goToDelete(id, name) {
    this.props.history.push({pathname: `delete/${id}`, state: {id: id, name: name}});
  }

  render() {
    return (
      <HeaderContainer>
        <Menu>
          <Menu.Item><NavLink activeClassName="active" exact to="/">Home</NavLink></Menu.Item>
          <Menu.Item>
            <Dropdown text="Edit">
              <Dropdown.Menu>

                {this.state.students.map(student => {

                  <Dropdown.Item key={student._id} text={student.name} onClick={() => this.goToEdit(student._id, student.name)}/>

                })}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          <Menu.Item>
            <Dropdown text="Delete">
              <Dropdown.Menu>

                {this.props.students.map(student => {

                  <Dropdown.Item key={student._id} text={student.name} onClick={() => this.goToDelete(student._id, student.name)}/>

                })}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          <Menu.Item>
            <LoginButtons align='left'/>
          </Menu.Item>
        </Menu>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.header`
.active {
  font-weight: bold;
  color: ${Colors.primary};
}
`

export default withRouter(withTracker(() => {
  return {
    students: students.find({}).fetch(),
  };
})(Header));