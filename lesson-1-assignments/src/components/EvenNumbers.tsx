// Assignment 2 Task 2 and 3
const EvenNumbers: React.FC = () => {
    const filterNumbers = (array: number[]):number[] => {
        return array.filter(number => number % 2 === number);
        
      }
    return (
        <div>
            <p>Even Numbers: {filterNumbers([1, 2, 5, 6, 9, 12, 13])}</p> 
        </div>
    )
}

export default EvenNumbers;