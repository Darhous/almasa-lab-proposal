import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { ExecutiveSummary } from "./sections/ExecutiveSummary";
import { Challenges } from "./sections/Challenges";
import { Solution } from "./sections/Solution";
import { PatientJourney } from "./sections/PatientJourney";
import { ResultsLookup } from "./sections/ResultsLookup";
import { PatientPortal } from "./sections/PatientPortal";

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <Hero />
        <ExecutiveSummary />
        <Challenges />
        <Solution />
        <PatientJourney />
        <ResultsLookup />
        <PatientPortal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
