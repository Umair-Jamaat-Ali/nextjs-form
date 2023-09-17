export default function Home() {
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
              <input className="w-[900px] pl-5 h-[30px] rounded-md " type="text" placeholder="Enter your name" />
              <br />
              <label className="my-2 font-semibold" htmlFor="fatherName">Father Name </label>
              <br />
              <input type="text" className="w-[900px] pl-5 h-[30px] rounded-md " placeholder="Enter your father name" />
              <br />
              <label className="my-2 font-semibold" htmlFor="userEmail"> Email </label>
              <br />
              <input className="w-[900px] pl-5 h-[30px] rounded-md " type="email" placeholder="Enter your mail" />
              <br />
              <label className="my-2 font-semibold" htmlFor="phoneNumber">Phone Number</label>
              <br />
              <input className="w-[900px] pl-5 h-[30px] rounded-md " type="tel" placeholder="Enter your number" />
              <br />
              <label className="my-2 font-semibold" htmlFor="date">Date of Birth</label>
              <br />
              <input className="w-[900px] pl-5 h-[30px] rounded-md " type="date" placeholder="Enter your DOB" />
              <br />
              <label className="my-2 font-semibold" htmlFor="gender">Gender</label>
              <br/>
              <input className="ml-2" type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">Male</label>
                <input className="ml-2" type="radio" id="female" name="fav_language" value="Female" />
                  <label for="css">Female</label>
                  <br />
                </form>
              </div>
          </div>
        </div>
      </>
      )
}
