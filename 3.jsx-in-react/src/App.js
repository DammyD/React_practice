import Countries from "./Countries";
import "./index.css"

// an App Component
function App() {
    // Converting html to JSX
    // empty tag is called a react fragment
    const imageUrl = "https://dummy/image.com/300";
    const name = "Blessing";
    return (
     <>
        <Countries />
        <Countries />
        <form className="bio-form">
        <div className="field">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" />
        </div>

        <div className="field">
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" id="password" />
        </div>

        <div className="field">
        <input type="radio" name="gender" value="male" />Male<br />
        <input type="radio" name="gender" value="female" />Female<br />
        <input type="radio" name="gender" value="other" />Other
        </div>

        <div className="field">
            <input list="Options" />
            <datalist id="Options">
                <option value="Option1"></option>
                <option value="Option2"></option>
                <option value="Option3"></option>
            </datalist>
        </div>

        <div className="field">
            <input type="submit" value="submit" />
        </div>

        <div className="field">
        <input type="checkbox" name="correct" value="correct" />
        </div>

        </form>
        <div>
            Hello {name}
            </div>
        <img src={imageUrl} alt="sample" />
     </>
    )
}

export default App;