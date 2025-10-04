import { useState } from "react";


type EmployeeRespons = {
    id: number;
    name: string;
}

export const useFetchEmployees = () => {
    const [employees, setEmployees] = useState<EmployeeRespons[]>([]);
    const [employeesIsLoading, setEmployeesIsLoading] = useState(false);
    const [EmployeeError, setEmployeeError] = useState("");
    const fetchEmployee = async() => {
        try{
            setEmployeesIsLoading(true);
            const request = await fetch("http://localhost:2000/employees", {
                method: "GET",
            });


            const response = (await request.json()) as EmployeeRespons[];

            setEmployees(response);
        }catch(error){
            setEmployeeError((error as TypeError).message);
            alert("gagal fetch data employee");
        }finally{
            setEmployeesIsLoading(false);
        }  
    }

    return {
        employees,
        employeesIsLoading,
        EmployeeError,
        fetchEmployee,
    }
}