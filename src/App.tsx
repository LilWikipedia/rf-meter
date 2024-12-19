import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  
  <QueryClientProvider client={queryClient}>
    
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      <BrowserRouter basename="/rf-meter">
      <Routes>
          <Route path="/" element={<Index />} />
      </Routes>  
      </BrowserRouter>
      
    </TooltipProvider>
    
  </QueryClientProvider>
 
);

export default App;