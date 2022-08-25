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
  const [ndetails, setndetails] = useState(selectedEmployee.ndetails);
  const [cl1, setcl1] = useState(selectedEmployee.cl1);
  const [ml1, setml1] = useState(selectedEmployee.ml1);
  const [ml2, setml2] = useState(selectedEmployee.ml2);
  const [ml3, setml3] = useState(selectedEmployee.ml3);
  const [cl2, setcl2] = useState(selectedEmployee.cl2);
  const [cl3, setcl3] = useState(selectedEmployee.cl3);
  const [tl1, settl1] = useState(selectedEmployee.tl1);
  const [tl2, settl2] = useState(selectedEmployee.tl2);
  const [tl3, settl3] = useState(selectedEmployee.tl3);
  const [yop, setyop] = useState(selectedEmployee.yop);
  const [bl1, setbl1] = useState(selectedEmployee.bl1);
  const [bl2, setbl2] = useState(selectedEmployee.bl2);
  const [bl3, setbl3] = useState(selectedEmployee.bl3);

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
      !ndetails||!tl1||!tl2||!tl3||!yop||!bl1||!bl2||!bl3||
      !dob||!s1name||!s2name||!s3name||!sdate1||!sdate2||!sdate3||!edate1||!edate2||!edate3||!rem1||!rem2||!rem3||!cl1||!ml1||!cl2||!ml2||!cl3||!ml3
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
      ndetails,tl1,tl2,tl3,yop,bl1,bl2,bl3,
      sdate1,sdate2,sdate3,edate1,edate2,edate3,s1name,s2name,s3name,rem1,rem2,rem3,cl1,ml1,ml2,ml3,cl2,cl3
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
            
              <label>{selectedEmployee.firstName}
              {"\u00a0\u00a0"}
              {selectedEmployee.lastName}</label>
        
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Date of Birth</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.dob}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Gender</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.gender}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Mobile No.</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.phone}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Email</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.email}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Blood Group</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.bgroup}</label>
          </div>
        </div>
        <h3>Professional Details</h3>
        <div className="row">
          <div className="col-md-6">
            <label>Qualification</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.qual}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Year Of Passing</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.yop}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Years of Experience</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.exp}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Date of Joining</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.date}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Date of Retirement</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.dor}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Salary</label>
          </div>
          <div className="col-md-6">
            <label>₹{selectedEmployee.salary}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Pay Scale Level</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.pscale}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Bank Name</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.bname}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Bank Account Number</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.baccount}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Nominee Name(Relation)</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.ndetails}</label>
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
      <th scope="col">Total No.  of  Leaves Taken</th>
      
      <th scope="col">Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{selectedEmployee.s1name}</td>
      <td>{selectedEmployee.sdate1}</td>
      <td>{selectedEmployee.edate1}</td>
      <td>{selectedEmployee.tl1}</td>
      
      <td>{selectedEmployee.rem1}</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{selectedEmployee.s2name}</td>
      <td>{selectedEmployee.sdate2}</td>
      <td>{selectedEmployee.edate2}</td>
      <td>{selectedEmployee.tl2}</td>
     
      <td>{selectedEmployee.rem2}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{selectedEmployee.s3name}</td>
      <td>{selectedEmployee.sdate3}</td>
      <td>{selectedEmployee.edate3}</td>
      <td>{selectedEmployee.tl3}</td>
     
      <td>{selectedEmployee.rem3}</td>
    </tr>
  </tbody>
</table>
</div>
<h3>Leaves History</h3>
<div className='contain-table'>
            
            <table className="table striped-table">
      <thead>
        <tr>
          <th scope="col">S.no</th>
          <th scope="col">Academic Year</th>
          <th scope="col">Allotted Casual Leaves</th>
          <th scope="col">No. of Casual Leaves</th>
          <th scope="col">No. of Medical Leaves</th>
          <th scope="col">Balance Leaves </th>
          
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>2015-2016</td>
          <td>10</td>
          <td>{selectedEmployee.cl1}</td>
          <td>{selectedEmployee.ml1}</td>
          
          <td>{selectedEmployee.bl1}</td>
    
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>2016-2017</td>
          <td>10</td>
          <td>{selectedEmployee.cl2}</td>
          <td>{selectedEmployee.ml2}</td>
         
          <td>{selectedEmployee.bl2}</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>2017-2018</td>
          <td>10</td>
          <td>{selectedEmployee.cl3}</td>
          <td>{selectedEmployee.ml3}</td>
         
          <td>{selectedEmployee.bl3}</td>
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
