import React,{useState} from "react";
const Apply = ()=> {
  const [showForm,setShowForm ]=useState(false);
  const handleSumit=(e) =>
  {
  e.preventDefault();
  }
  return(
    <React.Fragment>
      {showForm ? (
      <form onSubmit={handleSumit}>
         


        <div  className="fprm-group">
          <label >Name</label>
          <input type="text"  className="form-control" ></input>
        </div>
        <div>
          <label>Reason For transfer</label>
          <input type="text"  className="form-control" ></input>

        </div>
        <div>
          <label>School Name</label>
          <input type="text"  className="form-control" ></input>

        </div>
        <div>
          <label>Place of transfer</label>
          <input type="text"  className="form-control" ></input>

        </div>
        <div>
          <label>Reason For transfer</label>
          <input type="text"  className="form-control" ></input>

        </div>
       
        <button type="submit"  onClick={()=>setShowForm(false)}>Submit Application </button>
       
        </form>
      
        ) :
        (
          <button className="btn btn-sm btn-primary" onClick={() => setShowForm(true )}>Apply Now</button>
        )}
        </React.Fragment>  

        
         

   
  );

};
export default Apply;
