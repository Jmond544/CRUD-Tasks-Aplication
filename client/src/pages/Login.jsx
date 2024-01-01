import { Formik, Form } from "formik";
import { useTask } from "../Context/TaskContext";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login() {
  const { login } = useTask();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 text-gray-900 flex flex-col gap-8 p-5 sm:w-96 w-auto mx-auto rounded-lg gap-4 drop-shadow-2xl dark:bg-gray-900 dark:text-gray-200">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl text-center">Hello again!</h1>
        <h2 className="font-normal text-sm text-center">
          Welcome back you&apos;ve been missed
        </h2>
      </div>
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
            className="flex flex-col gap-8 font-bold"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-row align-middle">
                <div className="flex align-middle justify-center flex-col mr-2">
                  <FaUser />
                </div>
                <input
                  className="bg-white p-1 rounded-md font-normal border-none outline-none w-full dark:bg-gray-700"
                  type="text"
                  name="username"
                  placeholder="Write your username"
                  onChange={handleChange}
                  value={values.username}
                />
              </div>
              <div className="flex flex-row align-middle">
                <div className="flex align-middle justify-center flex-col mr-2">
                  <RiLockPasswordFill />
                </div>
                <input
                  className="bg-white p-1 rounded-md font-normal border-none outline-none w-full dark:bg-gray-700"
                  type="password"
                  name="password"
                  placeholder="Write your password"
                  onChange={handleChange}
                  value={values.password}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button
                className="bg-gray-900 hover:bg-gray-800 text-white p-1 rounded-md dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>

              <button
                className="bg-gray-900 hover:bg-gray-800 text-white text-sm p-1 rounded-md dark:bg-gray-900 dark:hover:bg-gray-950 transition duration-300 ease-in-out"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Create account
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
