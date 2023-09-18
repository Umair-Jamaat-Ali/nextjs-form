'use client'
import React, { useState } from "react";

export default function Home() {
  // Define states for each form input and the data to be displayed
  const [userName, setUserName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userDOB, setUserDOB] = useState("");
  const [gender, setGender] = useState("");
  const [showData, setShowData] = useState([]);

  // Function to handle form submission
  const onSubmitHandler = () => {
    // Create a new data object
    const newData = {
      name: userName,
      Father: fatherName,
      email: userEmail,
      phone: userPhone,
      dob: userDOB,
      gender: gender,
    };

    // Add the new data to the existing data array
    setShowData((prevData) => [...prevData, newData]);

    // Clear input fields after submission
    setUserName("");
    setFatherName("");
    setUserEmail("");
    setUserPhone("");
    setUserDOB("");
    setGender("");
  };

  return (
    <>
      <div className="md:mx-40 md:my-20">
        <div className="bg-slate-700 md:bg-slate-300 rounded-md p-5">
          <div className="sm:text-center text-3xl font-bold sm:px-[150px]">
            <p>Admission Form</p>
          </div>
          <div className="p-5 sm:px-[150px]">
            <form>
              <label className="py-5 font-semibold" htmlFor="userName">
                Name
              </label>
              <br />
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName} // Bind input value to state
                className="lg:w-[900px] pl-5 h-[30px] rounded-md"
                type="text"
                placeholder="Enter your name"
              />
              <br />
              <label className="my-2 font-semibold" htmlFor="fatherName">
                Father Name
              </label>
              <br />
              <input
                onChange={(e) => setFatherName(e.target.value)}
                value={fatherName} // Bind input value to state
                type="text"
                className="lg:w-[900px] pl-5 h-[30px] rounded-md"
                placeholder="Enter your father name"
              />
              <br />
              <label className="my-2 font-semibold" htmlFor="userEmail">
                Email
              </label>
              <br />
              <input
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail} // Bind input value to state
                className="lg:w-[900px] pl-5 h-[30px] rounded-md"
                type="email"
                placeholder="Enter your mail"
              />
              <br />
              <label className="my-2 font-semibold" htmlFor="phoneNumber">
                Phone Number
              </label>
              <br />
              <input
                onChange={(e) => setUserPhone(e.target.value)}
                value={userPhone} // Bind input value to state
                className="lg:w-[900px] pl-5 h-[30px] rounded-md"
                type="tel"
                placeholder="Enter your number"
              />
              <br />
              <label className="my-2 font-semibold" htmlFor="date">
                Date of Birth
              </label>
              <br />
              <input
                onChange={(e) => setUserDOB(e.target.value)}
                value={userDOB} // Bind input value to state
                className="lg:w-[900px] pl-5 h-[30px] rounded-md"
                type="date"
                placeholder="Enter your DOB"
              />
              <br />
              <label className="my-2 font-semibold" htmlFor="gender">
                Gender
              </label>
              <br />
              <input
                onChange={(e) => setGender(e.target.value)}
                value={gender} // Bind input value to state
                className="ml-2"
                type="radio"
                id="Male"
                name="fav_language"
                value="Male"
              />
              <label htmlFor="html">Male</label>
              <input
                onChange={(e) => setGender(e.target.value)}
                value={gender} // Bind input value to state
                className="ml-2"
                type="radio"
                id="Female"
                name="fav_language"
                value="Female"
              />
              <label htmlFor="css">Female</label>
              <br />
              <button
                className="w-[120px] h-[40px] bg-blue-500 rounded-lg lg:mx-[380px] hover:bg-white hover:border-2 hover:border-blue-400 hover:scale-110"
                onClick={onSubmitHandler}
                type="button" // Use type="button" to prevent form submission
              >
                Submit
              </button>
            </form>
          </div>
        </div>
{showData.length > 0 && 
        <div className="bg-emerald-300 mt-10 rounded-xl text-center pl-4 py-2 ">
          <table >
            <thead >
              <tr >
                <th>Name</th>
                <th>Father Name</th>
                <th>E-mail</th>
                <th>Phone</th>
                <th>Date of Birth</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {showData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.Father}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.dob}</td>
                  <td>{item.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        }
      </div>
    </>
  );
}
