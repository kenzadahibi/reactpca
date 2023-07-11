import React, { useState } from 'react';
import './Jobs.css';
import bcp from '../../assets/bcp.png';

const Jobs = () => {
  const [showModal, setShowModal] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cin: '',
    files: [],
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = event => {
    setFormData({ ...formData, files: event.target.files });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    setShowModal(null);
    setFormData({
      firstName: '',
      lastName: '',
      cin: '',
      files: [],
    });
  };

  const jobs = [
    {
      id: 1,
      title: 'Web Developer',
      description: 'We are looking for a skilled web developer to join our team.',
    },
    {
      id: 2,
      title: 'Graphic Designer',
      description: 'We are seeking a talented graphic designer to create visual concepts.',
    },
    {
      id: 3,
      title: 'Marketing Manager',
      description: 'We need a marketing manager to develop strategies.',
    },
  ];

  return (
    <div className="jobs-container">
      {jobs.map(job => (
        <div key={job.id} className="job-card">
          <div className="company-info">
          </div>
          <h2 className="text">{job.title}</h2>
          <p className="text2">{job.description}</p>
          <button className="apply-button" onClick={() => setShowModal(job.id)}>Apply Now</button>
          {showModal === job.id && (
            <div className="modal-container">
              <div className="modal">
                <div className="modal-header">
                  <h2>Apply for {job.title}</h2>
                  <span className="close-button" onClick={() => setShowModal(null)}>×</span>
                </div>
                <form onSubmit={handleSubmit}>
                  <label>
                    First Name:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                  </label>
                  <label>
                    Last Name:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                  </label>
                  <label>
                    CIN:
                    <input type="text" name="cin" value={formData.cin} onChange={handleInputChange} required />
                  </label>
                  <label>
                    Files:
                    <input type="file" name="files" multiple onChange={handleFileChange} />
                  </label>
                  {formData.files.length > 0 && (
                    <ul>
                      {Array.from(formData.files).map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  )}
                  <button type="submit" className="submit-button">Deposer les fichiers</button>
                </form>
              </div>
              <span className="close-button" onClick={() => setShowModal(null)}>×</span> {/* Ajouter le bouton de fermeture ici */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Jobs;