import Button3 from "./Button3.jsx"

function Card({ cardText, buttonText, handleClick }) {
    return (
        <>
    <h2>{cardText}</h2>
    <Button3 handleClick={handleClick} text={buttonText}/>
    </>

    )
}

export default Card;

/*Notes:
1. Heard this many times so far: can only render a single element from a function; no siblings.  It finally 
   sank in to use the React Fragment <></> to get around this rule!  The instructions say we need to render 
   2 elements here.
*/