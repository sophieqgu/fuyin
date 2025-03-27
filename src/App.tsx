import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Models from "./pages/Models";
import ModelDetail from "./components/ModelDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<Navbar />
			<Box component="main" sx={{ flexGrow: 1, py: 3 }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/models" element={<Models />} />
					<Route path="/models/:id" element={<ModelDetail />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Box>
			<Footer />
		</Box>
	);
}

export default App;
