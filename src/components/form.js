import React from 'react';

const Form = (props) => {
  return(
    <div className="form-container">
    <form className='form' onSubmit={props.weatherMethod}>
    <input type='text' name="city" placeholder="Enter the city"/>
    <button>GO</button>
    </form>
    </div>
  )
}

 export default Form;
