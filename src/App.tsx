import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Book from "./pages/Book";
import Footer from "./components/Footer";
function App() {
	return (
		<Container maxWidth={false} disableGutters>
			<Navbar />
			<Hero />
			<Services />
			<Gallery />
			<Book />
			<Footer />
		</Container>
	);
}

export default App;
