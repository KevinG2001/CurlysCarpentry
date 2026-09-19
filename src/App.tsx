import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
function App() {
	return (
		<Container maxWidth={false} disableGutters>
			<Navbar />
			<Hero />
			<Services />
			<Gallery />
		</Container>
	);
}

export default App;
