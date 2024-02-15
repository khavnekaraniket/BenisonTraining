
import '../css/style.css'
import React, { useState } from 'react';
import EditModal from './EditModal'; 

function Registration() {
  // Initial data, stored in local variable 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    contactNo: '',
    country: '',
    state: '',
    city: '',
    address: '',
    agree: false
  });

  
  const [validationMessages, setValidationMessages] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    contactNo: '',
    country: '',
    state: '',
    city: '',
    address: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({ ...formData });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

  // Validate each field
  const newValidationMessages = { ...validationMessages };
  let isValid = true;
    
    if (!formData.firstName) {
      newValidationMessages.firstName = 'Please enter first name';
      isValid = false;
    } else {
      newValidationMessages.firstName = '';
    }

    
    if (!formData.lastName) {
      newValidationMessages.lastName = 'Please enter last name';
      isValid = false;
    } else {
      newValidationMessages.lastName = '';
    }

    
    if (!formData.age) {
      newValidationMessages.age = 'Please enter age';
      isValid = false;
    } else if (isNaN(formData.age) || parseInt(formData.age) <= 0 || parseInt(formData.age) > 100) {
      newValidationMessages.age = 'Please enter a valid age between 1 and 100';
      isValid = false;
    } else {
      newValidationMessages.age = '';
    }

    
    if (!formData.gender) {
      newValidationMessages.gender = 'Please select gender';
      isValid = false;
    } else {
      newValidationMessages.gender = '';
    }

    
    if (!formData.contactNo) {
      newValidationMessages.contactNo = 'Please enter contact number';
      isValid = false;
    } else if (!validatePhoneNumber(formData.contactNo)) {
      newValidationMessages.contactNo = 'Please enter a valid 10-digit contact number';
      isValid = false;
    } else {
      newValidationMessages.contactNo = '';
    }

   
    if (!formData.country) {
      newValidationMessages.country = 'Please enter country';
      isValid = false;
    } else {
      newValidationMessages.country = '';
    }

    
    if (!formData.state) {
      newValidationMessages.state = 'Please enter state';
      isValid = false;
    } else {
      newValidationMessages.state = '';
    }

    
    if (!formData.city) {
      newValidationMessages.city = 'Please enter city';
      isValid = false;
    } else {
      newValidationMessages.city = '';
    }

    
    if (!formData.address) {
      newValidationMessages.address = 'Please enter address';
      isValid = false;
    } else {
      newValidationMessages.address = '';
    }

    
    if (!isValid) {
      setValidationMessages(newValidationMessages);
      return;
    }

    
    if (editIndex !== null) {
      const updatedData = [...tableData];
      updatedData[editIndex] = editFormData;
      setTableData(updatedData);
      setEditIndex(null);
    } else {
      setTableData([...tableData, { ...formData }]);
    }
    setSubmitted(true);
    setIsEditModalOpen(false); 
    setValidationMessages({}); // Clear validation messages
  setSubmitted(true);
  setIsEditModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditFormData(tableData[index]);
    setIsEditModalOpen(true); 
  };

  const handleDelete = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };
  // to handal clear
  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      contactNo: '',
      country: '',
      state: '',
      city: '',
      address: '',
      agree: false
    });
    
  };
  const [tableData, setTableData] = useState([]);

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phoneNumber);
  };

  return (
    // <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f4f4f1' }}>
    //   <div className="registration-wrapper" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '60%' }}>
    //     <h1 className="text-center mb-4" style={{ color: '#333' }}>Registration page</h1>
    //     <form className="needs-validation registration-form" noValidate onSubmit={handleSubmit}>
    <div className="container d-flex  flex-wrap" style={{ minHeight: '100vh', backgroundColor: '#f4f4f1' }}>
      <div className="registration-wrapper" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '60%' }}>
        <h1 className="text-center mb-4" style={{ color: '#333' }}>Registration page</h1>
        <form className="needs-validation registration-form" noValidate onSubmit={handleSubmit}>
          
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="validationCustom01" className="form-label">First name</label>
                <input type="text" className="form-control" id="validationCustom01" name="firstName" value={formData.firstName} onChange={handleChange} required />
                {validationMessages.firstName && <div className="text-danger">{validationMessages.firstName}</div>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="validationCustom02" className="form-label">Last name</label>
                <input type="text" className="form-control" id="validationCustom02" name="lastName" value={formData.lastName} onChange={handleChange} required />
                {validationMessages.lastName && <div className="text-danger">{validationMessages.lastName}</div>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="validationCustom03" className="form-label">Age</label>
                <input type="number" className="form-control" id="validationCustom03" name="age" value={formData.age} onChange={handleChange} required />
                {validationMessages.age && <div className="text-danger">{validationMessages.age}</div>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Gender</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={formData.gender === "male"} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={formData.gender === "female"} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                  {/* <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="transgender" value="transgender" checked={formData.gender === "transgender"} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="transgender">
                      Transgender
                    </label>
                  </div> */}
                </div>
                {validationMessages.gender && <div className="text-danger">{validationMessages.gender}</div>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="validationCustom04" className="form-label">Contact No</label>
                <input type="text" className="form-control" id="validationCustom04" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
                {validationMessages.contactNo && <div className="text-danger">{validationMessages.contactNo}</div>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="validationCustom05" className="form-label">Country</label>
                <input type="text" className="form-control" id="validationCustom05" name="country" value={formData.country} onChange={handleChange} required />
                {validationMessages.country && <div className="text-danger">{validationMessages.country}</div>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="validationCustom06" className="form-label">State</label>
                <input type="text" className="form-control" id="validationCustom06" name="state" value={formData.state} onChange={handleChange} required />
                {validationMessages.state && <div className="text-danger">{validationMessages.state}</div>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="validationCustom07" className="form-label">City</label>
                <input type="text" className="form-control" id="validationCustom07" name="city" value={formData.city} onChange={handleChange} required />
                {validationMessages.city && <div className="text-danger">{validationMessages.city}</div>}
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="validationCustom08" className="form-label">Address</label>
                <input type="text" className="form-control" id="validationCustom08" name="address" value={formData.address} onChange={handleChange} required />
                {validationMessages.address && <div className="text-danger">{validationMessages.address}</div>}
              </div>
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <button className="btn btn-primary btn-sm" type="submit">Submit form</button>
            <button className="btn btn-secondary btn-sm" type="clear" onClick={handleClear}>Clear</button>
          </div>
        </form>
      </div>
      {submitted && (
        <div className='dataSub'>
          <h2>Form Data:</h2>
          <table className="table">
            <thead>
              <tr>
                <th>SNo</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Contact No</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>Address</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.age}</td>
                  <td>{data.gender}</td>
                  <td>{data.contactNo}</td>
                  <td>{data.country}</td>
                  <td>{data.state}</td>
                  <td>{data.city}</td>
                  <td>{data.address}</td>
                  <td>

                    <div className='editDelete'>
                    <button className="btn btn-primary"  onClick={() => handleEdit(index)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        formData={editFormData}
        handleChange={(e) => setEditFormData({ ...editFormData, [e.target.name]: e.target.value })}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Registration;


