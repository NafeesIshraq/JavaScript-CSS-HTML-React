import PropTypes from 'prop-types'


function UserGreeting(props){
    console.log(props)
    const welcome = <h2 className = "welcome"> Welcome {props.username} </h2>
    const login = <h2 className = "login-js"> Please login first </h2>


   return (props.isloggedin ? welcome : login );
    
    
   
}

export default UserGreeting