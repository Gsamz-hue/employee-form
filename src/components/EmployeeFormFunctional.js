import React, { useState } from 'react';

function EmployeeFormFunctional() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const employeeData = {
            name,
            email,
            jobTitle,
            department
        };
        console.log('Employee Data:', employeeData);
        localStorage.setItem('employeeData', JSON.stringify(employeeData));
        alert('Employee Data Saved!');
        // Clear the form after submission
        setName('');
        setEmail('');
        setJobTitle('');
        setDepartment('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Job Title:</label>
                <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Department:</label>
                <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default EmployeeFormFunctional;
