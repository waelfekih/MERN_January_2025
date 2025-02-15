//import React  from "react";

const PersonCard = (props) => {

        const {firstName, lastName, age, hairColor } = props ;

    return (

        <><div>
            <div>
                <h3>{firstName} , {lastName}</h3>
            </div>
            Age : {age}
            <br />
            Hair Color : {hairColor}
        </div><br /></>
    )

}

export default PersonCard
