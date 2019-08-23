import React from 'react';  

const Admin = () =>{
  return (
      <div className="login-page">
         <form>
            <label id="icon" htmlFor="username"><i className="fa fa-user"></i></label>
            <input type="text" placeholder="Username" id="username"/>
            <label id="icon" htmlFor="password"><i className="fa fa-key"></i></label>
            <input type="password" placeholder="Password" id="password"/>
            <button type="submit" value="Sign In"></button>
        </form>
      </div>
  );
}

export default Admin;
