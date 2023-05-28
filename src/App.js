import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistant</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa was created by amazon and it helps you to buy things"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana was created my Microsoft to assist you around windows OS"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Sirri"
                handle="@sirri32"
                image={SiriImage}
                description="Sirri was made by Apple it is soon facing out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
