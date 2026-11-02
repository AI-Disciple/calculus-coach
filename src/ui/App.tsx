import { useSyncExternalStore } from "react";
import { getAuthState, signOut, subscribeAuth } from "../progress/auth.ts";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AddingContentPage } from "./AddingContentPage.tsx";
import { ChangesPage } from "./ChangesPage.tsx";
import { CoveragePage } from "./CoveragePage.tsx";
import { ExerciseBankPage } from "./ExerciseBankPage.tsx";
import { ProgressPage } from "./ProgressPage.tsx";
import {
  FormulaSheetBuilderPage,
  FormulaSheetPrintPage,
} from "./FormulaSheetPage.tsx";
import { Home } from "./Home.tsx";
import { LecturePage } from "./LecturePage.tsx";
import { LecturesPage } from "./LecturesPage.tsx";
import { MockSessionPage } from "./MockSessionPage.tsx";
import { MocksPage } from "./MocksPage.tsx";
import { NodePage } from "./NodePage.tsx";
import { NotFound } from "./NotFound.tsx";
import { ReviewPage } from "./ReviewPage.tsx";
import { SearchPage } from "./SearchPage.tsx";
import { Sidebar } from "./Sidebar.tsx";

export function App() {
  const location = useLocation();
  const auth = useSyncExternalStore(subscribeAuth, getAuthState);
  const barePrint = location.pathname === "/formula-sheet/print";

  const main = (
    <main
      className={
        location.pathname === "/" ? "wrap main main-home" : "wrap main"
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lectures" element={<LecturesPage />} />
        <Route path="/lecture/:n" element={<LecturePage />} />
        <Route path="/exercises" element={<ExerciseBankPage />} />
        <Route path="/node/:id" element={<NodePage />} />
        <Route path="/formula-sheet" element={<FormulaSheetBuilderPage />} />
        <Route
          path="/formula-sheet/print"
          element={<FormulaSheetPrintPage />}
        />
        <Route path="/mocks" element={<MocksPage />} />
        <Route path="/mocks/:id" element={<MockSessionPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route
          path="/dashboard"
          element={<Navigate to="/progress" replace />}
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/coverage" element={<CoveragePage />} />
        <Route path="/changes" element={<ChangesPage />} />
        <Route path="/adding-content" element={<AddingContentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );

  if (barePrint) return main;

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-content">
        {main}
        <footer className="site-footer">
          <nav className="wrap footer-nav" aria-label="Site">
            <Link to="/coverage">Coverage</Link>
            <Link to="/changes">What changed</Link>
            <Link to="/adding-content">Adding new content</Link>
            {auth.status === "signed-in" ? (
              <button type="button" className="link-button" onClick={() => void signOut()}>
                Sign out ({auth.email})
              </button>
            ) : null}
          </nav>
        </footer>
      </div>
    </div>
  );
}
