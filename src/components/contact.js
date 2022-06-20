import React from 'react';
import Titles from './ui/Titles';
import { InputForm, TextForm } from './ui/InputsForm';
import { HelpBlock } from './ui/Separators';

const Contact = () => {
  return (
    <div className="container-fluid py-5" id="contact">
        <div className="container">
            <Titles mainTitle={'Contact'} littleTitle={'Contact Me'} />
            {/* <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Contact</h1>
                <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
            </div> */}
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form text-center">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" noValidate="novalidate">
                            <div className="form-row">
                                <div className="control-group col-sm-6">
                                    <InputForm opts={{required: true, typeform: 'text', idform: 'name', placeholder: 'Your Name', validationmsg: 'Please enter your name'}} />
                                    {/* <input type="text" className="form-control p-4" id="name" placeholder="Your Name"
                                        required="required" data-validation-required-message="Please enter your name" /> */}
                                    <HelpBlock />
                                </div>
                                <div className="control-group col-sm-6">
                                    <InputForm opts={{required: true, typeform: 'email', idform: 'email', placeholder: 'Your Email', validationmsg: 'Please enter your email'}} />
                                    {/* <input type="email" className="form-control p-4" id="email" placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" /> */}
                                    <HelpBlock />
                                </div>
                            </div>
                            <div className="control-group">
                                    <InputForm opts={{required: true, typeform: 'text', idform: 'subject', placeholder: 'Your Subject', validationmsg: 'Please enter your Subject'}} />
                                {/* <input type="text" className="form-control p-4" id="subject" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter a subject" /> */}
                                <HelpBlock />
                            </div>
                            <div className="control-group">
                                <TextForm opts={{required: true, rows: '5', idform: 'message', placeholder: 'Message', validationmsg: 'Please enter your message'}} />
                                {/* <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message"></textarea> */}
                                <HelpBlock />
                            </div>
                            <div>
                                <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Send
                                    Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
 
export default Contact;