import React, { useState, useEffect } from "react";

function CVForm() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("cvFormData");
    return saved ? JSON.parse(saved) : {
      name: "",
      education: "",
      workExperience: "",
      interests: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("cvFormData", JSON.stringify(formData));
  }, [formData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form data saved:", formData);
  }

  return (
    <form onSubmit={handleSubmit} >
      <h2>CV Form</h2>

      <label>
        Name: 
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br/>
      </label>

      <label>
        Education: 
        <textarea
          name="education"
          value={formData.education}
          onChange={handleChange}
          rows={3}
        /><br/>
      </label>

      <label>
        Work Experience: 
        <textarea
          name="workExperience"
          value={formData.workExperience}
          onChange={handleChange}
          rows={4}
        /><br/>
      </label>

      <label>
        Interests: 
        <textarea
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          rows={3}
        /><br/>
      </label>

      <button type="submit" >
        Save
      </button>
    </form>
  );
}

export default CVForm;