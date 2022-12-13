import React from 'react';

export default function Contact
  () {
  return (
    <div className="container">
      Contact
      <form className='contact'>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder='Email' required />
        <textarea placeholder="Let's Chat"/>
        <button type="submit">Submit</button>
      </form>    
    </div>
  );
}
