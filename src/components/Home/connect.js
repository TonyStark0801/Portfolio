import { Form} from 'semantic-ui-react';

import Particle from "../Particle";
import { useState } from 'react';
import swal from '@sweetalert/with-react'



function Connect() {
  const [formState,setFormState]= useState({});

  const changeHandler = (event)=> {
    setFormState({...formState,[event.target.name]:event.target.value});
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    const config = {
      SecureToken: 'b88faa42-4927-4719-9165-6d7ee0d68d1b',
      To : 'anonymousperson6863@gmail.com',
      From : 'anonymousperson6863@gmail.com',
      Subject : "This is my Contact form",
      Body : `${formState.name} connect to you over email i.e ${formState.email}. My phone number ${formState.phone}`
    };

    if(window.Email){
      window.Email.send(config).then((message)=>alert(message));
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
