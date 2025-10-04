import {useCounter} from "../hooks/useCounter";

const Counter = () => {
    const {count, hendelTambah, hendelKurang, hendelReset} = useCounter();

    

    return (
        <div style={{display: "flex", gap: "10px", alignItems: "center",}}>
            <button onClick={hendelTambah}>tambah</button>
            <p>{count}</p>
            <button onClick={hendelKurang}>Kurang</button>
            <button onClick={hendelReset}>Reset</button>
        </div>
    )
}

export default Counter;