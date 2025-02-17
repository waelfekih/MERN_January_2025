import React, {useState}  from "react";


function PuttingItTogether(props) {

    const { firstName, lastName, hairColor } = props;
    const [age, setAge] = useState(Number(props.age));
    const handleSubmit = (eventAge) => {
        eventAge.preventDefault();
        setAge(age + 1);
    };

    return (
        <div>
            <h3>{firstName} , {lastName}</h3> <br />
            <p>Age : {age}</p> <br />
            <p>Hair Color : {hairColor}</p> <br />

            <form onSubmit={handleSubmit}>
                <button type="submit">Birthday Button for {firstName} {lastName}</button>
            </form>



        </div>
    );
}

export default PuttingItTogether