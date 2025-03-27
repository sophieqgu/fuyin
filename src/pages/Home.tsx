import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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
								Experience Sound Like Never Before
							</Typography>
							<Typography variant="h5" paragraph>
								Discover our revolutionary hearing aids that combine
								cutting-edge technology with elegant design.
							</Typography>
							<Button
								component={RouterLink}
								to="/models"
								variant="contained"
								color="secondary"
								size="large"
								sx={{ mt: 2 }}
							>
								Explore Our Models
							</Button>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Features Section */}
			<Container maxWidth="lg" sx={{ mb: 8 }}>
				<Grid container spacing={4}>
					<Grid item xs={12} md={4}>
						<Paper
							sx={{
								p: 3,
								height: "100%",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
							}}
						>
							<Typography variant="h5" gutterBottom>
								Advanced Technology
							</Typography>
							<Typography>
								State-of-the-art noise reduction and sound processing
								technology.
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper
							sx={{
								p: 3,
								height: "100%",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
							}}
						>
							<Typography variant="h5" gutterBottom>
								Comfort & Style
							</Typography>
							<Typography>
								Ergonomic design that combines comfort with elegant aesthetics.
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper
							sx={{
								p: 3,
								height: "100%",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
							}}
						>
							<Typography variant="h5" gutterBottom>
								Personalized Care
							</Typography>
							<Typography>
								Custom fitting and ongoing support for optimal hearing
								experience.
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Container>

			{/* CTA Section */}
			<Box sx={{ bgcolor: "grey.100", py: 8 }}>
				<Container maxWidth="lg">
					<Typography variant="h3" align="center" gutterBottom>
						Ready to Transform Your Hearing?
					</Typography>
					<Typography
						variant="h6"
						align="center"
						color="text.secondary"
						paragraph
					>
						Schedule a consultation with our hearing experts today.
					</Typography>
					<Box sx={{ textAlign: "center", mt: 3 }}>
						<Button
							component={RouterLink}
							to="/contact"
							variant="contained"
							size="large"
						>
							Contact Us
						</Button>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Home;
