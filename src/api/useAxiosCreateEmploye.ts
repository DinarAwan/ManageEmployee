import { useState } from "react";
import {axiosInstance} from "../lib/axios";

export const useAxiosCreateEmployee = () => {
    const [createEmployeeLoading, setCreateEmloyeeLoading] = useState(false);
    const [createEmployeeError, setCreateEmloyeeError] = useState("");
    const createEmployee = async (payload : string) => {
 
        try {
            setCreateEmloyeeLoading(true);
            await axiosInstance.post("/employees",{
                name: payload,
            })
   
        } catch (error) {
            setCreateEmloyeeError((error as TypeError).message);
        } finally{
            setCreateEmloyeeLoading(false);
        }

    }
    return {
        createEmployeeLoading,
        createEmployeeError,
        createEmployee,
    }
}