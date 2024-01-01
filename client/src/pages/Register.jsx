import { Formik, Form } from "formik";
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useTask } from "../Context/TaskContext";

export default function Register() {
  const { register } = useTask();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 text-gray-900 flex flex-col p-5 sm:w-96 w-auto mx-auto rounded-lg gap-4 drop-shadow-2xl dark:bg-gray-900 dark:text-gray-200">
      <h1 className="font-bold text-2xl text-center">Register user</h1>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          const response = await register(values);
          values.token = response.data.token;
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
            <div className="flex flex-row align-middle">
              <div className="flex align-middle justify-center flex-col mb-4 mr-3">
                <FaUser />
              </div>
              <input
                className="bg-white p-1 rounded-md mb-4 font-normal border-none outline-none w-full dark:bg-gray-700"
                type="text"
                name="username"
                placeholder="Register your username"
                onChange={handleChange}
                value={values.username}
              />
            </div>

            <div className="flex flex-row align-middle">
              <div className="flex align-middle justify-center flex-col mb-4 mr-3">
                <IoMail />
              </div>
              <input
                className="bg-white p-1 rounded-md mb-4 font-normal border-none outline-none w-full dark:bg-gray-700"
                type="text"
                name="email"
                placeholder="Register your email"
                onChange={handleChange}
                value={values.email}
              />
            </div>

            <div className="flex flex-row align-middle">
              <div className="flex align-middle justify-center flex-col mb-4 mr-3">
                <RiLockPasswordFill />
              </div>
              <input
                className="bg-white p-1 rounded-md mb-4 font-normal border-none outline-none w-full dark:bg-gray-700"
                type="password"
                name="password"
                placeholder="Register your password"
                onChange={handleChange}
                value={values.password}
              />
            </div>
            <button
              className="bg-gray-900 hover:bg-gray-800 text-white p-1 rounded-md dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out"
              type="submit"
              disabled={isSubmitting}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
