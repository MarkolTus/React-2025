import { useState } from "react";

function Example() {
  //const [count, setCount] = useState(0); // [value, updater function]
const favouriteMusic = "The Beatles";
const favouriteMovies = ["Inception", "The Matrix"];
const favouriteBooks = ["1984", "Sapiens"];
const favourites = [...favouriteMovies, ...favouriteBooks];
const allFavourites = [...favourites, favouriteMusic];
console.log(allFavourites);

const newBand = { name: "The Beatles" };
const favoriteBands = [ { name: "Queen" }, { name: "Nirvana" } ];
const updatedBands = [...favoriteBands, newBand];
console.log(updatedBands[0].name);

const originalUser = { username: "Alex" };
const copiedUser = originalUser;
copiedUser.username = "Jordan";
console.log(originalUser.username); // Output: "Alex"

const baseNumbers = [1, 2, 3];
const copiedNumbers = [...baseNumbers];
copiedNumbers.push(4);
console.log(baseNumbers); // [1, 2, 3, 4]
console.log(copiedNumbers); // [1, 2, 3, 4]

/** An example of map */
const a = [1,2,3,4,5];

a.map((v,i) => (
  console.log(v+1)
)
)

  return (
    <div>
      {
      a.map((v,i) => (
      <p key={i}>{v+1}</p>
      ))
    }
    </div>
  );
}

export default Example;