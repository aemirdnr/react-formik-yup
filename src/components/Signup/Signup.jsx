import { useFormik } from "formik";
import Validation from "./Validation";
import "./Signup.sass";

function Signup() {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      userName: "",
      userPass: "",
      passAgain: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(
        "Username: " +
          values.userName +
          "\nPassword: " +
          values.userPass +
          "\nPassword Again: " +
          values.passAgain +
          "\nE-mail: " +
          values.email
      );
    },
    validationSchema: Validation,
  });

  return (
    <form onSubmit={handleSubmit} className="form p-4 px-5">
      <div className="d-flex flex-column align-items-center gap-3">
        <div className="d-flex flex-column gap-1 p-1">
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            name="userName"
            className="form-control"
            onChange={handleChange}
            value={values.userName}
          />
          {errors.userName && touched.userName && (
            <div className="error">
              <span>{errors.userName}</span>
            </div>
          )}
        </div>
        <div className="d-flex flex-column gap-1 p-1">
          <label htmlFor="userPass">Password</label>
          <input
            id="userPass"
            type="password"
            name="userPass"
            className="form-control"
            onChange={handleChange}
            value={values.userPass}
          />
          {errors.userPass && touched.userPass && (
            <div className="error">
              <span>{errors.userPass}</span>
            </div>
          )}
        </div>
        <div className="d-flex flex-column gap-1 p-1">
          <label htmlFor="passAgain">Password again</label>
          <input
            id="passAgain"
            type="password"
            name="passAgain"
            className="form-control"
            onChange={handleChange}
            value={values.passAgain}
          />
          {errors.passAgain && touched.passAgain && (
            <div className="error">
              <span>{errors.passAgain}</span>
            </div>
          )}
        </div>
        <div className="d-flex flex-column gap-1 p-1">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && touched.email && (
            <div className="error">
              <span>{errors.email}</span>
            </div>
          )}
        </div>
        <button className="submit" type="submit">
          Register
        </button>
      </div>
    </form>
  );
}

export default Signup;
