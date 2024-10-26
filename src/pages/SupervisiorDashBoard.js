import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from '../Context/StateContext';
import NavBar from "../components/NavBar";

const dummyCases = [
  {
    caseId: 1,
    userId: 101,
    supervisorId: 201,
    superVisorName: "Dr. John Doe",
    caseDate: "2024-10-20",
    patientAge: 45,
    residentYear: "Year 2",
    emergencyLevel: "Moderate",
    procedureType: "Anesthesia",
    description: "Patient required anesthesia for minor surgery.",
    dataHash: "abcd1234",
    status: "PENDING",
    createdAt: "2024-10-01T10:00:00Z",
    updatedAt: "2024-10-02T10:00:00Z",
  },
  {
    caseId: 2,
    userId: 102,
    supervisorId: 202,
    superVisorName: "Dr. Sarah Lee",
    caseDate: "2024-09-18",
    patientAge: 37,
    residentYear: "Year 3",
    emergencyLevel: "High",
    procedureType: "Laryngoscopy",
    description: "Emergency laryngoscopy procedure for respiratory issue.",
    dataHash: "efgh5678",
    status: "APPROVED",
    createdAt: "2024-09-15T12:30:00Z",
    updatedAt: "2024-09-18T12:30:00Z",
  },
  {
    caseId: 3,
    userId: 103,
    supervisorId: 203,
    superVisorName: "Dr. Alice Kim",
    caseDate: "2024-08-22",
    patientAge: 52,
    residentYear: "Year 4",
    emergencyLevel: "Low",
    procedureType: "Nasal ETT",
    description: "Nasal endotracheal tube insertion for scheduled surgery.",
    dataHash: "ijkl9101",
    status: "REJECTED",
    createdAt: "2024-08-20T15:45:00Z",
    updatedAt: "2024-08-22T15:45:00Z",
  },
  {
    caseId: 4,
    userId: 104,
    supervisorId: 204,
    superVisorName: "Dr. Mike Johnson",
    caseDate: "2024-10-12",
    patientAge: 29,
    residentYear: "Year 1",
    emergencyLevel: "Very High",
    procedureType: "Oral ETT",
    description: "Oral endotracheal tube for critical care.",
    dataHash: "mnop1121",
    status: "PENDING",
    createdAt: "2024-10-10T08:20:00Z",
    updatedAt: "2024-10-12T08:20:00Z",
  },
  {
    caseId: 5,
    userId: 105,
    supervisorId: 205,
    superVisorName: "Dr. Emma Watson",
    caseDate: "2024-07-30",
    patientAge: 62,
    residentYear: "Year 5",
    emergencyLevel: "Moderate",
    procedureType: "Anesthesia",
    description: "Routine anesthesia for outpatient surgery.",
    dataHash: "qrst3345",
    status: "APPROVED",
    createdAt: "2024-07-28T09:00:00Z",
    updatedAt: "2024-07-30T09:00:00Z",
  }
];



