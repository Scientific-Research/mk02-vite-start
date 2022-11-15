import "./App.scss";

const title = "Our JSX Basics Lesson";
const userIsOnline = true;

function App() {
  return (
    <div className="App">
      <h1>{title}</h1>

      {/* strange if statement */}
      {userIsOnline && <div>user is online</div>}
      <p>This is a Test App with Vite.</p>
      <hr />

      {/* strange Eternary Operator */}

      {userIsOnline ? (
        <div>user doesn't need to login!</div>
      ) : (
        <div>User needs to login!</div>
      )}
    </div>
  );
}

export default App;
