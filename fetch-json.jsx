import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students.json from the public folder
    fetch("/students.json")
      .then(response => response.json())
      .then(data => {
        // Save to localStorage
        localStorage.setItem("students", JSON.stringify(data));

        // Update state (optional, for displaying)
        setStudents(data);
      })
      .catch(err => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div>
      <h1>Students</h1>
      <pre>{JSON.stringify(students, null, 2)}</pre>
    </div>
  );
}

export default App;




✅ What .then() means

.then() is used with Promises in JavaScript.

A Promise is something that will finish later (asynchronous).
.then() lets you say:

➡️ “When the previous async step finishes, run this next step.”

🔍 In your code
1. fetch("/students.json")

fetch() starts an asynchronous request to get the file.

It returns a Promise that will eventually contain a Response object.

2. .then(response => response.json())

This means:

➡️ “When fetch finishes and gives me a response, convert it to JSON.”

response.json() also returns a Promise, because converting the body to JSON is also asynchronous.

3. .then(data => { ... })

This means:

➡️ “When the JSON is ready, run this function with the parsed data.”

Inside this block you do:

localStorage.setItem("students", JSON.stringify(data));
setStudents(data);


So this runs only after the JSON file has been fully fetched and converted.

4. .catch(err => ...)

This runs only if something fails:

the fetch fails

the JSON is invalid

network problems

📘 Visualizing the flow
fetch("/students.json")
        |
        v
.then(response => response.json())
        |
        v
.then(data => do something with data)
        |
        v
.catch(error if anything above fails)

😀 Simple analogy

Think of .then() like steps in a recipe:

fetch: “Go to the store and get the ingredients.”

then: “When you get back, unpack the bags.”

then: “When the bags are unpacked, start cooking.”

Each .then() waits for the previous step to complete.