import React from "react";
import {emailValidator,passwordValidator,} from "../components/regexValidator";
import { useNavigate } from "react-router-dom";

const Login = () => {


  const [input, setInput] = React.useState({ email: "", password: "" });

  const [errorMessage, seterrorMessage] = React.useState("");
  const [successMessage, setsuccessMessage] = React.useState("");

  const navigate=useNavigate()

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const formSubmitter = (e) => {
    e.preventDefault();
  
    if (!emailValidator(input.email))
      return seterrorMessage("Please enter valid email id");

    if (!passwordValidator(input.password))
      return seterrorMessage(
        "Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters"
      );
      if(input.email!== 'rohan@gmail.com' || input.password !=='Password@1')return seterrorMessage("Invalid email or password");
   
      if(input.email=== 'rohan@gmail.com' || input.password ==='Password@1'){
        navigate('./Home')
      }

      setsuccessMessage("Successfully Validated");
    

   
  };

  return (
    <div className='flex flex-col h-screen justify-center space-y-5 h-screen w-full bg-cover bg-fixed bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zDP0SUOrR3WDF1nNyHJAtanyCFledSYjKrKnEzxYD3VzLzzQRePXLptk-_feImfcD7Y&usqp=CAU")]'>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.financialexpress.com%2Fmoney%2Freal-estate-awaits-a-year-full-of-opportunities-amp-growth%2F2949022%2F&psig=AOvVaw13DkqkH-LqOlHmD4fVIHYS&ust=1679639581985000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNj-kpG38f0CFQAAAAAdAAAAABAE")' }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form
              className="space-y-5"
              onSubmit={formSubmitter}
            >
              <center className="login100-form-title p-b-49">Login</center>
              {errorMessage.length > 0 && (
                <div style={{ marginBottom: "10px", color: "red" }}>
                  {errorMessage}
                </div>
              )}
              {successMessage.length > 0 && (
                <div style={{ marginBottom: "10px", color: "green" }}>
                  {successMessage}
                </div>
              )}
              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="email is required"
              >
               <center>
                <input
                  className='w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white'  
                  type="text"
                  name="email"
                  placeholder="Type your username"
                  required
                  onChange={handleChange}
                />
                </center>
              
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
               <center>
                <input
                 className='w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white' 
                  type="text"
                  name="password"
                  placeholder="Type your password"
                  required
                  onChange={handleChange}
                />
                </center>
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="text-right p-t-8 p-b-31">
                <center>
                <a className='text-white text-lg hover:text-bold hover::border-b border-spacing-5 duration-300'  href="#">Forgot password?</a>
                </center>
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <center>
                  <button className='w-96 p-2 px-3 bg-transparent border border-black outline-none rounded-lg text-black hover:bg-black hover:text-white duration-300 '  onSubmit={formSubmitter}>Login</button>
                  </center>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Login;
