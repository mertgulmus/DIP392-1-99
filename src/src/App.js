import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Homepage from "./routes/Homepage";
import NotFound from "./routes/NotFound";
import Play from "./routes/Play";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/play" element={<Play />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
