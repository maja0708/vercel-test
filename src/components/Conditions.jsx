import { result, isWeatherNice, canEnterClub, ageDescription } 
from '../data/expressions';


function Conditions() {
    console.log(result);
    console.log(isWeatherNice);
    console.log(canEnterClub);
    console.log(ageDescription);

  return (
    <div>
      <h2>Conditions</h2>
      <p>Result: {result}</p>
      <p>Is the weather nice? {isWeatherNice ? "Yes" : "No"}</p>
      <p>Can enter club? {canEnterClub ? "Yes" : "No"}</p>
      <p>Age description: {ageDescription}</p>
    </div>
    
  );
}

export default Conditions;