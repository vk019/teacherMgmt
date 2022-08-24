import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Admin Portal</h1>
      <hr />
      <div className="links">
        <Link to="/TeacherList" className="link" activeClassName="active" exact>Teacher List</Link>
        <hr/>
        <Link to="/AddTeacher" className="link" activeClassName="active">Add Teacher</Link>
      </div>
    </header>
  );
};

export default Header;