const resources = () => {
  const uploadResource = (e) => {
    console.log(e.target.files[0]);
    alert("Resource uploaded");
  };

  return (
    <div>
      <h2>Learning Resources</h2>
      <input type="file" accept=".pdf,.ppt,.pptx,.doc,.docx" onChange={uploadResource} />
    </div>
  );
};

export default resources;
