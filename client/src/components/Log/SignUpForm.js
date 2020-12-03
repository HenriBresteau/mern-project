import React, { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");
  const handlgeRegister = async (e) => {};
  return (
    <form action="" onSubmit={handlgeRegister} id="sign-up-form">
      <label htmlFor="pseudo">Pseudo</label> <br />
      <input
        type="text"
        name="pseudo"
        id="pseudo"
        onChange={(e) => setPseudo(e.target.value)}
        value={pseudo}
      />
      <div className="pseudo error"></div>
      <br />
      <label htmlFor="email">Email</label> <br />
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Password</label> <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <br />
      <label htmlFor="password-conf">Confirmer mot de passe</label> <br />
      <input
        type="password"
        name="password-conf"
        id="password-conf"
        onChange={(e) => setControlPassword(e.target.value)}
        value={controlPassword}
      />
      <div className="password-conf error"></div>
      <br />
      <input type="checkbox" name="terms" id="terms" />
      <label htmlFor="terms">
        J'accepte les{" "}
        <a href="/" target="_blank" rel="nooponer noreferer">
          Conditions générales
        </a>
      </label>
      <div className="terms error"></div>
      <br />
      <input type="submit" value="Valider inscription" />
    </form>
  );
};

export default SignUpForm;
