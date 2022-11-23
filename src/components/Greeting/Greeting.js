import { GuestGreeting } from "../../components/GuestGreeting/GuestGreeting";
import { UserGreeting } from "../../components/UserGreeting/UserGreeting";
export const Greeting = ({isLoggedIn}) => {
    // if (isLoggedIn) {
    //     return <UserGreeting/>;
    // }
    //     return <GuestGreeting/>;
    
       return (
        
        <h3>
            {isLoggedIn ? <UserGreeting/> : <GuestGreeting/>}
        </h3>
       )
        
};