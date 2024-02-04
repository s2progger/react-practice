export default function MovieForm({ submitHandler, movieRef }) {
  const handleInputChange = (e) => {
    movieRef[e.target.id] = e.target.value;
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Add a movie</h2>
      <input
        type="text"
        id="Title"
        placeholder="Title"
        onChange={handleInputChange}
      />{" "}
      <input
        type="text"
        id="Rating"
        placeholder="Rating"
        onChange={handleInputChange}
      />{" "}
      <button type="submit">Add</button>
    </form>
  );
}
