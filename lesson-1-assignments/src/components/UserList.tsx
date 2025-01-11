// Assignment 2 task 4

const UserList: React.FC = () => {
    type Person = {
        name: string,
        age: number
    }

    const people: Person[] = [{
        name: "Andy",
        age: 23
    }, {
        name: "James",
        age: 32,
    }, {
        name: "Abby",
        age: 26.
    }]   
    
    return (
        <div>
            <ul>
                {people.map((person) => (
                    <li key={person.name}>
                        Name: {person.name}, 
                        Age: {person.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList