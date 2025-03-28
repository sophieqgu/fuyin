import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { models } from "./Models";
import Carousel from "@/components/Carousel";

const Home = () => {
	return (
		<Box>
			{/* Hero Section */}
			<Box
				sx={{
					backgroundColor: "primary.main",
					color: "white",
					py: 8,
					mb: 6,
				}}
			>
				<Container maxWidth="lg">
					<Grid container spacing={4} alignItems="center">
						<Grid item xs={12} md={6}>
							<Typography
								component="h1"
								variant="h2"
								gutterBottom
								sx={{ fontWeight: "bold" }}
							>
								聆听前所未有的清晰世界
							</Typography>
							<Typography variant="h5" paragraph>
								探索我们的革命性助听器，尖端科技与优雅设计的完美融合
							</Typography>
							<Button
								component={RouterLink}
								to="/models"
								variant="contained"
								color="secondary"
								size="large"
								sx={{ mt: 2 }}
							>
								探索精选机型
							</Button>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Models Carousel Section */}
			<Container maxWidth="lg" sx={{ mb: 8 }}>
				<Carousel
					navigation
					autoPlay={false}
					animation="slide"
					IndicatorIconProps={{ style: { color: "primary.main" } }}
				>
					{models.map((model) => (
						<Box
							key={model.id}
							component={RouterLink}
							to={`/models/${model.id}`}
							sx={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: 2,
								textDecoration: "none",
								transition: "all 0.3s ease",
							}}
						>
							<Box component="img" src={model.image} alt={model.name} />
							<Typography
								variant="h6"
								align="center"
								sx={{ mt: 2, color: "primary.light" }}
							>
								{model.name}
							</Typography>
						</Box>
					))}
				</Carousel>
			</Container>

			{/* CTA Section */}
			<Box sx={{ bgcolor: "grey.100", py: 8 }}>
				<Container maxWidth="lg">
					<Typography variant="h3" align="center" gutterBottom>
						重塑听觉体验，即刻启程
					</Typography>
					<Typography
						variant="h6"
						align="center"
						color="text.secondary"
						paragraph
					>
						立即预约听力专家咨询，开启清晰聆听之旅
					</Typography>
					<Box sx={{ textAlign: "center", mt: 3 }}>
						<Button
							component={RouterLink}
							to="/contact"
							variant="contained"
							size="large"
						>
							预约咨询
						</Button>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Home;
