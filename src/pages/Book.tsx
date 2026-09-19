import {
	Box,
	Button,
	Container,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

function Book() {
	return (
		<Container maxWidth="sm" sx={{ py: 8 }}>
			<Typography
				variant="h3"
				sx={{ color: "secondary.light", textAlign: "center", mb: 5 }}
			>
				Request a Quote!
			</Typography>

			<Box
				sx={{
					bgcolor: "primary.main",
					borderRadius: 3,
					boxShadow: 6,
					p: { xs: 3, md: 5 },
				}}
			>
				<Typography
					variant="body1"
					sx={{ color: "primary.contrastText", mb: 4, textAlign: "center" }}
				>
					Fill in the form below and we'll reply with a custom quote for your
					needs!
				</Typography>

				<Stack spacing={3}>
					<Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
						<TextField
							label="Name"
							variant="filled"
							fullWidth
							sx={{ bgcolor: "rgba(250, 243, 232, 0.9)", borderRadius: 2 }}
						/>
						<TextField
							label="Phone Number"
							type="tel"
							variant="filled"
							fullWidth
							sx={{ bgcolor: "rgba(250, 243, 232, 0.9)", borderRadius: 2 }}
						/>
					</Stack>

					<TextField
						label="Email"
						type="email"
						variant="filled"
						fullWidth
						sx={{ bgcolor: "rgba(250, 243, 232, 0.9)", borderRadius: 2 }}
					/>

					<TextField
						label="What you want"
						variant="filled"
						multiline
						minRows={4}
						fullWidth
						sx={{ bgcolor: "rgba(250, 243, 232, 0.9)", borderRadius: 2 }}
					/>

					<Button
						variant="contained"
						color="secondary"
						size="large"
						fullWidth
						sx={{ mt: 1, py: 1.5 }}
					>
						Send Request
					</Button>
				</Stack>
			</Box>
		</Container>
	);
}

export default Book;
