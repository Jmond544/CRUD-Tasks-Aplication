export default function TaskCard({task}) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task == 1 ? "✔️" : "❌"}</span>
      <span>{task.create_at}</span>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}
