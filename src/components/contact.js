import React from 'react';
import { useContactData } from '../hooks/useContactData';
import { useSectionTitles } from '../hooks/useSectionTitles';
import Titles from './ui/Titles';
import { InputForm, TextForm } from './ui/InputsForm';
import { HelpBlock } from './ui/Separators';

const Contact = () => {
  const { allDatoCmsSectionsTitle } = useContactData();
  const defaultTitles = {
    sectionD: 'contact',
    mainTitleD: 'Contact',
    littleTitleD: 'Contact Me'
  };
  const sectionOpst = useSectionTitles(allDatoCmsSectionsTitle.nodes, defaultTitles);
  return (
    <div className="container-fluid py-5" id={sectionOpst.sectionName}>
      <div className="container">
        <Titles
          mainTitle={sectionOpst.mainTitle}
          littleTitle={sectionOpst.littleTitle}
        />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form text-center">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="form-row">
                  <div className="control-group col-sm-6">
                    <InputForm opts={formOpts.name} />
                    <HelpBlock />
                  </div>
                  <div className="control-group col-sm-6">
                    <InputForm opts={formOpts.email} />
                    <HelpBlock />
                  </div>
                </div>
                <div className="control-group">
                  <InputForm opts={formOpts.subject} />
                  <HelpBlock />
                </div>
                <div className="control-group">
                  <TextForm opts={formOpts.message} />
                  <HelpBlock />
                </div>
                <div>
                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const formOpts = {
  name: {
    required: true,
    typeform: 'text',
    idform: 'name',
    placeholder: 'Your Name',
    validationmsg: 'Please enter your name',
  },
  email: {
    required: true,
    typeform: 'email',
    idform: 'email',
    placeholder: 'Your Email',
    validationmsg: 'Please enter your email',
  },
  subject: {
    required: true,
    typeform: 'text',
    idform: 'subject',
    placeholder: 'Your Subject',
    validationmsg: 'Please enter your Subject',
  },
  message: {
    required: true,
    rows: '5',
    idform: 'message',
    placeholder: 'Message',
    validationmsg: 'Please enter your message',
  },
};
