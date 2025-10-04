import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useAxiosDeleteEmployee = () => {
    const [deleteEmployeeIsLoading, setDeleteEmployeeIsLoading] = useState(false);
    const [deleteEmployeeError, setDeleteEmployeeError] = useState("");
    const deleteEmployee = async (EmployeeId : string) => {
        try {
            setDeleteEmployeeIsLoading(true);
            await axiosInstance.delete(`/employees/${EmployeeId}`);
        } catch (error) {
            setDeleteEmployeeError((error as TypeError).message);
        } finally{
            setDeleteEmployeeIsLoading(false);
        }
    }

    return {
        deleteEmployeeIsLoading,
        deleteEmployeeError,
        deleteEmployee,
    }
}