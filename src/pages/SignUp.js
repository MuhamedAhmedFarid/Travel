import React from "react";
import Footer from "../Componets/Footer";

function SignUp() {
  return (
    <>
      <div className="form__container">
        <h1>Send a messges to us</h1>
        <form>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <button>send a message</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
