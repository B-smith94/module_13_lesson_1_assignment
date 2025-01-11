import './App.css'
import EvenNumbers from './components/EvenNumbers';
import UserList from './components/UserList';

function App() {
  // Assignment 1
  const greeting: string = "Hello, Typescript!";
  const numberList: number[] = [5, 10, 15];
  const calculateSum = (a: number, b: number): number => {
    return a + b;
  }
  // Assignment 2 task 1
  const ColorList: string[] = ["red", "blue", "green", "yellow"]

  return (
    <>
      <h1>Module 13 Lesson 1 Assignments: Typescript Fundamentals</h1>
      <h2>Assignment 1</h2>
      <p>{greeting}</p> 
      <p>{numberList}</p>
      <p>3 + 5 = {calculateSum(3, 5)}</p>
      <h2>Assignment 2</h2>
      <ul>
        {ColorList.map((color, index) => (
          <li key={index}>
            {color}
          </li>
        ))}
      </ul>
      <EvenNumbers />
      <UserList />
    </>
  )
}

export default App
