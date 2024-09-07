import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeFormFunctional from './components/EmployeeFormFunctional';
import EmployeeList from './components/EmployeeList'; // Import the EmployeeList component

function App() {
  return (
    <div className="App">
      <h1>Employee Form - Class Component</h1>
      <EmployeeForm />
      <h1>Employee Form - Functional Component</h1>
      <EmployeeFormFunctional />
      <h1>Employee List</h1> // Additional header for employee list
      <EmployeeList /> // Insert the EmployeeList component to display the list
    </div>
  );
}

export default App;
