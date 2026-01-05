const Students = () => {
  const students = [
    { id: "STD001", name: "John Banda", email: "john@gmail.com" },
    { id: "STD002", name: "Mary Phiri", email: "mary@gmail.com" }
  ];

  return (
    <div>
      <h2>My Students</h2>

      <table>
        <thead>
          <tr>
            <th>Student No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
