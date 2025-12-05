import Header1 from "./Header1.jsx";
import Paragraph1 from "./Paragraph1.jsx";

function Section1() {

    return (
        <>  
        <Header1 text="Exercise 1"/>
        <Paragraph1 text="I love dogs!"/>
        </>
    );
}

export default Section1;

/*Notes:
1. Importing 2 components to Section.jsx.  Helps keep the App.jsx file clean.
2. This is the 1st exercise using props, a reserved word in React.  It automatically becomes an object.
3. In the actual component file, (props) and {props.text} are used in the functions to keep it dynamic.  
   In the Section.jsx file is where we can write the actual message.  This convention makes it easier to keep
   all possible changes limited to one file.  Otherwise, it would be very difficult to hard code in all files.
4. The messages appear in code that looks very similar to HTML attributes, but this is JSX.  Time and practice
   will make this feel more natural.
5. It is possible to use the same file names in different folders (ex: I could've used Paragraph.jsx again), but I 
   wanted to number them to avoid confusion.
*/