const SupervisiorDashBoard = () => {
  const { user } = useAppContext(); // Get user from context
  const [cases, setCases] = useState(dummyCases); // Store all cases data
  const [selectedCase, setSelectedCase] = useState(null); // Store the selected case for the modal
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [approving, setApproving] = useState(false); // Loader state for Approve Case button

  useEffect(() => {
    const fetchCases = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/cases/supervisor/${user.id}`);
        setCases(response.data); // Assuming the response is an array of case objects
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cases:', error);
        setLoading(false);
      }
    };

    if (user) {
      fetchCases();
    }
  }, [user]);

  // Open modal and set selected case details
  const openModal = (caseItem) => {
    setSelectedCase(caseItem);
    setModalOpen(true);
  };

  // Close modal and clear selected case
  const closeModal = () => {
    setModalOpen(false);
    setSelectedCase(null);
  };

  // Approve case function
  const approveCase = async () => {
    setApproving(true); // Show loader
    try {
      const response = await axios.put(`http://localhost:8080/cases/${selectedCase.caseId}/approve`);
      if (response.status === 200) {
        // Update case status in frontend
        setSelectedCase({ ...selectedCase, status: 'APPROVED' });
        // Optionally update the cases list as well
        setCases(cases.map(caseItem => caseItem.caseId === selectedCase.caseId ? { ...caseItem, status: 'APPROVED' } : caseItem));
        alert('Case approved successfully.');
      }
    } catch (error) {
      console.error('Error approving case:', error);
      alert('Failed to approve case.');
    }
    setApproving(false); // Hide loader after response
  };

  return (
    <>
      <NavBar/>
    <div className="flex flex-col h-screen w-screen bg-gold p-4">
      <h2 className="text-4xl font-extrabold text-gray-700 mb-10"> My Cases</h2>
      <div className="flex justify-center items-center">
      {loading ? (
        <p className="text-gray-600 text-lg">Loading cases...</p>
      ) : cases.length > 0 ? (
        <ul className="w-full lg:w-2/3 p-6 space-y-4">
          {cases.map((caseItem) => (
            <li
              key={caseItem.caseId}
              onClick={() => openModal(caseItem)}
              className="flex justify-between items-center text-gray-700 font-semibold cursor-pointer p-4 shadow-lg bg-white rounded-md hover:bg-gray-100 transition duration-200"
            >
              <span>Case ID: {caseItem.caseId}</span>
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${caseItem.status === 'APPROVED' ? 'bg-green-100 text-green-600' : caseItem.status === 'REJECTED' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                {caseItem.status}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No cases assigned yet.</p>
      )}
      </div>

      {/* Modal */}
      {modalOpen && selectedCase && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-lg shadow-2xl max-w-2xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold leading-7 text-gray-900 mb-8">Case Information</h2>
            <p className="mb-6 text-sm leading-6 text-gray-600">
              Details of the selected case.
            </p>
    
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium leading-6 text-gray-900">User ID</label>
                <p className="text-gray-700">{selectedCase.userId}</p>
              </div>
    
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium leading-6 text-gray-900">Supervisor Name</label>
                <p className="text-gray-700">{selectedCase.superVisorName}</p>
              </div>
    
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium leading-6 text-gray-900">Case ID</label>
                <p className="text-gray-700">{selectedCase.caseId}</p>
              </div>
    
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium leading-6 text-gray-900">Case Date</label>
                <p className="text-gray-700">{new Date(selectedCase.caseDate).toLocaleDateString()}</p>
              </div>
    
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium leading-6 text-gray-900">Patient Age</label>
                <p className="text-gray-700">{selectedCase.patientAge}</p>
              </div>
    
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium leading-6 text-gray-900">Resident Year</label>
                <p className="text-gray-700">{selectedCase.residentYear}</p>
              </div>
    
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium leading-6 text-gray-900">Emergency Level</label>
                <p className="text-gray-700">{selectedCase.emergencyLevel}</p>
              </div>
    
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium leading-6 text-gray-900">Procedure Type</label>
                <p className="text-gray-700">{selectedCase.procedureType}</p>
              </div>
    
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                <p className="text-gray-700">{selectedCase.description}</p>
              </div>
    
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">Status</label>
                <p className={`text-gray-700 font-semibold ${selectedCase.status === 'APPROVED' ? 'text-green-600' : selectedCase.status === 'REJECTED' ? 'text-red-600' : 'text-yellow-600'}`}>
                  {selectedCase.status}
                </p>
              </div>
            </div>
    
            {/* Approve Button with Loader */}
            {selectedCase.status === 'PENDING' && (
              <div className="mt-6 flex items-center justify-end">
                <button
                  onClick={approveCase}
                  disabled={approving}
                  className={`mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200 font-bold flex justify-center items-center ${approving ? 'opacity-70' : ''}`}
                >
                  {approving ? (
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2z" className="opacity-75" />
                    </svg>
                  ) : null}
                  {approving ? 'Approving...' : 'Approve Case'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
  
};

export default SupervisiorDashBoard;
