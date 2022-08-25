import React from 'react'
import dp from './dp.jpg'
import './Profile.css'
export default function Profile() {
  return (
     <>
    <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={dp} alt="profilepic"/>
                            
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        Test School
                                    </h5>
                                    <h6>
                                        Zilla Parishad School(Govt.of Maharashtra)
                                    </h6>
                                    <p className="proile-rating">SSC</p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"aria-selected="true">About</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                   {/*<div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="/">Website Link</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home-tab" role="tabpanel" arialabelledby="home-tab ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>School Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>0001</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Test1</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>TestSchool@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Medium of Teaching</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>English</p>
                                            </div>
                                        </div>
                            </div>
                            <div className="tab-pane fade show active" id="timeline-tab" role="tabpanel" arialabelledby="timeline">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Established</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>2010</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Student Capacity</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>1500</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Level of Studies</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Senior Secondary</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>No. of Playground</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>2</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>No. of Auditorium</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>1</p>
                                            </div>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </>
    
  )
}
