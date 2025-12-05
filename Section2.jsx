import Header2 from "./Header2.jsx";
import Button2 from "./Button2.jsx";


function Section2() {

    function handleClick() {
        console.log("Woof!");
    }

    return (
        <>  
        <Header2 text="Exercise 2"/>
        <Button2 text="Click Me!" handleClick={handleClick} />
        
        </>
    );
}

export default Section2;

/*Notes:
1. Writing messages and event listener function in this file. 
2. Functions can get passed around as props because behind the scenes, they are just objects in JS. Primitive
   data types (strings, numbers, arrays, null, etc) and objects are considered 1st class data.
3. One thing with using this method is to make sure not to put () in {handleClick}. It will call the function
   immediately and trigger an error, even though user did not click the button.
4. Another possible point of confusion is naming the prop and the event listener function by the same name.
*/