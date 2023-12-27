import { Formik, Form } from "formik";
import { useTask } from "../Context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TaskForm() {
  const { createTask, updateTask, getTask } = useTask();
  const params = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const responseData = await getTask(params.id);
        setTask({
          title: responseData[0].title,
          description: responseData[0].description,
        });
      }
    };
    loadTask();
    console.log(import.meta.env.API_URL)
  }, []);
  return (
    <div className="bg-gray-100 text-gray-900 flex flex-col p-5 w-96 mx-auto rounded-md gap-4 drop-shadow-2xl dark:bg-gray-900 dark:text-gray-200">
      <h1 className="text-center text-2xl font-bold">
        {params.id ? `Edit task ${params.id}` : `Create task`}
      </h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            className="flex flex-col gap-3 font-bold"
            onSubmit={handleSubmit}
          >
            <label>Title</label>
            <input
              className="bg-white p-1 rounded-md mb-4 font-normal border-none outline-none dark:bg-gray-700"
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label>Descripcion</label>
            <textarea
              className="bg-white p-1 rounded-md mb-4 font-normal border-none outline-none dark:bg-gray-700"
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button
              className="bg-gray-900 hover:bg-gray-800 text-white p-1 rounded-md dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
