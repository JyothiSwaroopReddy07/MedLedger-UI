import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const CaseForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [text, setText] = useState('');
  const [userId, setUserId] = useState('');
  const [caseId, setCaseId] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [residentYear, setResidentYear] = useState('');
  const [procedureType, setProcedureType] = useState('');
  const [superVisors, setSuperVisors] = useState([]);
  const [supervisorId, setSupervisorId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSupervisors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/users/supervisors');
        setSuperVisors(response.data);
      } catch (error) {
        console.error('Error fetching supervisors:', error);
      }
    };

    fetchSupervisors();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Collect form data
    const formData = {
      userId,
      supervisorId,
      caseId,
      caseDate: startDate.toISOString().split('T')[0], // Format date as YYYY-MM-DD
      patientAge,
      superVisorName: supervisorId, // This will be passed as the selected supervisor's ID
      residentYear,
      emergencyLevel: selectedOption,
      procedureType,
      description: text,
    };

    try {
      const response = await axios.post('http://localhost:8080/cases/log', formData);
      setMessage('Case logged successfully!');
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error logging case:', error);
      setMessage('Failed to log the case.');
      setIsSubmitting(false);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="h-screen w-screen bg-gold flex items-center justify-center">
      <form className="w-2/3" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Case Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Please enter the details of your case</p>
            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="userId" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                  User Id
                </label>
                <div className="mt-2">
                  <input
                    id="userId"
                    name="userId"
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="supervisorId" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                  Supervisor Name
                </label>
                <div className="mt-2">
                  <select
                    id="supervisorId"
                    name="supervisorId"
                    value={supervisorId}
                    onChange={(e) => setSupervisorId(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="">Select a supervisor</option>
                    {superVisors.map((supervisor) => (
                      <option key={supervisor.id} value={supervisor.id}>
                        {supervisor.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="caseId" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                  Case ID
                </label>
                <div className="mt-2">
                  <input
                    id="caseId"
                    name="CaseId"
                    type="text"
                    value={caseId}
                    onChange={(e) => setCaseId(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="date-picker" className="block text-sm font-medium leading-6 text-gray-900">Case Date</label>
                <div className="mt-2">
                  <DatePicker
                    value={startDate.toDateString()}
                    onChange={(date) => setStartDate(date)}
                    selected={startDate}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    dateFormat="MM/dd/yyyy"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="patientAge" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                  Patient Age
                </label>
                <div className="mt-2">
                  <input
                    id="patientAge"
                    name="patientAge"
                    type="text"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="residentYear" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                  Resident Year
                </label>
                <div className="mt-2">
                  <select
                    id="residentYear"
                    name="residentYear"
                    value={residentYear}
                    onChange={(e) => setResidentYear(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="">Select a year</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              <div className="block sm:col-span-3">
                <label htmlFor="emergencyLevel" className="block text-sm font-medium leading-6 text-gray-900">
                  Emergency Level
                </label>
                <span className="flex mx-auto mt-3">
                  {["Low", "Moderate", "High", "Very High"].map((level) => (
                    <label key={level} className="me-5 flex-auto font-light italic">
                      <input
                        className="me-1"
                        type="radio"
                        value={level}
                        checked={selectedOption === level}
                        onChange={handleOptionChange}
                      />
                      {level}
                    </label>
                  ))}
                </span>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="procedureType" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                  Procedure Type
                </label>
                <div className="mt-2">
                  <select
                    id="procedureType"
                    name="procedureType"
                    value={procedureType}
                    onChange={(e) => setProcedureType(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select a procedure</option>
                    <option>Anesthesia</option>
                    <option>Laryngoscopes</option>
                    <option>Nasal ETT</option>
                    <option>Oral ETT</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-6">
                <h3 className="block text-sm font-medium leading-6 text-gray-900 text-left">Description</h3>
                <textarea
                  rows="5"
                  cols="40"
                  placeholder="Type here..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            diabled={isSubmitting}
            className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Case'}
          </button>
        </div>

        {message && <p className="text-center mt-4 text-green-500">{message}</p>}
      </form>
    </div>
  );
};

export default CaseForm;
