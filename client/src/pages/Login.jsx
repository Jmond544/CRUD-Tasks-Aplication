import { Formik, Form } from "formik";
import { useTask } from "../Context/TaskContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useTask();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values) => {
          const response = await login(values);
          values.token = response.data.token;
          values.email = response.data.email;
          window.localStorage.setItem("user_tasks", JSON.stringify(values));
          navigate("/");
          window.location.reload();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            className="flex flex-col gap-3 font-bold"
            onSubmit={handleSubmit}
          >
            <label>Username</label>
            <input
              className="bg-white p-1 rounded-md mb-4 font-normal border-none outline-none dark:bg-gray-700"
              type="text"
              name="username"
              placeholder="Write your email"
              onChange={handleChange}
              value={values.username}
            />
            <label>Password</label>
            <input
              className="bg-white p-1 rounded-md mb-4 font-normal border-none outline-none dark:bg-gray-700"
              type="password"
              name="password"
              placeholder="Write your password"
              onChange={handleChange}
              value={values.password}
            />
            <button
              className="bg-gray-800 text-white p-2 rounded-md font-bold hover:bg-gray-700 transition duration-300 ease-in-out"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
