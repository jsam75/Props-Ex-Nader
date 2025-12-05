function Button2 (props) {
    
    return <button onClick ={props.handleClick}>{props.text}</button>
}

export default Button2;

/*Notes:
1. Passing event listener function handleClick as a prop in this exercise. This demonstrates that 
   props can be something other than strings.
2. Using props forces us to use props. making code messy fast.  To employ Method 3 do the following:
   function Button2 ({ handleClick, text }) {
   return <button onClick={handleClick}>{text}</button>; }
*/