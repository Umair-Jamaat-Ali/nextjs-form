'use client';
import { useState } from "react";


export default function Home() {
  const [userName , setUserName] = useState("");
  const [fatherName , setFatherName] = useState("");
  const [userEmail , setUserEmail] = useState("");
  const [userPhone , setUserPhone] = useState();
  const [userDOB , setUserDOB] = useState("");
  const [gender , setGender] = useState("");

  const [showData , setShowData] = useState([]);

const onSubmitHandler = () => {
  console.log("userName", userName);
  console.log("fatherName", fatherName);
  console.log("userEmail", userEmail);
  console.log("userDOB", userDOB);
  console.log("userPhone", userPhone);
  console.log("gender", gender);

  let newData = {
    name: userName,
    Father : fatherName,
    email: userEmail,
    phone : userPhone,
    dob : userDOB,
    gender : gender
  }
 setShowData([newData])
}

  return (
    <>
      <div className="mx-40 my-20">
        <div className="bg-slate-300 rounded-md p-5">
          <div className="text-center text-3xl font-bold">
            <p>Admission Form</p>
          </div>
          <div className="p-5">
            <form>
              <label className="py-5 font-semibold " htmlFor="userName"> Name </label>
              <br />
              <input onChange={(e)=>setUserName(e.target.value)} className="w-[900px] pl-5 h-[30px] rounded-md " type="text" placeholder="Enter your name" />
              <br />
              <label className="my-2 font-semibold" htmlFor="fatherName">Father Name </label>
              <br />
              <input onChange={(e)=>setFatherName(e.target.value)} type="text" className="w-[900px] pl-5 h-[30px] rounded-md " placeholder="Enter your father name" />
              <br />
              <label className="my-2 font-semibold" htmlFor="userEmail"> Email </label>
              <br />
              <input onChange={(e)=>setUserEmail(e.target.value)} className="w-[900px] pl-5 h-[30px] rounded-md " type="email" placeholder="Enter your mail" />
              <br />
              <label className="my-2 font-semibold" htmlFor="phoneNumber">Phone Number</label>
              <br />
              <input onChange={(e)=>setUserPhone(e.target.value)} className="w-[900px] pl-5 h-[30px] rounded-md " type="tel" placeholder="Enter your number" />
              <br />
              <label className="my-2 font-semibold" htmlFor="date">Date of Birth</label>
              <br />
              <input onChange={(e)=>setUserDOB(e.target.value)} className="w-[900px] pl-5 h-[30px] rounded-md " type="date" placeholder="Enter your DOB" />
              <br />
              <label className="my-2 font-semibold" htmlFor="gender">Gender</label>
              <br/>
              <input  onChange={(e)=>setGender(e.target.value)} className="ml-2" type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">Male</label>
                <input onChange={(e)=>setGender(e.target.value)} className="ml-2" type="radio" id="female" name="fav_language" value="Female" />
                  <label for="css">Female</label>
                  <br />
                  <button className="w-[120px] h-[40px] bg-blue-500 rounded-lg mx-[380px] hover:bg-white hover:border-2
                  hover:border-blue-400 hover:scale-110" onClick={onSubmitHandler}>Submit</button>
                </form>
              </div>
          </div>

        <div>
  
        </div>
        <div>
          <table>
            <thead>
              <tr>
              <th>Name</th>
              <th>Father Name</th>
              <th>E-mail</th>
              <th>Phone</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              </tr>
            </thead>
          {showData.map((item, index) => {
            return(
            <tr id={index}>
              <td>{item.name}</td>
              <td>{item.Father}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.dob}</td>
              <td>{item.gender}</td>
            </tr>)
          } )}
          </table>
        </div>

        </div>
      </>
      )
}
