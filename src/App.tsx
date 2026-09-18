import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
function App() {
	return (
		<Container maxWidth={false} disableGutters>
			<Navbar />
			<Hero />
			<Services />
		</Container>
	);
}

export default App;
