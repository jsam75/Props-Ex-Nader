function Paragraph1(props) {
    return (
        <p>{props.text}</p>
    );
}

export default Paragraph1;

/*Notes:
1. There are multiple ways to pass in props.  In addition to the version above (easiest to read for beginners),
   Method 2: Put data type in a variable
   const { text } and return <h1> { text } </h1>
   Method 3: Pass data type as an argument
   function Header ({ text }) and write return statement same as Method 2.
   Method 3 is writing the least amount of code.  Writing props. can get annoying in large apps.
   */
