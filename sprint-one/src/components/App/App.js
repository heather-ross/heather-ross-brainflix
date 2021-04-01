import './App.scss';
import '../../styles/global.scss';
// import '../../styles/partials/mixins.scss';
import MainNav from '../MainNav/MainNav';
import Hero from '../Hero/Hero';
import Post from '../Post/Post';
import Form from '../Form/Form';


function App() {
  return (
    <>
      <MainNav />
      <Hero />
    <main className="main">
        <Post /> 
    <Form />
    </main>
    </>
  );
}

export default App;
