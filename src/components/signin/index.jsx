import { useContext } from "react";
import { login, profile } from "../../actions/user";
import { useNavigate } from "react-router-dom";
import { DefaultContext } from "../../Context";

export const Signin = () => {

  const {
    email,
    password,
    setUser,
    setEmail,
    setPassword,
    handleSetIsAuth,
  } = useContext(DefaultContext);
  const navigate =  useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOnClick = () => {
    login(
      email,
      password,
      handleSetIsAuth
    );
    profile(email).then(response => setUser(response));
    navigate('/')
  };

  return (
    <div className="reg">
      <h1>Sign in</h1>
      <form action="post">
        <div>
          <p>E-mail</p>
          <input
            type="text"
            onChange={handleEmail}
            placeholder="example@mail.com"
          />
          <p>Enter a password</p>
          <input
            type="password"
            onChange={handlePassword}
            placeholder="Your password"
          />
        </div>
        <a
          className="button"
          onClick={() => handleOnClick()}
        >SIGN IN</a>
      </form>
    </div>
  );
};
