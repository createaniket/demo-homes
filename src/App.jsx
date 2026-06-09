import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteHeader } from "./components/site/SiteHeader.jsx";
import { SiteFooter } from "./components/site/SiteFooter.jsx";
import { Toaster } from "sonner";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Warranty from "./pages/Warranty.jsx";
import Careers from "./pages/Careers.jsx";
import Areas from "./pages/Areas.jsx";
import Investors from "./pages/Investors.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-paper">
        <SiteHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
      <Toaster />
    </BrowserRouter>
  );
}
