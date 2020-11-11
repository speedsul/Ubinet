
import Header from './theme/header'
import Footer from './theme/Footer'
import Features from './components/features/Features';
import Banner from './components/banner';
import Post from './components/post';

function App() {
  return (
    <div id="page-wrapper">
      <Header />
      <Features/>
      <Banner titulo="Você sábia que hoje é possivel ter internet de alta qualidade mesmo morando no interior? Clique aqui e saiba mais "/>
      <Post />
      <Footer />
    </div>
  );
}

export default App;
