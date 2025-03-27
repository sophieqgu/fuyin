import { useParams } from "react-router-dom";
import {
	Box,
	Container,
	Grid,
	Typography,
	Button,
	Paper,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";

interface ModelDetail {
	id: string;
	name: string;
	category: "premium" | "essential";
	description: string;
	price: string;
	image: string;
	features: string[];
	specifications: {
		label: string;
		value: string;
	}[];
}

const mockModelDetails: Record<string, ModelDetail> = {
	"premium-1": {
		id: "premium-1",
		name: "Elite Pro X1",
		category: "premium",
		description: "Advanced noise cancellation with AI-powered sound processing",
		price: "$2,999",
		image: "https://example.com/elite-pro-x1.jpg",
		features: [
			"AI-powered noise reduction",
			"360-degree sound processing",
			"Bluetooth 5.0 connectivity",
			"Smartphone app control",
			"Rechargeable battery with 30-hour life",
		],
		specifications: [
			{ label: "Battery Life", value: "Up to 30 hours" },
			{ label: "Charging Time", value: "3 hours" },
			{ label: "Bluetooth Range", value: "10 meters" },
			{ label: "Water Resistance", value: "IP68" },
			{ label: "Warranty", value: "3 years" },
		],
	},
	"premium-2": {
		id: "premium-2",
		name: "Elite Pro X2",
		category: "premium",
		description: "Premium wireless connectivity with extended battery life",
		price: "$3,499",
		image: "https://example.com/elite-pro-x2.jpg",
		features: [
			"Advanced sound clarity technology",
			"Dual microphone system",
			"Extended battery life",
			"Premium build quality",
			"Custom sound profiles",
		],
		specifications: [
			{ label: "Battery Life", value: "Up to 40 hours" },
			{ label: "Charging Time", value: "2.5 hours" },
			{ label: "Bluetooth Range", value: "12 meters" },
			{ label: "Water Resistance", value: "IP68" },
			{ label: "Warranty", value: "3 years" },
		],
	},
};

const ModelDetail = () => {
	const { id } = useParams<{ id: string }>();
	const model = id ? mockModelDetails[id] : null;

	if (!model) {
		return (
			<Container maxWidth="lg" sx={{ py: 4 }}>
				<Typography variant="h4" align="center">
					Model not found
				</Typography>
			</Container>
		);
	}

	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Grid container spacing={6}>
				<Grid item xs={12} md={6}>
					<Box
						component="img"
						src={model.image}
						alt={model.name}
						sx={{
							width: "100%",
							height: "auto",
							borderRadius: 2,
							mb: 2,
						}}
					/>
				</Grid>

				<Grid item xs={12} md={6}>
					<Typography variant="h3" component="h1" gutterBottom>
						{model.name}
					</Typography>
					<Typography variant="subtitle1" color="text.secondary" gutterBottom>
						{model.category.charAt(0).toUpperCase() + model.category.slice(1)}{" "}
						Series
					</Typography>
					<Typography variant="h4" color="primary" gutterBottom>
						{model.price}
					</Typography>
					<Typography variant="body1" paragraph>
						{model.description}
					</Typography>
					<Button variant="contained" size="large" sx={{ mt: 2 }}>
						Request Consultation
					</Button>
				</Grid>

				<Grid item xs={12}>
					<Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
						Key Features
					</Typography>
					<List>
						{model.features.map((feature, index) => (
							<ListItem key={index}>
								<ListItemText primary={feature} />
							</ListItem>
						))}
					</List>
				</Grid>

				<Grid item xs={12}>
					<Typography variant="h4" gutterBottom>
						Specifications
					</Typography>
					<Paper sx={{ p: 3 }}>
						<Grid container spacing={2}>
							{model.specifications.map((spec, index) => (
								<Grid item xs={12} sm={6} key={index}>
									<Typography variant="subtitle1" color="text.secondary">
										{spec.label}
									</Typography>
									<Typography variant="body1">{spec.value}</Typography>
								</Grid>
							))}
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ModelDetail;
