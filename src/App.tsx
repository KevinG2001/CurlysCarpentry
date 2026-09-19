import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Book from "./pages/Book";
function App() {
	return (
		<Container maxWidth={false} disableGutters>
			<Navbar />
			<Hero />
			<Services />
			<Gallery />
			<Book />
		</Container>
	);
}

export default App;
