import { Container } from 'react-bootstrap';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Email from 'https://smtpjs.com/v3/smtp.js';

import Particle from "../Particle";
import { useState } from 'react';



function Connect() {
  const [formState,setFormState]= useState({});
  const changeHandler = (e)=> {
    setFormState({...formState,[e.target.name]:e.target.value})
  }

    return (
      <section>
<Particle/>
        <div className='contact' >
          <Form  >
          <input type="text" id= "name" placeholder='Your Name' value={""}  onChange={changeHandler} required></input>
          <input type="email" id= "email" placeholder='Email id'  value={""}  onChange={changeHandler} required></input>
          <input type="text" id= "phone" placeholder='Phone no.' value={""}  onChange={changeHandler} required></input>
          <textarea id = "message" rows="4" placeholder='How can I help you?' value={""}  onChange={changeHandler}></textarea>
          <button type='submit'>Send</button>
          </Form>
        </div>
</section>
      );
    
}

export default Connect;
