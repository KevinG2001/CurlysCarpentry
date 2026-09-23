import { Box, Button, Typography, Chip, Stack } from "@mui/material";
import HeroImg from "../assets/Hero.jpg";

export default function Hero() {
	return (
		<Box
			id="home"
			sx={{
				position: "relative",
				width: "100%",
				height: { xs: 560, md: 680 },
				overflow: "hidden",
			}}
		>
			<Box
				component="img"
				src={HeroImg}
				alt="Carpentry Hero Image"
				sx={{
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
					zIndex: 0,
				}}
			/>

			<Box
				sx={{
					position: "absolute",
					inset: 0,
					bgcolor: "rgba(0, 0, 0, 0.3)",
					zIndex: 1,
				}}
			/>

			<Box
				sx={{
					position: "relative",
					zIndex: 2,
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: 3,
					px: 2,
				}}
			>
				<Box
					sx={{
						bgcolor: "rgba(46, 33, 24, 0.85)",
						backdropFilter: "blur(6px)",
						borderRadius: 3,
						boxShadow: "0 24px 48px rgba(0, 0, 0, 0.35)",
						px: { xs: 4, md: 7 },
						py: { xs: 4, md: 5 },
						textAlign: "center",
						maxWidth: 640,
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2rem", md: "2.75rem" },
							fontWeight: 700,
							lineHeight: 1.15,
							color: "background.default",
						}}
					>
						Curlys Carpentry
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "1rem", md: "1.25rem" },
							color: "secondary.light",
							mt: 1,
						}}
					>
						Custom carpentry, built to last.
					</Typography>
					<Button
						variant="contained"
						size="large"
						color="secondary"
						sx={{ mt: 3 }}
					>
						Get a Quote!
					</Button>
				</Box>

				<Stack direction="row" spacing={2}>
					<Chip
						label="Est. 2019"
						sx={{
							bgcolor: "rgba(250, 243, 232, 0.9)",
							color: "text.primary",
							fontWeight: 600,
							letterSpacing: "0.05em",
							px: 1,
						}}
					/>
					<Chip
						label="Dublin Based"
						sx={{
							bgcolor: "rgba(250, 243, 232, 0.9)",
							color: "text.primary",
							fontWeight: 600,
							letterSpacing: "0.05em",
							px: 1,
						}}
					/>
				</Stack>
			</Box>
		</Box>
	);
}
