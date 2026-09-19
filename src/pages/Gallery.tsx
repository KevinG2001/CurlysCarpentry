import {
	Box,
	Chip,
	Container,
	ImageList,
	ImageListItem,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

const modules = import.meta.glob("../assets/Gallery/*.jpg", { eager: true });

/**
 * Turns the raw glob output into a clean array of { img, category }
 * objects the gallery can render and filter on. For each file:
 * grabs the filename off the end of its path, strips ".jpg", then
 * splits on "-" and takes the first chunk as the category
 * ("kitchen-01" -> "kitchen").
 */
const galleryPhotos = Object.entries(modules).map(([path, mod]) => {
	const filename = path.split("/").pop()!.replace(".jpg", "");
	const category = filename.split("-")[0];
	return {
		img: (mod as { default: string }).default,
		category,
	};
});

function Gallery() {
	/**
	 * Builds the filter chip list directly from whatever categories
	 * actually exist in galleryPhotos, so it always matches the real
	 * data — add a new category of photo and a chip for it appears
	 * automatically, nothing to update by hand. "All" is added manually
	 * up front since it isn't a real category, just a "show everything" option.
	 */
	const categories = [
		"All",
		...new Set(galleryPhotos.map((photo) => photo.category)),
	];

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up("md"));
	const isSm = useMediaQuery(theme.breakpoints.up("sm"));
	const cols = isMd ? 5 : isSm ? 3 : 2;
	return (
		<Container maxWidth="lg" sx={{ py: 8 }}>
			<Box
				sx={{ bgcolor: "primary.main", p: 2, boxShadow: 6, borderRadius: 2 }}
			>
				<Typography
					variant="h3"
					sx={{ color: "secondary.light", textAlign: "center", mb: 5 }}
				>
					Gallery
				</Typography>
				{categories.map((category) => (
					<Chip
						key={category}
						label={category}
						size="medium"
						sx={{
							color: "text.primary",
							fontWeight: 600,
							letterSpacing: "0.05em",
							px: 1,
							m: 1,
							bgcolor: "rgba(250, 243, 232, 0.9)",
						}}
					/>
				))}

				<Box sx={{ width: "100%" }}>
					<ImageList variant="masonry" cols={cols} gap={6}>
						{galleryPhotos.map((item) => (
							<ImageListItem key={item.img}>
								<img
									srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
									src={`${item.img}?w=248&fit=crop&auto=format`}
									alt={item.category}
									loading="lazy"
								/>
							</ImageListItem>
						))}
					</ImageList>
				</Box>
			</Box>
		</Container>
	);
}

export default Gallery;
