import { useState } from "react";
import { useFetchEmployeesAxios } from "../api/useFetchEmployeesAxios"; 
import { useAxiosCreateEmployee } from "../api/useAxiosCreateEmploye";
import { useAxiosDeleteEmployee } from "../api/useAxiosDeleteEmployee";
import { useAxiosEditEmployee } from "../api/useAxiosEditEmployee";
import Counter from "../components/Counter";

const EmployeesPageAxios = () => {
    const [input, setInput] = useState("");

    const {employees, employeesIsLoading, EmployeeError, fetchEmployee} = useFetchEmployeesAxios();
    const {createEmployeeLoading,createEmployeeError, createEmployee} = useAxiosCreateEmployee();
    const {editEmployeeLoading, editEmployeeError, editEmployee} =useAxiosEditEmployee();
    const {deleteEmployeeIsLoading, deleteEmployeeError, deleteEmployee} = useAxiosDeleteEmployee();
    const handelCreateEmployee = async () => {
        await createEmployee(input);
        await fetchEmployee();
        setInput("");
    }
    const handelDeleteEmployee = async (EmployeeId : string) => {
        await deleteEmployee(EmployeeId);
        await fetchEmployee();
    }

    const [editJobInputText, setEditJobInputText] = useState("");
    const [editInputText, setEditInputText] =useState("");
    const [sleectEmployeeId, setSelecEmployeeId] = useState("");
    const handelEditEmployee = async () => {
        if(editInputText && sleectEmployeeId || editJobInputText) {
            await editEmployee(sleectEmployeeId, {
                name: editInputText,
                job: editJobInputText,
            });
            await fetchEmployee();
            setSelecEmployeeId("");
            setEditInputText("");
            setEditJobInputText("");
        }    
    }
    
   
       return(
           <div>
               <h1>Ini Halaman Employee</h1>
               <table>
                   <thead>
                   <tr>
                       <td>Id</td>
                       <td>Name</td>
                       <td>Job</td>
                       <td>Action</td>
                       <td>Edit</td>
                   </tr>
                   </thead>
                   <tbody>
                
                   {
                       employees.map((employee) => {
                           return(
                               <tr key={employee.id}>
                                   <td>{employee.id}</td>
                                   <td>{employee.name}</td>
                                   <td>{employee.job}</td>
                                   <td>
                                    <button style={{margin:"4px"}}>edit</button><button onClick={() => handelDeleteEmployee(employee.id)}>delete</button>
                                    </td>
                                    <td>
                                        <input checked={employee.id === sleectEmployeeId} onChange={() => {
                                            setSelecEmployeeId(employee.id);
                                            setEditInputText(employee.name);
                                            setEditJobInputText(employee.job);
                                        }} type="radio" name="employee-edit" id="" />
                                    </td>
                               </tr>
                           )
                       })
                   }
                
                   </tbody>
                   <tfoot>
                        {/* create */}
                        <tr>
                            <td colSpan={2}>
                                <input onChange={(event) => setInput(event.target.value)} type="text" value={input} placeholder="create Name" />
                            </td>
                            <td colSpan={1}>
                                <button onClick={handelCreateEmployee}> create</button>
                            </td>
                        </tr>
                        {/* edit */}
                        <tr>
                            <td colSpan={2}>
                                <input onChange={(e) => setEditInputText(e.target.value)} type="text" value={editInputText} placeholder="edit name" />
                            </td>
                            <td colSpan={1}>
                                <input onChange={(e) => setEditJobInputText(e.target.value)} value={editJobInputText} type="text" placeholder=" edit job"  />
                            </td>
                            <td>
                                <button disabled={editEmployeeLoading || !sleectEmployeeId} onClick={handelEditEmployee}>Update</button>
                            </td>
                        </tr>
                   </tfoot>
               </table>
               <button disabled={employeesIsLoading} onClick={fetchEmployee}>Fetch Employees</button>
   
               <p>
                   {employeesIsLoading && "Loading..."}
                   {createEmployeeLoading && "Creating..."}
                   {deleteEmployeeIsLoading && "Deleting..."}
               </p>
               <p style={{color:"red"}}>
                   {EmployeeError && "Error cuyy"}
                   {createEmployeeError && "Error Create cuyy"}
                    {deleteEmployeeError && "Error Delete cuyy"}
                     {editEmployeeError && "Error Edit cuyy"}
               </p>
               <p style={{color:"blue"}}>
                     {editEmployeeLoading && "Editing..."}  
                    
               </p>
               <p>{sleectEmployeeId}</p>



                   <div>
                    <Counter></Counter>
                   </div>

           </div>
       )
}

export default EmployeesPageAxios;