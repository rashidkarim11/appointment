import Footer from "./component/footer/footer";
import Header from "./component/header";
import { AppRouter } from "./routes";

function App() {
  return (
    <div>
      <Header />
      <AppRouter />
     <Footer/>
    </div>
  );
}

export default App;
