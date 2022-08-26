import React, { useState } from "react";
import Swal from "sweetalert2";

function View({ employees,leaves,handleLEdit, selectedEmployee,selectedVacancy,setVacancy, setEmployees, setIsViewing,setIsLViewing }) {
  const id = selectedEmployee.id;
  

  const [firstName, setfirstName] = useState(selectedEmployee.firstName);
  const [lastName, setlastName] = useState(selectedEmployee.lastName);
  
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
  const [ml4, setml4] = useState(selectedEmployee.ml4);
  const [ml5, setml5] = useState(selectedEmployee.ml5);
  const [ml6, setml6] = useState(selectedEmployee.ml6);
  const [cl2, setcl2] = useState(selectedEmployee.cl2);
  const [cl3, setcl3] = useState(selectedEmployee.cl3);
  const [cl4, setcl4] = useState(selectedEmployee.cl4);
  const [cl5, setcl5] = useState(selectedEmployee.cl5);
  const [cl6, setcl6] = useState(selectedEmployee.cl6);
  const [tl1, settl1] = useState(selectedEmployee.tl1);
  const [tl2, settl2] = useState(selectedEmployee.tl2);
  const [tl3, settl3] = useState(selectedEmployee.tl3);
  const [yop, setyop] = useState(selectedEmployee.yop);
  const [bl1, setbl1] = useState(selectedEmployee.bl1);
  const [bl2, setbl2] = useState(selectedEmployee.bl2);
  const [bl3, setbl3] = useState(selectedEmployee.bl3);
  const [bl4, setbl4] = useState(selectedEmployee.bl4);
  const [bl5, setbl5] = useState(selectedEmployee.bl5);
  const [bl6, setbl6] = useState(selectedEmployee.bl6);
  const [Tname1,setTname1] = useState(selectedEmployee.Tname1);
  const [Tname2,setTname2] = useState(selectedEmployee.Tname2);
  const [Tname3,setTname3] = useState(selectedEmployee.Tname3);
  const [oname1,setoname1] = useState(selectedEmployee.oname1);
  const [oname2,setoname2] = useState(selectedEmployee.oname2);
  const [oname3,setoname3] = useState(selectedEmployee.oname3);
  const [ts1,setts1] = useState(selectedEmployee.ts1);
  const [ts2,setts2] = useState(selectedEmployee.ts2);
  const [ts3,setts3] = useState(selectedEmployee.ts3);
  const [te1,sette1] = useState(selectedEmployee.te1);
  const [te2,sette2] = useState(selectedEmployee.te2);
  const [te3,sette3] = useState(selectedEmployee.te3);
  const [ncon,setncon] = useState(selectedEmployee.ncon);
  const [spname,setspname] = useState(selectedEmployee.spname);
  const [ms,setms] = useState(selectedEmployee.ms);
  const [r1,setr1] = useState(selectedEmployee.r1);
  const [r2,setr2] = useState(selectedEmployee.r2);
  const [r3,setr3] = useState(selectedEmployee.r3);

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
      !spname||
      !ms||!r1||!r2||!r3||
      !ndetails||!ncon||!tl1||!tl2||!tl3||!yop||!bl1||!bl2||!bl3||!cl4||!cl5||!cl6||!ml4||!ml5||!ml6||!bl4|!bl5||!bl6||!Tname1||!Tname2||!Tname3||!oname1||!oname2||!oname3||!ts1||!ts2||!ts3||!te1||!te2||!te3||
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
      ncon,
      pscale,
      bname,
      bgroup,
      exp,
      qual,
      nplace,
      baccount,
      cat,
      ms,
      spname,r1,r2,r3,
      ndetails,tl1,tl2,tl3,yop,bl1,bl2,bl3,cl4,bl4,cl5,bl5,cl6,bl6,ml4,ml5,ml6,Tname1,Tname2,Tname3,oname1,oname2,oname3,ts1,ts2,ts3,te1,te2,te3,
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
        <div className="row">
          <div className="col-md-6">
            <label>Marital Status</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.ms}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Spouse Name</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.spname}</label>
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
        <div className="row">
          <div className="col-md-6">
            <label>Nominee Contact</label>
          </div>
          <div className="col-md-6">
            <label>{selectedEmployee.ncon}</label>
          </div>
        </div>
        <h3>Training And Certifications</h3>
        <div className='contain-table'>
            
            <table className="table striped-table">
      <thead>
        <tr>
          <th scope="col">S.no</th>
          <th scope="col">Training/Certification Name</th>
          <th scope="col">Organization Name</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
       
          
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{selectedEmployee.Tname1}</td>
          <td>{selectedEmployee.oname1}</td>
          <td>{selectedEmployee.ts1}</td>
          <td>{selectedEmployee.te1}</td>
          
   
    
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>{selectedEmployee.Tname2}</td>
          <td>{selectedEmployee.oname2}</td>
          <td>{selectedEmployee.ts2}</td>
          <td>{selectedEmployee.te2}</td>
         
        
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>{selectedEmployee.Tname3}</td>
          <td>{selectedEmployee.oname3}</td>
          <td>{selectedEmployee.ts3}</td>
          <td>{selectedEmployee.te3}</td>
         
          
        </tr>

      </tbody>
    </table>
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
      <th scope="col">Transfer or Promotion</th>
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
      <td>{selectedEmployee.r1}</td>
      
      <td>{selectedEmployee.rem1}</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{selectedEmployee.s2name}</td>
      <td>{selectedEmployee.sdate2}</td>
      <td>{selectedEmployee.edate2}</td>
      <td>{selectedEmployee.tl2}</td>
      <td>{selectedEmployee.r2}</td>
     
      <td>{selectedEmployee.rem2}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{selectedEmployee.s3name}</td>
      <td>{selectedEmployee.sdate3}</td>
      <td>{selectedEmployee.edate3}</td>
      <td>{selectedEmployee.tl3}</td>
      <td>{selectedEmployee.r3}</td>
     
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
          <th colSpan={2} className="text-center">
                            Actions
                        </th>
          
          
        </tr>
      </thead>
     
      <tbody>
      {leaves.length > 0 ? (
                        leaves.map((leave, i) => (
                            <tr key={leave.id}>
                                <td>{i + 1}</td>
                                <td>{leave.ay}</td>
                                <td>{leave.acl}</td>
                                <td>{leave.ncl}</td>
                                <td>{leave.nml}</td>
                                <td>{leave.bl} </td>
                               
                                <td className="text-right">
                                    <button
                                        onClick={() => handleLEdit(leave.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                
                              
                               
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
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
