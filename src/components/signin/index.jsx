import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/user";

const Signin = ({handleSetIsAuth}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOnClick = () => {
    login(email, password, handleSetIsAuth);
  };

  return (
    <div className="reg">
      <h1>Sign in</h1>
      <form action="post">
        <div>
          <p>E-mail</p>
          <input
            type="text"
            placeholder="example@mail.com"
            onChange={handleEmail}
          />
          <p>Enter a password</p>
          <input
            type="password"
            placeholder="Your password"
            onChange={handlePassword}
          />
        </div>
        <a onClick={() => handleOnClick()} className="button">
          SIGN IN
        </a>
      </form>
    </div>
  );
};

export default Signin;
