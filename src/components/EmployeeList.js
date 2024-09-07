import React from 'react';

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    // Method to fetch data
    componentDidMount() {
        this.setState({
            employees: [
                { id: 1, name: 'Patrick Starr', role: 'Developer' },
                { id: 2, name: 'Peach Rainbow', role: 'Designer' }
            ]
        });
    }

    render() {
        return (
            <div>
                <h1>Employee List</h1>
                <ul>
                    {this.state.employees.map(employee => (
                        <li key={employee.id}>{employee.name} - {employee.role}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default EmployeeList;
