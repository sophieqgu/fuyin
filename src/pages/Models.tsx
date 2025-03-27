import { useState } from "react";
import {
	Box,
	Container,
	Grid,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	Tabs,
	Tab,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface Model {
	id: string;
	name: string;
	category: "premium" | "essential";
	description: string;
	price: string;
	image: string;
}

const mockModels: Model[] = [
	{
		id: "premium-1",
		name: "Elite Pro X1",
		category: "premium",
		description: "Advanced noise cancellation with AI-powered sound processing",
		price: "$2,999",
		image: "https://example.com/elite-pro-x1.jpg",
	},
	{
		id: "premium-2",
		name: "Elite Pro X2",
		category: "premium",
		description: "Premium wireless connectivity with extended battery life",
		price: "$3,499",
		image: "https://example.com/elite-pro-x2.jpg",
	},
	{
		id: "essential-1",
		name: "Essential E1",
		category: "essential",
		description: "Quality hearing aid with core features for everyday use",
		price: "$1,499",
		image: "https://example.com/essential-e1.jpg",
	},
	{
		id: "essential-2",
		name: "Essential E2",
		category: "essential",
		description: "Reliable performance with comfortable fit",
		price: "$1,999",
		image: "https://example.com/essential-e2.jpg",
	},
];

const Models = () => {
	const [category, setCategory] = useState<"all" | "premium" | "essential">(
		"all"
	);

	const handleCategoryChange = (
		_event: React.SyntheticEvent,
		newValue: "all" | "premium" | "essential"
	) => {
		setCategory(newValue);
	};

	const filteredModels = mockModels.filter((model) => {
		if (category === "all") return true;
		return model.category === category;
	});

	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Typography variant="h2" component="h1" align="center" gutterBottom>
				Our Models
			</Typography>
			<Typography variant="h5" align="center" color="text.secondary" paragraph>
				Discover our range of innovative hearing solutions
			</Typography>

			<Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
				<Tabs
					value={category}
					onChange={handleCategoryChange}
					centered
					indicatorColor="primary"
					textColor="primary"
				>
					<Tab label="All Models" value="all" />
					<Tab label="Premium Series" value="premium" />
					<Tab label="Essential Series" value="essential" />
				</Tabs>
			</Box>

			<Grid container spacing={4}>
				{filteredModels.map((model) => (
					<Grid item key={model.id} xs={12} sm={6} md={4}>
						<Card
							component={RouterLink}
							to={`/models/${model.id}`}
							sx={{
								height: "100%",
								display: "flex",
								flexDirection: "column",
								textDecoration: "none",
							}}
						>
							<CardMedia
								component="img"
								height="200"
								image={model.image}
								alt={model.name}
							/>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography gutterBottom variant="h5" component="h2">
									{model.name}
								</Typography>
								<Typography variant="body2" color="text.secondary" paragraph>
									{model.description}
								</Typography>
								<Typography variant="h6" color="primary">
									{model.price}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Models;
