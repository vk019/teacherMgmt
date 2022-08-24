import React,{useState} from "react";
const Request = ()=> {
  const [showForm,setShowForm ]=useState(false);
  const handleSumit=(e) =>
  {
  e.preventDefault();
  }
  return(
    <React.Fragment>
      {showForm ? (
      <form method="post" onSubmit={handleSumit}>
         


        <div  className="form-group mb-3">
          <label >Name</label>
          <input type="text"  className="form-control" ></input>
        </div>
        <div>
          <label>No. of Vacancies</label>
          <input type="text"  className="form-control" ></input>

        </div>
        <div>
          <label>Vacancy Domain</label>
          <input type="text"  className="form-control" ></input>

        </div>
        <div>
          <label>Qualification Required</label>
          <input type="text"  className="form-control" ></input>

        </div>
        <div>
          <label>Experience Required</label>
          <input type="text"  className="form-control" ></input>

        </div>
       
        <button type="submit"  onClick={()=>setShowForm(false)}>Submit Request </button>
       
        </form>
      
        ) :
        (
          <button className="btn btn-sm btn-primary" onClick={() => setShowForm(true )}>Create Vacancy</button>
        )}
        </React.Fragment>  

        
         

   
  );

};
export default Request;
