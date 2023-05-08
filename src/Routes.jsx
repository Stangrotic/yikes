import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ChatGPTDesktopOne = React.lazy(() => import("pages/ChatGPTDesktopOne"));
const ChatGPTDesktop = React.lazy(() => import("pages/ChatGPTDesktop"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/chatgptdesktop" element={<ChatGPTDesktop />} />
          <Route path="/chatgptdesktopone" element={<ChatGPTDesktopOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
