import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#5C4033", // walnut brown — header, primary text on light bg
			light: "#7A5A45",
			dark: "#3E2A1F",
			contrastText: "#FAF3E8",
		},
		secondary: {
			main: "#C1652F", // burnt orange — CTAs, links, highlights
			light: "#D98E56",
			dark: "#9C4E22",
			contrastText: "#FFFFFF",
		},
		background: {
			default: "#FAF3E8", // warm cream page background
			paper: "#FFFFFF", // cards, dialogs, surfaces
		},
		text: {
			primary: "#2E2118", // dark espresso
			secondary: "#6B5344",
		},
		success: {
			main: "#7A8450", // olive — optional, for confirmations/badges
		},
	},
	shape: {
		borderRadius: 8,
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		h1: { fontWeight: 700 },
		h2: { fontWeight: 700 },
		h3: { fontWeight: 700 },
		button: { textTransform: "none", fontWeight: 600 }, // no ALL-CAPS buttons
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "#5C4033",
					color: "#FAF3E8",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
				},
				containedSecondary: {
					"&:hover": { backgroundColor: "#9C4E22" },
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: "#F0E2CC",
					borderRadius: 10,
				},
			},
		},
	},
});

export default theme;
