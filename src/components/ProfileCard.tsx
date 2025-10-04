type ProfileCardProps = {
     job?: string;
    name?: string;
    year: number;
   
};

const ProfileCard = (props:ProfileCardProps) => {
    const {name = "Anonymus", year, job} = props;
    return(
        <div className="card">
             {location ? <p>job : {job}</p> : null }
            <p>Name : {name}</p>
            <p>year : {year}</p>
           
            
        </div>
        
    )
}

export default ProfileCard;