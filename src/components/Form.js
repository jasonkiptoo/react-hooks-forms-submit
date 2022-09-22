import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Jayson");
  const [lastName, setLastName] = useState("K");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
    };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    console.log(formData);
  };

  //create a list of new data entries
  const submisionList = submittedData.map((list, index) => {
    return (
      <div key={index}>
        {list.firstName}
        {list.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>

      <h3>{submisionList}</h3>
    </div>
  );
}

export default Form;
