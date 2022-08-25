import React from 'react'
import '../css/home.css'

function Home() {
  return (
    <>
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center">
                Feels the Fresh Business Perspective.
              </h1>
              <p className="lead  text-center fs-4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer elementum, tortor tincidunt iaculis semper, arcu nisl luctus arcu, ac vehicula turpis ante a purus. 
              Phasellus tincidunt purus eget arcu scelerisque, at auctor risus vehicula. Nunc non posuere sem. 
              Quisque nulla nunc, porttitor vitae enim nec, ultricies sollicitudin ipsum. In nec odio cursus, blandit neque nec, vehicula augue. 
              Nunc ligula metus, viverra sit amet justo id, molestie dignissim leo. 
              Cras orci purus, elementum sit amet imperdiet vulputate, feugiat at libero. 
              Suspendisse gravida enim vel sollicitudin euismod. Quisque varius ac diam sit amet semper. 
              Curabitur rutrum ipsum et congue maximus. Mauris vel risus venenatis, malesuada ipsum in, sagittis leo. 
              Aliquam quis pellentesque eros. In a lorem sit amet orci imperdiet auctor. 
              Vestibulum accumsan ac lorem ac vehicula. Maecenas sollicitudin laoreet congue. 
              Fusce quis fringilla erat.
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                  Get Quote
                </button>
                <button className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Home
