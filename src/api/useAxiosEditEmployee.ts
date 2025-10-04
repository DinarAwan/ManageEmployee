import { useState } from "react"
import { axiosInstance } from "../lib/axios"

export const useAxiosEditEmployee = () => {
    const [editEmployeeLoading, setEditEmployeLoading] = useState(false);
    const [editEmployeeError, setEditEmployeeError] = useState("");
    const editEmployee = async ( employeeId : string, payload : {
        name?: string;
        job?: string;
    }) => {
        try {
            setEditEmployeLoading(true);
            await axiosInstance.patch(`/employees/${employeeId}`, {
                name : payload.name ? payload.name : undefined,
                job : payload.job ? payload.job : undefined 
            })   
        } catch (error) {
            setEditEmployeeError((error as TypeError).message);
        } finally{
            setEditEmployeLoading(false);
        }

    }

    return{
        editEmployeeLoading,
        editEmployeeError,
        editEmployee,
    }
}