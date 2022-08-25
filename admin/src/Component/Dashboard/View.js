import React, { useState } from "react";
import Swal from "sweetalert2";

function View({ employees, selectedEmployee, setEmployees, setIsViewing }) {
  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);
  const [dob, setDob] = useState(selectedEmployee.dob);
  const [exp, setExp] = useState(selectedEmployee.exp);
  const [qual, setQual] = useState(selectedEmployee.qual);
  const [gender, setGender] = useState(selectedEmployee.gender);
  const [cat, setCat] = useState(selectedEmployee.cat);
  const [phone, setPhone] = useState(selectedEmployee.phone);

  const [bname, setBname] = useState(selectedEmployee.bname);
  const [baccount, setBaccount] = useState(selectedEmployee.baccount);
  const [pscale, setPscale] = useState(selectedEmployee.pscale);
  const [bgroup, setBgroup] = useState(selectedEmployee.bgroup);
  const [nplace, setNplace] = useState(selectedEmployee.nplace);
  const [s1name, setS1name] = useState(selectedEmployee.s1name);
  const [s2name, setS2name] = useState(selectedEmployee.s2name);
  const [s3name, setS3name] = useState(selectedEmployee.s3name);
  const [sdate1, setSdate1] = useState(selectedEmployee.sdate1);
  const [sdate2, setSdate2] = useState(selectedEmployee.sdate2);
  const [sdate3, setsdate3] = useState(selectedEmployee.sdate3);
  const [edate1, setedate1] = useState(selectedEmployee.edate1);
  const [edate2, setedate2] = useState(selectedEmployee.edate2);
  const [edate3, setedate3] = useState(selectedEmployee.edate3);
  const [rem1, seterem1] = useState(selectedEmployee.rem1);
  const [rem2, seterem2] = useState(selectedEmployee.rem2);
  const [rem3, seterem3] = useState(selectedEmployee.rem3);

  const handleView = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !salary ||
      !phone ||
      !date ||
      !bgroup ||
      !bname ||
      !baccount ||
      !gender ||
      !pscale ||
      !nplace ||
      !cat ||
      !qual ||
      !exp ||
      !dob||!s1name||!s2name||!s3name||!sdate1||!sdate2||!sdate3||!edate1||!edate2||!edate3||!rem1||!rem2||!rem3
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      phone,
      date,
      dob,
      pscale,
      bname,
      bgroup,
      exp,
      qual,
      nplace,
      baccount,
      cat,
      sdate1,sdate2,sdate3,edate1,edate2,edate3,s1name,s2name,s3name,rem1,rem2,rem3
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    setEmployees(employees);
    setIsViewing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleView}>
        <h1>Service Record</h1>

        <h3>Personal Details</h3>
        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
          </div>
          <div className="col-md-6">
            <p>
              {selectedEmployee.firstName}
              {"\u00a0\u00a0"}
              {selectedEmployee.lastName}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Date of Birth</label>
          </div>
          <div className="col-md-6">
            <p>{selectedEmployee.dob}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Gender</label>
          </div>
          <div className="col-md-6">
            <p>{selectedEmployee.gender}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Mobile No.</label>
          </div>
          <div className="col-md-6">
            <p>{selectedEmployee.phone}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Email</label>
          </div>
          <div className="col-md-6">
            <p>{selectedEmployee.email}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Blood Group</label>
          </div>
          <div className="col-md-6">
            <p>{selectedEmployee.bgroup}</p>
          </div>
        </div>
        <h3>Professional Details</h3>
        <div className="row">
          <div className="col-md-6">
            <label>Qualification</label>
          </div>
          <div className="col-md-6">
            <p>{selectedEmployee.qual}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Years of Experience</label>
          </div>
          <div className="col-md-6">
            <p>{selectedEmployee.exp}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Date of Joining</label>
          </div>
          <div className="col-md-6">
            <p>{selectedEmployee.date}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Salary</label>
          </div>
          <div className="col-md-6">
            <p>₹{selectedEmployee.salary}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Pay Scale Level</label>
          </div>
          <div className="col-md-6">
            <p>{selectedEmployee.pscale}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Bank Name</label>
          </div>
          <div className="col-md-6">
            <p>{selectedEmployee.bname}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Bank Account Number</label>
          </div>
          <div className="col-md-6">
            <p>{selectedEmployee.baccount}</p>
          </div>
        </div>
        <h3>Service History</h3>
        <div className='contain-table'>
            
        <table className="table striped-table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">School Name</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope="col">Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{selectedEmployee.s1name}</td>
      <td>{selectedEmployee.sdate1}</td>
      <td>{selectedEmployee.edate1}</td>
      <td>{selectedEmployee.rem1}</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{selectedEmployee.s2name}</td>
      <td>{selectedEmployee.sdate2}</td>
      <td>{selectedEmployee.edate2}</td>
      <td>{selectedEmployee.rem2}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{selectedEmployee.s3name}</td>
      <td>{selectedEmployee.sdate3}</td>
      <td>{selectedEmployee.edate3}</td>
      <td>{selectedEmployee.rem3}</td>
    </tr>
  </tbody>
</table>
</div>

        <div style={{ marginTop: "30px" }}>
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsViewing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default View;
