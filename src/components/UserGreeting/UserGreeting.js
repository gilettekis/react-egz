export const UserGreeting = ({name}) => {
    if(name) {
        return<h1>{name}Your registration is successful</h1>
    }
    return <h1>Your registration is successful</h1>

};