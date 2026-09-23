import {
	AppBar,
	Box,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const pages = [
	{ label: "Home", id: "home" },
	{ label: "About", id: "about" },
	{ label: "Services", id: "services" },
	{ label: "Gallery", id: "gallery" },
];

function Navbar() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null,
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".2rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Curlys Carpentry
					</Typography>

					{/* desktop: nav links + Book Now, right-aligned */}
					<Box
						sx={{
							display: { xs: "none", md: "flex" },
							alignItems: "center",
							gap: 1,
						}}
					>
						{pages.map((page) => (
							<Button
								key={page.id}
								component="a"
								href={`#${page.id}`}
								onClick={handleCloseNavMenu}
								sx={{ color: "inherit" }}
							>
								{page.label}
							</Button>
						))}
						<Button
							variant="contained"
							color="secondary"
							component="a"
							href="#book"
							sx={{ ml: 1 }}
						>
							Get a Quote
						</Button>
					</Box>

					{/* mobile: Book Now stays visible, everything else collapses into the menu */}
					<Box
						sx={{
							display: { xs: "flex", md: "none" },
							alignItems: "center",
							gap: 1,
						}}
					>
						<Button variant="contained" color="secondary" size="small">
							Book Now
						</Button>
						<IconButton
							size="large"
							aria-label="open navigation menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
							keepMounted
							transformOrigin={{ vertical: "top", horizontal: "right" }}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
						>
							{pages.map((page) => (
								<MenuItem
									key={page.id}
									component="a"
									href={`#${page.id}`}
									onClick={handleCloseNavMenu}
								>
									<Typography sx={{ textAlign: "center" }}>
										{page.label}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navbar;
