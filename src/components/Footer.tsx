import {
	Box,
	Container,
	Divider,
	Grid,
	IconButton,
	Link,
	Stack,
	Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function FooterColumn({ label, value }: { label: string; value: string }) {
	return (
		<Box>
			<Typography
				variant="subtitle2"
				sx={{
					color: "secondary.light",
					fontWeight: 600,
					letterSpacing: "0.05em",
				}}
			>
				{label.toUpperCase()}
			</Typography>
			<Typography variant="body2">{value}</Typography>
		</Box>
	);
}

function Footer() {
	return (
		<Box sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
			<Container maxWidth="md" sx={{ py: 8 }}>
				<Typography variant="h4" sx={{ color: "secondary.light", mb: 4 }}>
					Curlys Carpentry
				</Typography>

				<Grid container spacing={4}>
					<Grid size={{ xs: 12, sm: 6 }}>
						<Stack spacing={3}>
							<FooterColumn label="Address" value="Crumlin, Dublin" />
							<FooterColumn label="Phone" value="324 428 2302" />
						</Stack>
					</Grid>

					<Grid size={{ xs: 12, sm: 6 }}>
						<Stack spacing={3}>
							<FooterColumn label="Email" value="kevin@curlycarpentry.com" />
							<Box>
								<Typography
									variant="subtitle2"
									sx={{
										color: "secondary.light",
										fontWeight: 600,
										letterSpacing: "0.05em",
									}}
								>
									SOCIAL
								</Typography>
								<Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
									<IconButton
										component="a"
										href="https://www.facebook.com/CurlyKitchens"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Curlys Carpentry on Facebook"
										sx={{ color: "inherit" }}
									>
										<FacebookIcon />
									</IconButton>
									<IconButton
										component="a"
										href="https://www.instagram.com/curlyscarpentryservices/"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Curlys Carpentry on Instagram"
										sx={{ color: "inherit" }}
									>
										<InstagramIcon />
									</IconButton>
								</Stack>
							</Box>
						</Stack>
					</Grid>
				</Grid>

				<Divider sx={{ borderColor: "rgba(250, 243, 232, 0.2)", my: 5 }} />

				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent="space-between"
					alignItems="center"
					spacing={1}
				>
					<Typography variant="body2" sx={{ color: "primary.light" }}>
						© {new Date().getFullYear()} Curlys Carpentry. All rights reserved.
					</Typography>
					<Typography variant="body2" sx={{ color: "primary.light" }}>
						Made by{" "}
						<Link
							href="https://kevinglennon.net"
							target="_blank"
							rel="noopener noreferrer"
							sx={{ color: "secondary.light" }}
						>
							Kevin
						</Link>
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
}

export default Footer;
