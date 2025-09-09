function Welcome(){  //Component name in uppercase
    let myName = " Mark"  //variable myName:String
    //values in return are returned from the component
    // in this case its HTML plus the variable name
    return ( 
    <>  <b>Welcome to 
        {myName}'s React</b>
    </>
    )
}
//we must export the component in order to make it 
// available to other components
export default Welcome
