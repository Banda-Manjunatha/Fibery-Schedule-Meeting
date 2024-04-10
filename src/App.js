import React, { useState } from "react"
import "./output.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import logo from "./Assets/logo.png"
import { GoArrowLeft } from "react-icons/go"
import { FaGlobeAfrica } from "react-icons/fa"
import { IoMdTime } from "react-icons/io"
import { CiCalendar } from "react-icons/ci"
import { FaPlay } from "react-icons/fa"
import { IoPerson } from "react-icons/io5"
import { IoIosVideocam } from "react-icons/io"
import { TiTick } from "react-icons/ti"
import { FcGoogle } from "react-icons/fc"
import microsoft from "./Assets/microsoft.png"

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [showDatePicker, setShowDatePicker] = useState(true)
  const [selectedTime, setSelectedTime] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [guestEmail, setGuestEmail] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedOptions1, setSelectedOptions1] = useState([])
  const [selectedOptions2, setSelectedOptions2] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleDateChange = (date) => {
    setSelectedDate(date)
    setShowDatePicker(false)
  }

  const handleBack = () => {
    setShowDatePicker(true)
    setSelectedDate(null)
  }

  const handleTimeSelection = (time) => {
    setSelectedTime(time)
    setShowForm(false)
  }

  const handleNext = () => {
    // Logic to handle moving to the next step
    setShowForm(true)
  }

  const renderTimeOptions = () => {
    // Logic to generate time options
    const times = [
      "12:30pm",
      "01:20pm",
      "02:00pm",
      "03:00pm",
      "04:00pm",
      "05:30pm",
    ] // Example times
    return times.map((time, index) => (
      <p
        key={index}
        className=" p-3 rounded-md text-sky-500 font-bold tracking-wide text-[13px] h-[50px] outline-none m-2 text-center  border cursor-pointer  border-solid border-sky-200 hover:border-2 hover:border-sky-600"
        onClick={() => {
          handleTimeSelection(time)
        }}
      >
        {time}
      </p>
    ))
  }

  const getFormattedDate = (date) => {
    if (!date) return ""
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(date).toLocaleDateString("en-US", options)
  }
  const getDayOfWeek = (date) => {
    if (!date) return ""
    const options = {
      weekday: "long",
    }
    return new Date(date).toLocaleDateString("en-US", options)
  }

  const handleDescription = () => {
    setShowDescription((prevState) => !prevState)
  }

  const handleCheckboxChange1 = (event) => {
    const option = event.target.value
    if (event.target.checked) {
      setSelectedOptions1([...selectedOptions1, option])
    } else {
      setSelectedOptions1(selectedOptions1.filter((item) => item !== option))
    }
  }
  const handleCheckboxChange2 = (event) => {
    const option = event.target.value
    if (event.target.checked) {
      setSelectedOptions2([...selectedOptions2, option])
    } else {
      setSelectedOptions2(selectedOptions2.filter((item) => item !== option))
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleGuestEmailChange = () => {
    setGuestEmail(!guestEmail)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Check if at least one option is selected in each set
    if (selectedOptions1.length === 0 || selectedOptions2.length === 0) {
      alert("Please select at least one option from each set.")
      return
    }
    // Validate name and email fields
    if (!name || !email) {
      alert("Please fill in all required fields.")
      return
    }
    // Proceed with form submission
    console.log("Form submitted!")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Guest Email:", guestEmail)
    console.log("Selected options set 1:", selectedOptions1)
    console.log("Selected options set 2:", selectedOptions2)
    // Reset form fields
    setName("")
    setEmail("")
    setGuestEmail(false)
    setSelectedOptions1([])
    setSelectedOptions2([])
    setFormSubmitted(true)
  }

  return (
    <>
      <div>
        <nav className=" border border-solid flex items-center justify-between px-2 py-3">
          <div className="flex items-center">
            <h2 className=" text-[20px] flex lg:text-3xl">
              <a href="" className=" decoration-none font-bold">
                Fibery
              </a>
              <img src={logo} className=" h-4" alt="" />
            </h2>
            <p className="font-bold text-xs text-green-600 italic lg:text-lg">
              + AI Now
            </p>
          </div>
          <ul className="h-[100%] hidden">
            <li>Solutions</li>
            <li>Product</li>
            <li>Resources</li>
            <li>Pricing</li>
            <li>...</li>
          </ul>
          <ul className="flex items-center text-[11px] lg:text-[14px]">
            <li className="p-2 ">Log in</li>
            <li className="p-1">
              <button className="border-2 border-solid border-slate-900 py-[4px] px-[8px] rounded-sm active:bg-gray-300">
                Get a Demo
              </button>
            </li>
            <li className="pl-1">
              <button className=" bg-slate-900 rounded-sm text-white py-[6px] px-[10px]">
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
        <div className=" h-[100%] grid place-items-center w-[100%] mx-auto py-5 bg-zinc-200">
          <div className=" h-[100%]  border rounded-lg shadow-md flex overflow-hidden  w-[90%] bg-white lg:min-w-[40%] max-w-[80%]">
            <div className="p-2 relative w-[100%]">
              <div className="border-2 w-[135px] px-10 p-2  bg-slate-500 text-white rotate-45 outline-none border-none absolute top-[9px] right-[-35px]">
                <div className="text-[8px] m-0">Powered By</div>
                <div className="text-[12px] text-center tracking-20 m-0">
                  Calendy
                </div>
              </div>
              <div className="h-[3rem] flex items-center justify-center m-5 lg:h-20">
                <img src={logo} alt="there should be an " className=" h-full" />
              </div>
              <hr className="my-2" />

              {formSubmitted && (
                <>
                  <p className="text-center text-xl font-semibold">
                    <img src="" alt="" />{" "}
                    <TiTick className="inline h-fit w-fit  text-white bg-green-500 rounded-full mr-2" />
                    You are scheduled
                  </p>
                  <p className=" text-gray-600 text-sm text-center mt-2 mb-[8px] w-[100%]">
                    A calender invitation has been sent to your email address
                    Lorem ipsum dolor sit amet..
                  </p>
                  <div className="border-2 rounded-md p-3 text-sm flex flex-col gap-1 w-[90%] mx-auto text-gray-600 mb-4 lg:w-fit">
                    <p className=" text-base font-semibold text-black">
                      Fibery Demo
                    </p>
                    <p>
                      <IoPerson className="inline mr-2" />
                      Manjunatha Banda
                    </p>
                    <p>
                      <CiCalendar className="inline mr-2" />
                      {`${selectedTime} - ${selectedTime}`},{" "}
                      {getDayOfWeek(selectedDate)},{" "}
                      {getFormattedDate(selectedDate)}
                    </p>
                    <p>
                      <FaGlobeAfrica className="inline mr-1" /> IN, India,
                      Indian Standard Time
                    </p>
                    <p>
                      <IoIosVideocam className="inline mr-2" />
                      Web conferencing details to follow.
                    </p>
                  </div>
                  <hr className="my-7 border-[1.25px]" />
                  <div className=" lg:flex flex-col items-center">
                    <p className="text-sm font-semibold my-1">
                      Shedule your own meetings with Calendy for free
                    </p>
                    <p className="text-sm my-1">
                      Eliminate the back-and-fourth emails for finding time.
                    </p>
                    <div className="flex flex-col items-center gap-2 my-3 lg:flex-row w-[100%] justify-center">
                      <button className="border-[1.6px] border-black py-2 w-[80%]  rounded-3xl text-xs lg:py-3 lg:w-[20%]">
                        <FcGoogle className="inline text-sm" /> Signup up with
                        Google
                      </button>
                      <button className="border-[1.6px] border-black w-[80%]  rounded-3xl text-xs flex items-center justify-center gap-2 py-2 lg:py-3 lg:w-[20%]">
                        <img src={microsoft} alt="" className="h-4" />
                        Sign up with Microsoft
                      </button>
                    </div>
                    <p className="text-xs text-blue-600 cursor-pointer ">
                      Sign up with work email
                    </p>
                  </div>
                </>
              )}

              {!formSubmitted && (
                <div className="lg:flex justify-center gap-10">
                  <div className=" lg:w-[40%] flex flex-col items-center justify-center">
                    {selectedDate && selectedTime && !formSubmitted && (
                      <div className="flex justify-between items-center mb-2 lg:w-[100%]">
                        <button
                          className="text-sky-500 text-2xl font-extrabold px-3 py-1 rounded-md absolute left-0 mt-5 lg:top-[8rem]"
                          onClick={handleBack}
                        >
                          <GoArrowLeft />
                        </button>
                      </div>
                    )}
                    <h2 className=" text-[17px] font-bold text-center lg:mb-3 text-[25px]">
                      Fibery Demo
                    </h2>
                    <div className="flex items-center gap-1  text-xs justify-center text-gray-500 lg:text-sm mb-2">
                      <IoMdTime />
                      <p>45min</p>
                    </div>
                    <p className=" text-[11px] text-center lg:text-sm">
                      Book a meeting with our Fibery team. Talk to a real person
                      about how to get your processes set up with us or not
                    </p>
                  </div>
                  <div>
                    {showDatePicker ? (
                      <div className="my-4">
                        <p className="text-[14px] font-bold text-center lg:text-lg">
                          Select a Date & Time
                        </p>
                        <div className="flex justify-center m-2">
                          <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            placeholderText="Select a date"
                            dateFormat="dd/MM/yyyy"
                            popperPlacement="bottom"
                            inline
                            minDate={new Date()}
                            isClearable
                          />
                        </div>
                        <p className="text-[13px] text-center font-bold lg:text-sm">
                          Time zone
                        </p>
                        <div className="flex justify-center gap-2 lg:text-sm items-center">
                          <FaGlobeAfrica />
                          <p className="text-[12px] text-center">
                            IN, Indian Standard Time (16:54)
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="h-[100%] lg:grid place-items-center">
                        {!selectedTime && selectedDate && (
                          <div className=" lg:w-[100%]">
                            <div className="grid place-items-center">
                              {selectedDate && (
                                <div className="text-center d-[100%]">
                                  <p className="text-lg font-medium">
                                    {getDayOfWeek(selectedDate)}
                                  </p>
                                  <p className="px-2 py-1 rounded-md w-fit tracking-wide text-[13px] h-fit mx-2">
                                    {getFormattedDate(selectedDate)}
                                  </p>
                                </div>
                              )}
                            </div>

                            <p className="text-[16px] font-semibold text-center tracking-wide">
                              Select a Time
                            </p>
                            <div className="flex items-center gap-1 justify-center">
                              <IoMdTime />
                              <p>45min</p>
                            </div>
                            <div className="flex flex-col items-center justify-center m-2 h-fit">
                              <p className="w-[100%] lg:w-60">
                                {" "}
                                {renderTimeOptions()}
                              </p>
                            </div>
                          </div>
                        )}
                        {selectedTime && !showForm && (
                          <div className="flex items-center justify-center m-2 h-fit">
                            <button
                              className="px-3 py-2 rounded-md bg-sky-400 text-white font-bold hover:bg-sky-600 mr-2"
                              onClick={() => handleTimeSelection(null)}
                            >
                              {selectedTime}
                            </button>
                            <button
                              className="px-3 py-2 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-600"
                              onClick={handleNext}
                            >
                              Next
                            </button>
                          </div>
                        )}

                        {/* Display form if showForm is true */}
                        {showForm && !formSubmitted && (
                          <div className="lg:h-[70vh] overflow-auto w-[90%] py-3 pr-3">
                            <div className="text-gray-500 text-sm flex flex-col gap-2">
                              <div className="flex items-center gap-2">
                                <IoMdTime className=" text-xl" />
                                <p>45min</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <CiCalendar className="text-xl" />
                                <p>
                                  {`${selectedTime} - ${selectedTime}`},{" "}
                                  {getDayOfWeek(selectedDate)},{" "}
                                  {getFormattedDate(selectedDate)}
                                </p>
                              </div>
                              <div className="flex items-center gap-2 mb-2">
                                <FaGlobeAfrica className="text-lg" />
                                <p>Indian Standard Time</p>
                              </div>
                            </div>
                            <div className="inline flex items-center gap-2">
                              <FaPlay
                                className="text-blue-700"
                                htmlFor="play"
                                onClick={handleDescription}
                              />
                              <p
                                className="text-sm"
                                id="play"
                                onClick={handleDescription}
                              >
                                {" "}
                                Description
                              </p>
                            </div>
                            {showDescription && (
                              <p>
                                Book a meeting with a product expert. We've
                                helped hundreds of companies overcome product
                                management challenges.
                              </p>
                            )}
                            <hr className="my-4" />
                            {!formSubmitted && (
                              <form onSubmit={handleSubmit}>
                                <label
                                  htmlFor="inputName"
                                  className="block my-2"
                                >
                                  Name *
                                </label>
                                <input
                                  type="text"
                                  id="inputName"
                                  value={name}
                                  onChange={handleNameChange}
                                  className="block w-[100%] p-2 border-[1px] rounded-md border-slate-700 my-2 focus:border-sky-500"
                                />
                                <label
                                  htmlFor="inputEmail"
                                  className="block my-2"
                                >
                                  Email *
                                </label>
                                <input
                                  type="text"
                                  id="inputEmail"
                                  value={email}
                                  onChange={handleEmailChange}
                                  className="block w-[100%] p-2 border-[1px] rounded-md border-slate-700 my-2 focus:border-sky-500"
                                />
                                <label
                                  htmlFor="inputName"
                                  className="block my-2 cursor-pointer"
                                  onClick={handleGuestEmailChange}
                                >
                                  Guest Email(s)
                                </label>
                                {guestEmail && (
                                  <div>
                                    <input
                                      type="text"
                                      id="inputName"
                                      className="block w-[90%] p-2 border-[1px] rounded-md border-slate-700 my-2 focus:border-sky-500"
                                    />
                                    <p className=" text-xs">
                                      Notify up to 10 additional guests of the
                                      scheduled event.
                                    </p>
                                  </div>
                                )}
                                <div className="my-5">
                                  <p className="font-semibold mb-2">
                                    I want fibery to work for : *{" "}
                                  </p>
                                  <p className="flex items-center">
                                    <input
                                      type="checkbox"
                                      name=""
                                      id="select1"
                                      className="h-[18px] w-[16px] mr-2"
                                      value="myself"
                                      checked={selectedOptions1.includes(
                                        "myself",
                                      )}
                                      onChange={handleCheckboxChange1}
                                    />
                                    <label htmlFor="select1">🥕 Myself</label>
                                  </p>
                                  <p className="flex items-center">
                                    <input
                                      type="checkbox"
                                      name=""
                                      id="select2"
                                      className="h-[18px] w-[16px] mr-2"
                                      value="10people"
                                      checked={selectedOptions1.includes(
                                        "10people",
                                      )}
                                      onChange={handleCheckboxChange1}
                                    />
                                    <label htmlFor="select2">
                                      👩🏽‍🤝‍👩🏻 {"<10 "} people
                                    </label>
                                  </p>
                                  <p className="flex items-center">
                                    <input
                                      type="checkbox"
                                      name=""
                                      id="select3"
                                      className="h-[18px] w-[16px] mr-2"
                                      value="40people"
                                      checked={selectedOptions1.includes(
                                        "40people",
                                      )}
                                      onChange={handleCheckboxChange1}
                                    />
                                    <label htmlFor="select3">
                                      🦄 {"10-50 "} people
                                    </label>
                                  </p>
                                  <p className="flex items-center">
                                    <input
                                      type="checkbox"
                                      name=""
                                      id="select4"
                                      className="h-[18px] w-[16px] mr-2"
                                      value="50people"
                                      checked={selectedOptions1.includes(
                                        "50people",
                                      )}
                                      onChange={handleCheckboxChange1}
                                    />
                                    <label htmlFor="select4">
                                      🦅 50+ people
                                    </label>
                                  </p>
                                </div>
                                <div className="mb-5">
                                  <p className="font-semibold mb-2">
                                    Please, choose up to three options. You are
                                    more interested in: *
                                  </p>
                                  <p className="flex items-center">
                                    <input
                                      type="checkbox"
                                      name=""
                                      id="select5"
                                      className="h-[18px] w-[16px] mr-2"
                                      value="select5"
                                      checked={selectedOptions2.includes(
                                        "select5",
                                      )}
                                      onChange={handleCheckboxChange2}
                                    />
                                    <label htmlFor="select5">🗻 Strategy</label>
                                  </p>
                                  <p className="flex items-center">
                                    <input
                                      type="checkbox"
                                      name=""
                                      id="select6"
                                      className="h-[18px] w-[16px] mr-2"
                                      value="select6"
                                      checked={selectedOptions2.includes(
                                        "select6",
                                      )}
                                      onChange={handleCheckboxChange2}
                                    />
                                    <label htmlFor="select6">
                                      🌞 Product Management
                                    </label>
                                  </p>
                                  <p className="flex items-center">
                                    <input
                                      type="checkbox"
                                      name=""
                                      id="select7"
                                      className="h-[18px] w-[16px] mr-2"
                                      value="select7"
                                      checked={selectedOptions2.includes(
                                        "select7",
                                      )}
                                      onChange={handleCheckboxChange2}
                                    />
                                    <label htmlFor="select7">
                                      💻 {"10-50 "} Engineering
                                    </label>
                                  </p>
                                  <p className="flex items-center">
                                    <input
                                      type="checkbox"
                                      name=""
                                      id="select8"
                                      className="h-[18px] w-[16px] mr-2"
                                      value="select8"
                                      checked={selectedOptions2.includes(
                                        "select8",
                                      )}
                                      onChange={handleCheckboxChange2}
                                    />
                                    <label
                                      htmlFor="select8"
                                      className="m-0 p-0"
                                    >
                                      🎣 FeedBack Management
                                    </label>
                                  </p>
                                  <p className="flex items-center">
                                    <input
                                      type="checkbox"
                                      name=""
                                      id="select9"
                                      className="h-[18px] w-[16px] mr-2"
                                      value="select9"
                                      checked={selectedOptions2.includes(
                                        "select9",
                                      )}
                                      onChange={handleCheckboxChange2}
                                    />
                                    <label htmlFor="select9">
                                      ❓ Something Else
                                    </label>
                                  </p>
                                </div>
                                <div className="my-5">
                                  <p className="mb-2">
                                    Please, share anything that will help
                                    prepare for our meeting.
                                  </p>
                                  <textarea
                                    name=""
                                    id=""
                                    cols="40"
                                    rows="4"
                                    className="border border-black rounded-lg w-[100%] p-2"
                                  ></textarea>
                                </div>
                                <div className="my-2">
                                  <p className="mb-2">
                                    Please, share with us the name of your
                                    Fibery workspace (if any)
                                  </p>
                                  <textarea
                                    name=""
                                    id=""
                                    cols="40"
                                    rows="4"
                                    className="border border-black rounded-lg w-[100%] p-2"
                                  ></textarea>
                                </div>
                                <p className="text-sm my-6">
                                  By proceeding, you confirm that you have read
                                  and agree to{" "}
                                  <span className=" text-blue-600 cursor-pointer">
                                    Calendly's Terms of Use
                                  </span>{" "}
                                  and{" "}
                                  <span className="text-blue-600 cursor-pointer">
                                    Privacy Notice
                                  </span>
                                  .
                                </p>

                                <button
                                  className="bg-blue-500 text-white py-2 w-[100%] rounded-3xl mb-5"
                                  type="submit"
                                >
                                  Schedule Event
                                </button>
                              </form>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <a href="" className=" text-blue-700 text-[14px] block m-2">
                Cookies settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
