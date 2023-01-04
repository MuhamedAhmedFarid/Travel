import React from 'react'

function SignUp() {
  return (
    <div className='form__container'>
    <h1>Send a messges to us</h1>
    <form>
        <input type='text' placeholder='name'/>
        <input type='email' placeholder='email'/>
        <button>send a message</button>
    </form>
</div>
  )
}

export default SignUp