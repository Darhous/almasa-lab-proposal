import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { ExecutiveSummary } from "./sections/ExecutiveSummary";
import { Challenges } from "./sections/Challenges";
import { Solution } from "./sections/Solution";
import { PatientJourney } from "./sections/PatientJourney";
import { ResultsLookup } from "./sections/ResultsLookup";
import { PatientPortal } from "./sections/PatientPortal";
import { WindowsApp } from "./sections/WindowsApp";
import { ResultsEntry } from "./sections/ResultsEntry";
import { TestCatalog } from "./sections/TestCatalog";
import { DataMigration } from "./sections/DataMigration";
import { PatientAccounts } from "./sections/PatientAccounts";
import { WhatsApp } from "./sections/WhatsApp";
import { AI } from "./sections/AI";
import { AdminDashboard } from "./sections/AdminDashboard";
import { Permissions } from "./sections/Permissions";
import { Security } from "./sections/Security";
import { Reports } from "./sections/Reports";
import { DesignDirections } from "./sections/DesignDirections";
import { BeforeAfter } from "./sections/BeforeAfter";
import { Roadmap } from "./sections/Roadmap";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { MasterDecisionLog } from "./sections/MasterDecisionLog";

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
        <WindowsApp />
        <ResultsEntry />
        <TestCatalog />
        <DataMigration />
        <PatientAccounts />
        <WhatsApp />
        <AI />
        <AdminDashboard />
        <Permissions />
        <Security />
        <Reports />
        <DesignDirections />
        <BeforeAfter />
        <Roadmap />
        <FAQ />
        <FinalCTA />
        <MasterDecisionLog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
