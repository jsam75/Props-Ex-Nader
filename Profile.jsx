import Card from "./Card.jsx"

function Profile ({ profileText, cardText, buttonText, handleClick }) {
    return (
        <>    
            <h1>{profileText}</h1>
            <Card 
                cardText={cardText}
                buttonText={buttonText}
                handleClick={handleClick}
                />
        </>
    )
}

export default Profile;

/*Notes:
1. The purpose of this exercise is Props Drilling.  (Going from bottom to top) Starting with Button3 to Card to Profile.  Profile is
   what will capture all the components and be added to the App.jsx file (think of it as a face sheet).
   Props Drilling by definition starts with an upper node and drills down to lower/bottom nodes.
            App.jsx --> Profile(<h1>) --> Card(<h2>) --> Button3(<text>)
   Props come from App.jsx (upper node) and be passed/drilled down the line to Button3.
*/