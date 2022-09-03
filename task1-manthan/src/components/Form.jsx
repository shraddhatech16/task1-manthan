import React from 'react';
import {useRef} from 'react';


export default function Form() {

  const userId = useRef(null);
  const id = useRef(null);
  const blogtitle = useRef(null);
  const body = useRef(null);

  function handleClick() {
    const data = {
      "UserId": userId.current.value,
      "Id": id.current.value,
      "Blotitle": blogtitle.current.value,
      "Body": body.current.value
    }
    console.log(data);
  }

  return (
    <div>
        <h1 style={{ textAlign: "center", marginTop: "90px", marginBottom: "5px",color:'white' ,fontFamily: 'Arial, Helvetica, sans-serif ', fontWeight:'800'}}>Form</h1>
        <div className="container" style={{"marginBottom": "70px"}}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">User Id</label>
            <input name="userId" ref={userId} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter User Id "/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Id</label>
            <input name="id" ref={id} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Id "/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Blogtitle</label>
            <input name="blogtitle" ref={title} type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter Blogtitle "/>
          </div>
          <div className="mb-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Body</label>
            <textarea name="body" ref={body} className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            <input name="body" ref={title} type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter Body "/>

          </div>
          <div className="container text-center">
          <button className="btn btn-primary" type="submit" onClick={handleClick}>Sumbit</button>
          </div>
        </div>
    </div>
  );
}
