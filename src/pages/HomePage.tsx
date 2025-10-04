import { use } from "react";
import { Link, Navigate, useNavigate } from "react-router";

function HomePage(){
    const navigate = useNavigate();

    const HandelButtonNavigationToTerms = () => {
        navigate({
            pathname: "/terms"
        })
    }

    return (
        <div>
            <h1>Home Page</h1>
            <a href="/terms">Menuju Terms</a>
            <br />
            <Link to={"/terms"}>Menuju Terms dengan Link</Link>
            <br />
            <button onClick={HandelButtonNavigationToTerms}>Terms</button>
        </div>
    );
}

export default HomePage;