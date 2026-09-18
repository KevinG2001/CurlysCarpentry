import { Card, CardContent, Typography, Container, Grid } from "@mui/material";
import DeckOutlinedIcon from "@mui/icons-material/DeckOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import type { SvgIconComponent } from "@mui/icons-material";

const services = [
	{
		title: "Kitchens",
		icon: KitchenOutlinedIcon,
		description:
			"Fitted and freestanding kitchens, built to your exact space and finished on-site.",
	},
	{
		title: "Decking",
		icon: DeckOutlinedIcon,
		description:
			"Design-to-install decking, built to handle Irish weather for years to come.",
	},
	{
		title: "Joinery",
		icon: HandymanOutlinedIcon,
		description:
			"Doors, frames, and staircases — custom joinery made from solid timber.",
	},
];

interface ServiceCardProps {
	icon: SvgIconComponent;
	title: string;
	description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
	return (
		<Card
			sx={{
				bgcolor: "primary.main",
				borderRadius: 2,
				height: "100%",
				transition: "transform 0.2s ease, box-shadow 0.2s ease",
				"&:hover": {
					transform: "translateY(-4px)",
					boxShadow: 6,
				},
			}}
		>
			<CardContent sx={{ textAlign: "center", py: 4 }}>
				<Icon sx={{ fontSize: 40, color: "secondary.light", mb: 1 }} />
				<Typography variant="h4" sx={{ color: "background.default" }}>
					{title}
				</Typography>
				<Typography
					variant="body1"
					sx={{ color: "primary.contrastText", mt: 1 }}
				>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default function Services() {
	return (
		<Container maxWidth="lg" sx={{ py: 8 }}>
			<Typography
				variant="h3"
				sx={{ color: "secondary.light", textAlign: "center", mb: 5 }}
			>
				Services
			</Typography>

			<Grid container spacing={4}>
				{services.map((service) => (
					<Grid key={service.title} size={{ xs: 12, sm: 4 }}>
						<ServiceCard {...service} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
