import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";

import { Shell } from "@/components/layout/site-layout";
import { ErrorBoundary } from "@/components/error-boundary";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import CoursesPage from "@/pages/courses";
import FaqsPage from "@/pages/faqs";
import HomePage from "@/pages/home";
import HowItWorksPage from "@/pages/how-it-works";
import JesusKidsPage from "@/pages/jesus-kids";
import ShowcasePage from "@/pages/showcase";
import NotFound from "@/pages/not-found";
import TermsPage from "@/pages/terms";
import PrivacyPage from "@/pages/privacy";
import SafeguardingPage from "@/pages/safeguarding";
import RefundPolicyPage from "@/pages/refund-policy";
import CookiesPage from "@/pages/cookies";

const queryClient = new QueryClient();

function AppRouter() {
  const [location] = useLocation();

  return (
    <ErrorBoundary resetKey={location}>
      <Shell>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/how-it-works" component={HowItWorksPage} />
          <Route path="/showcase" component={ShowcasePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/jesus-kids" component={JesusKidsPage} />
          <Route path="/faqs" component={FaqsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/safeguarding" component={SafeguardingPage} />
          <Route path="/refund-policy" component={RefundPolicyPage} />
          <Route path="/cookies" component={CookiesPage} />
          <Route component={NotFound} />
        </Switch>
      </Shell>
    </ErrorBoundary>
  );
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AppRouter />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
