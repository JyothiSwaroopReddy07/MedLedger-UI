import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CaseForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('');
  const [text, setText] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  
  return (
    <div className='mx-auto max-w-2xl'>
        <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Case Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Please enter the details of your case</p>
            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  User Id
                </label>
                <div className="mt-2">
                  <input
                    id="userId"
                    name="userId"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Supervisor Id
                </label>
                <div className="mt-2">
                  <input
                    id="supervisorId"
                    name="supervisorId"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Case ID
                </label>
                <div className="mt-2">
                  <input
                    id="caseId"
                    name="CaseId"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="date-picker" className="block text-sm font-medium leading-6 text-gray-900">Case Date</label>
                <div className='mt-2'>
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
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Patient Age
                </label>
                <div className="mt-2">
                  <input
                    id="caseId"
                    name="CaseId"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Supervisor Name
                </label>
                <div className="mt-2">
                  <select
                    id="supervisorName"
                    name="supervisorName"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Resident Year
                </label>
                <div className="mt-2">
                  <select
                    id="residentYear"
                    name="residentYear"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="block sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Emergency Level
                </label>
                <span className='flex mx-auto mt-3'>
                  <label className='me-5 flex-auto'>
                    <input
                      className='me-1'
                      type="radio"
                      value="Option 1"
                      checked={selectedOption === 'Option 1'}
                      onChange={handleOptionChange}
                    />
                    1
                  </label>
                  <br />
                  <span className='me-5 flex-auto'>
                    <label className="inline">
                      <input
                        className='me-1'
                        type="radio"
                        value="Option 2"
                        checked={selectedOption === 'Option 2'}
                        onChange={handleOptionChange}
                      />
                      2
                    </label>
                  </span>
                  
                  <br />
                  <label className='me-5 flex-auto'>
                    <input
                      className='me-1'
                      type="radio"
                      value="Option 3"
                      checked={selectedOption === 'Option 3'}
                      onChange={handleOptionChange}
                    />
                    3
                  </label>
                  <br />
                  <label className='me-5 flex-auto'>
                    <input
                      className='me-1'
                      type="radio"
                      value="Option 4"
                      checked={selectedOption === 'Option 4'}
                      onChange={handleOptionChange}
                    />
                    4
                  </label>
                </span >
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Procedure Type
                </label>
                <div className="mt-2">
                  <select
                    id="procedureType"
                    name="procedureType"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className='sm:col-span-6'>
                <h3 className="block text-sm font-medium leading-6 text-gray-900">Description</h3>
                <textarea
                  rows="5"
                  cols="40"
                  placeholder="Type here..."
                  value={text}
                  onChange={handleTextChange}
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
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>

    
  )
}

export default CaseForm
