import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Fallback } from "@/shared/ui";

const Home = lazy(() =>
  import("@/shared/ui").then(module => ({ default: module.Home }))
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
