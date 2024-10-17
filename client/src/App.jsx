import Layout from "./components/Layout/Layout.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Education from "./pages/Education/Education.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Techstack from "./pages/Techstack/Techstack.jsx";
import WorkExp from "./pages/WorkExp/WorkExp.jsx";
import ScrollToTop from "react-scroll-to-top";
import useTheme from "./content/useTheme.jsx";
import MobileNav from "./components/MobileNav/MobileNav.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer.jsx";
import ThemeButton from "./components/ThemeButton/ThemeButton.jsx";

function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <header>
          <ToastContainer />
          <MobileNav />
          <Layout />
        </header>

        <main className="d-flex flex-column align-items-center justify-content-center">
          <ThemeButton />
          <About />
          <Education />
          <Techstack />
          <WorkExp />
          <Projects />
          <Contact />
          <ScrollToTop
            smooth
            className="scroll-top"
            color="#f29f67"
            style={{
              backgroundColor: "#1e1e2c",
              borderRadius: "50%",
            }}
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
