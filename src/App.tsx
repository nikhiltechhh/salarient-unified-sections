import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetails";
import Payment from "./components/Payments";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <HashRouter>
        <Routes>
 <Route index element={<Index />} />
          {/* Layout with Header + Footer */}
          <Route
            element={
              <>
                <Header />
                <main>
                  <Outlet />
                </main>
                <Footer />
              </>
            }
          >
           
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/payment" element={<Payment />} />
          </Route>

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;