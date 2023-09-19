import {
  Home,
  About,
  Navbar,
  Footer,
  Teacher,
  Contact,
  Courses,
} from "./components/index";

const App = () => {
  return (
    <div className="font-Montserrat bg-solitude">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
