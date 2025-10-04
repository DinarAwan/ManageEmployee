import { useState } from "react";
import {axiosInstance} from "../lib/axios";

type EmployeeRespons = {
    id: string;
    name: string;
    job?: string;
}

export const useFetchEmployeesAxios = () => {
    const [employees, setEmployees] = useState<EmployeeRespons[]>([]);
    const [employeesIsLoading, setEmployeesIsLoading] = useState(false);
    const [EmployeeError, setEmployeeError] = useState("");
    const fetchEmployee = async() => {
        try{
            setEmployeesIsLoading(true);
            // const request = await fetch("http://localhost:2000/employees", {
            //     method: "GET",
            // });
            // const response = (await request.json()) as EmployeeRespons[];

            // setEmployees(response);

            const response = await axiosInstance.get<EmployeeRespons[]>("/employees");
            console.log(response.data);
            setEmployees(response.data);

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