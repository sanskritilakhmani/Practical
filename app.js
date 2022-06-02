import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>BIO DATA</h1>
        <h2>191500718 - Sanskriti Lakhmani</h2>
      </div>
      <div className="Container">
        <div className="personalSkills">
          <h3>Personal Skills</h3>
          <div>
            <ul>
              <li> Problem Solving</li>
              <li>Quick Learner</li>
            </ul>
          </div>
        </div>
        <div className="professionalSkills">
          <h3>Professional Skills</h3>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="hobbies">
          <h3>Hobbies</h3>
          <ul>
            <li>Reading News</li>
            <li>Listen to songs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}