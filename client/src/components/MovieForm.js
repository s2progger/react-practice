export default function MovieForm({ submitHandler, movie, setNewMovie }) {
  const changeHandler = (e) => {
    setNewMovie({ ...movie, [e.target.id]: e.target.value });
  };
  return (
    <form onSubmit={submitHandler}>
      <h2>Add a movie</h2>
      <input
        type="text"
        id="Title"
        placeholder="Title"
        value={movie.Title}
        onChange={changeHandler}
      />{" "}
      <input
        type="text"
        id="Rating"
        placeholder="Rating"
        value={movie.Rating}
        onChange={changeHandler}
      />{" "}
      <button type="submit">Add</button>
    </form>
  );
}
