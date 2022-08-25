import React from 'react'
import '../css/Footer.css'

function Footer() {
  return (
    <>

<footer class="section bg-footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <div class="">
          <h6 class="footer-heading text-uppercase text-white">Information</h6>
          <ul class="list-unstyled footer-link mt-4">
          <li><a href="">Disclaimer</a></li>
            <li><a href="">Terms and Conditions</a></li>
            <li><a href="">Sitemap</a></li>
            <li><a href="">Help</a></li>
          </ul>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="">
          <h6 class="footer-heading text-uppercase text-white">Ressources</h6>
          <ul class="list-unstyled footer-link mt-4">
          <li><a href="">Home </a></li>
            <li><a href="">Manage Teachers</a></li>
            <li><a href="">Manage Schools</a></li>
            <li><a href="">Manage Vacancy</a></li>
          </ul>
        </div>
      </div>

      {/*<div class="col-lg-2">
        <div class="">
          <h6 class="footer-heading text-uppercase text-white">Help</h6>
          <ul class="list-unstyled footer-link mt-4">
            <li><a href="">Sign Up </a></li>
            <li><a href="">Login</a></li>
            <li><a href="">Terms of Services</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
  </div>*/}

      <div class="col-lg-4">
        <div class="">
          <h6 class="footer-heading text-uppercase text-white">Contact Us</h6>
          <p class="contact-info mt-4">Contact us if need help withanything</p>
          <p class="contact-info">+01 123-456-7890</p>
          
        </div>
      </div>

    </div>
  </div>

  <div class="text-center mt-5">
    <p class="footer-alt mb-0 f-14">2022 © Dynamic Coders, All Rights Reserved</p>
  </div>
</footer>
      
    </>
  )
}

export default Footer