import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
