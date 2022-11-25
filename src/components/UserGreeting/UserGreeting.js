export const UserGreeting = ({name}) => {
    if(name) {
        return<h3>{name}Your registration is successful</h3>
    }
    return <h3>Your registration is successful. Login please!</h3>

}