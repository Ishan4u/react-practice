import Heading from "./Components/Heading"; // "./Heading.jsx"
import Article from "./Components/Article";

var React = require("react");

function App() {
  return (
    <div>
      <Heading />
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application, and React will efficiently update
        and render just the right components when your data changes.
      </p>
      <Article />
    </div>
  );
}

export default App;
