// EditModal.js

import React from 'react';

function EditModal({ isOpen, onClose, formData, handleChange, handleSubmit }) {
  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Form</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="editFirstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="editFirstName" name="firstName" value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="editLastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="editLastName" name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="editAge" className="form-label">Age</label>
                <input type="text" className="form-control" id="editAge" name="age" value={formData.age} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="editGender" className="form-label">Gender</label>
                <input type="text" className="form-control" id="editGender" name="gender" value={formData.gender} onChange={handleChange} />
              </div>
              
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
