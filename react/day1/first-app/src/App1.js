import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize state for each form element
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');

  // Handle text input change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handle radio button change
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // Handle checkbox change
  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter(skill => skill !== value));
    }
  };

  // Handle select option change
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  // Handle textarea change
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      gender,
      skills,
      country,
      description,
    };
    console.log(formData);
    // You can also perform additional actions like sending the formData to a server
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <br />
        <div>
          Gender:
          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} /> Male
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} /> Female
        </div>
        <br />
        <div>
          <label>Skills:</label>
          <input type="checkbox" name="skills" value="java" checked={skills.includes('java')} onChange={handleSkillsChange} /> Java
          <input type="checkbox" name="skills" value="javascript" checked={skills.includes('javascript')} onChange={handleSkillsChange} /> JavaScript
        </div>
        <br />
        <div>
          <label>Country:</label>
          <select value={country} onChange={handleCountryChange}>
            <option value="">Select</option>
            <option value="usa">United States of America</option>
            <option value="ca">Canada</option>
          </select>
        </div>
        <br />
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={handleDescriptionChange} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <hr />
      <h3>Form Data:</h3>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>Skills: {skills.join(', ')}</p>
      <p>Country: {country}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default App;