import Profile from "./components/profile";
import Foto from "./assets/perfil.png";

function App() {
  return (
    <div className="app">
      <Profile
        avatar={Foto}
        name="Kaio Vinicius"
        bio="Full-Stack JavaScript and Java Developer"
        email="kaiovini19@hotmail.com"
        phone="+55 (71) 988158367"
        githubUrl="https://github.com/kaiovinic"
        linkedinUrl="https://www.linkedin.com/in/kaioviniciussilva/"
        twitterUrl="https://twitter.com/home"
      />
    </div>
  );
}

export default App;
