import { useFetchEmployees } from "../api/useFetchEmployees"; 

const EmployeesPage = () => {
    const {employees, employeesIsLoading, EmployeeError, fetchEmployee} = useFetchEmployees();
    return(
        <div>
            <h1>Ini Halaman Employee</h1>
            <table>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
             
                {
                    employees.map((employee) => {
                        return(
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                            </tr>
                        )
                    })
                }
             
                </tbody>
            </table>
            <button disabled={employeesIsLoading} onClick={fetchEmployee}>Fetch Employees</button>

            <p>
                {employeesIsLoading && "Loading..."}
            </p>
            <p style={{color:"red"}}>
                {EmployeeError && "Error cuyy"}
            </p>
        </div>
    )
}

export default EmployeesPage;