import { useState } from "react";

const lessons = () => {
  const [lesson, setlesson] = useState({
    title: "",
    date: "",
    time: "",
    description: ""
  });

  const handleChange = (e) => {
    setlesson({ ...lesson, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(lesson);
    alert("Lesson uploaded");
  };

  return (
    <div>
      <h2>Create Lesson</h2>

      <form onSubmit={handleSubmit} className="form">
        <input name="title" placeholder="Lesson Title" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <textarea name="description" placeholder="Lesson Description" onChange={handleChange} />
        <button type="submit">Upload Lesson</button>
      </form>
    </div>
  );
};

export default lessons;
