import { Container } from 'react-bootstrap';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';

import Particle from "../Particle";
import { useState } from 'react';



function Connect() {
  const [formState,setFormState]= useState({});

  const changeHandler = (event)=> {
    setFormState({...formState,[event.target.name]:event.target.value});
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    const config = {
      SecureToken: 'de22f1b4-39a8-4a7c-b8d4-3897ef2580e2',
      To : 'anonymousperson6864@gmail.com',
      From : formState.email,
      Subject : "This is my Contact form",
      Body : `${formState.name} connect to you over email. My phone number ${formState.phone}`
    };

    if(window.Email){
      window.Email.send(config).then(()=>alert("Message sent successfully!"));
    }
  }

    return (
      <section>
<Particle/>
        <div className='contact' >
          <Form onSubmit={submitHandler} >
          <input type="text" name= "name" placeholder='Your Name' value={formState.name || ''}  onChange={changeHandler} required></input>
          <input type="email" name= "email" placeholder='Email id'  value={formState.email || ''}  onChange={changeHandler} required></input>
          <input type="text" name= "phone" placeholder='Phone no.' value={formState.phone || ''}  onChange={changeHandler} required></input>
          <textarea name = "message" rows="4" placeholder='How can I help you?' value={formState.message || ''}  onChange={changeHandler}></textarea>
          <button type='submit'>Send</button>
          </Form>
        </div>
</section>
      );
    
}

export default Connect;
