
// import React, { useState } from "react";
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:3000/forgot-password", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//       }),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data, "userRegister");
//         // Handle success, e.g., show a success message to the user
//         alert(data.status);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         // Handle error, e.g., show an error message to the user
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Forgot Password</h3>
//       <div className="mb-3">
//         <label>Email Address</label>
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       <div className="d-grid">
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//         <p className="forgot-password text-right">
//           <a href="/sign-up">Sign up</a>
//         </p>
//       </div>
//     </form>
//   );
// };

// export default ForgotPassword;


import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  // Uncomment this line to import Bootstrap styles

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://password-reset-ppcm.onrender.com/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data, "userRegister");
        // Handle success, e.g., show a success message to the user
        alert(data.status);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mt-5">
        <h3>Forgot Password</h3>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p className="forgot-password text-right mt-3">
            <a href="/sign-up">Sign up</a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default ForgotPassword;
