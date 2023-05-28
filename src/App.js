import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div className="App">
      <h1>Personal Digital Assistant </h1>

      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Sirri" handle="@sirri32" />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
}

export default App;
