import React, { useState } from "react";
import "./App.scss";
import Books from "../src/data/books.json";

const title = "Our JSX Basics Lesson";

// const userIsOnline = true;
// const fileStatus = "fileExists";
const fileStatus = "fileIsDeleted";

const password = "123";

function App() {
  // definieren eine State Variable
  const [userIsOnline, setUserIsOnline] = useState(false);
  const [thePassword, setThePassword] = useState(" ");
  const [LichtToggle, setLichtToggle] = useState(false);

  const handleButtonClick = (e) => {
    // userIsOnline = !userIsOnline;
    // setUserIsOnline(...userIsOnline);
    e.preventDefault();

    if (password === thePassword) {
      setUserIsOnline(true);
    }
  };

  const ToggleDasLicht = (e) => {
    e.preventDefault();

    setLichtToggle((LichtToggle) => !LichtToggle);
  };

  return (
    <>
      <div className="App">
        <h1>{title}</h1>

        <form>
          password:
          <input
            onChange={(e) => setThePassword(e.target.value)}
            value={thePassword}
          ></input>
          {/* {thePassword} */}
          <button onClick={handleButtonClick}>Login</button>
          <button onClick={ToggleDasLicht} className="Licht">
            Wechselschalter
          </button>
        </form>
        <hr />
        {/* strange if statement */}
        {userIsOnline && <div>user is online</div>}
        {/* {LichtToggle && <div>Licht umschaltet.</div>} */}
        {LichtToggle && <div>Licht ist AN!</div>}
        {/* {LichtAUS && <div>Licht ist AUS.</div>} */}

        {/* <p>This is a Test App with Vite.</p> */}

        {/* strange Eternary Operator */}

        {userIsOnline ? (
          <div>user doesn't need to login!</div>
        ) : (
          <div>User needs to login!</div>
        )}

        <hr />
        {LichtToggle ? (
          <div>Bitte keinen Schalter betätigen!!</div>
        ) : (
          <div>Du musst das Licht AN machen!</div>
        )}
        <hr />
        {/* {userIsOnline && <div>secret password: 738373</div>} */}
        {
          <div style={{ color: userIsOnline ? "green" : "red" }}>
            Information
          </div>
        }

        <hr />
        <div className={fileStatus}>index.html</div>

        <hr />
        <h2>
          There are <span>{Books.length}</span> books in our list:
        </h2>

        {/* <ul className="book">
        {Books.filter((book) => (
          <li className="singleBook" key={book.id}>
            {book.title.includes("linux")}
          </li>
        ))}
      </ul> */}
        {/* 
      {Books.filter((book) => book.title.includes("Linux")).map((book, i) => {
        return <div>{book}</div>;
      })} */}

        {/* <ul>
        {Books.filter((f) => (
          <li>{f.title.includes("Linux").map((book) => book.title)}</li>
        ))}
      </ul> */}

        {/* <div>
        {Books.filter((f) => f.title.includes("Linux")).map(
          (book) => book.title
        )}
      </div> */}

        <ul className="book">
          {Books.filter((f) => f.title.includes("Linux")).map((book, i) => {
            return (
              <React.Fragment key={i}>
                <li className="singleBook">{book.title}</li>
                <li className="singleBook">{book.description}</li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
