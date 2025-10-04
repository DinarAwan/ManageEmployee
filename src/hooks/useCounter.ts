import { useEffect, useState } from "react";
export const useCounter = () => {
    const [count, setCount] = useState(0);

    const hendelTambah = () => {

        setCount(count + 1);
    }
    const hendelKurang = () => {
        setCount(count - 1);
        if(count <= 0){
            setCount(0);
        }
    }
    const hendelReset = () =>{
        alert("reset");
        setCount(0);
    }

    useEffect( () => {
        setCount(1);
    }, [])


    return({count, hendelTambah, hendelKurang, hendelReset})
}

