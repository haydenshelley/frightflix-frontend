import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}
