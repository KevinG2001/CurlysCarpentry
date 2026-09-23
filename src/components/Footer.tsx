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

const TikTokIcon = ({ color = "#000000" }) => {
	return (
		<svg
			fill={color}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 50 50"
			width="100%"
			height="100%"
		>
			<path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
		</svg>
	);
};

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
							<FooterColumn label="Phone" value="+353 85 428 2302" />
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
									<IconButton
										component="a"
										href="https://www.tiktok.com/@curlys.carpentry"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Curlys Carpentry on Facebook"
										sx={{ color: "inherit", width: "40px" }}
									>
										<TikTokIcon color="white" />
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
