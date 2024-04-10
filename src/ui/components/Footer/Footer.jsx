import React from 'react'
import "./Footer.css"
import { Button, Form, Input } from 'reactstrap'
import { MoveRight } from 'lucide-react'


export default function Footer() {
    return (
        <>
           <footer class="section bg-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="">
                        <h6 class="footer-heading text-uppercase text-white">KNOW HELIOS</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="">About Us</a></li>
                            <li><a href="">About Titan Company Limited</a></li>
                            <li><a href="">Bulk purchase & Corporate gifting</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="">
                        <h6 class="footer-heading text-uppercase text-white">TERMS & CONDITIONS</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="">Shipping & Return Policies </a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">FAQs</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="contact-us">
                        <h6 class="footer-heading text-uppercase text-white">CONTACT US</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="">For Sale: <span> heliossupport@titan.co.in </span></a></li>
                            <li><a href="">For Complaints: <span>1800 266 0123</span></a></li>
                            <li><a href="">Call Time: <span>Our customer Success team is available from Monday to Saturday from 09:00 to 17:30</span></a></li>
                            <li><a href="">For Complaints: <span>customercare@titan.co.in</span></a></li>
                            <li><a href="">Follow Us:</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="">
                        <h6 class="footer-heading text-uppercase text-white">SUBSCRIBE TO OUR NEWSLETTER</h6>
                        <div class="">                      
                                                   
                            <div class="subscribe-form d-flex">
                                
                                  <Input  type="text" name="newsletter" placeholder="Enter Your Email Address"/>
                                    <Button><MoveRight /></Button>
                        
                            </div>
                       
                    </div>
                      
                    </div>
                </div>

            </div>
        </div>

        <div class="text-center mt-5">
            <p class="footer-alt mb-0 f-14">2019 © Anup, All Rights Reserved</p>
        </div>
    </footer>
        </>

    )
}