import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CustomerSay from "./components/ui/CustomerSay";
import Get from "./components/ui/Get";
import HowItWorks from "./components/ui/HowItWorks";
import Popular from "./components/ui/Popular";
import Recommend from "./components/ui/Recommend";
import TopCompanies from "./components/ui/TopCompanies";

function App() {
  return (
    <>
      <Header />
      <Recommend />
      <HowItWorks />
      <Popular />
      <TopCompanies />
      <CustomerSay />
      <Get />
      <Footer />
    </>
  );
}

export default App;
