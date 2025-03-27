import { Container, Typography, Grid, Box, Paper } from "@mui/material";

const About: React.FC = () => {
	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Typography variant="h2" component="h1" align="center" gutterBottom>
				About Us
			</Typography>
			<Typography variant="h5" align="center" color="text.secondary" paragraph>
				Dedicated to Improving Lives Through Better Hearing
			</Typography>

			<Grid container spacing={4} sx={{ mt: 4 }}>
				<Grid item xs={12} md={6}>
					<Paper sx={{ p: 4, height: "100%" }}>
						<Typography variant="h4" gutterBottom>
							Our Mission
						</Typography>
						<Typography variant="body1" paragraph>
							We are committed to providing innovative hearing solutions that
							enhance the quality of life for people with hearing loss. Our
							advanced technology and dedication to excellence ensure that our
							customers receive the best possible hearing experience.
						</Typography>
						<Typography variant="body1">
							With years of experience in hearing aid technology, we understand
							the unique needs of each individual and strive to deliver
							personalized solutions that make a real difference in their daily
							lives.
						</Typography>
					</Paper>
				</Grid>

				<Grid item xs={12} md={6}>
					<Paper sx={{ p: 4, height: "100%" }}>
						<Typography variant="h4" gutterBottom>
							Our Technology
						</Typography>
						<Typography variant="body1" paragraph>
							We invest heavily in research and development to create hearing
							aids that incorporate the latest advancements in audio technology.
							Our products feature:
						</Typography>
						<Box component="ul" sx={{ pl: 2 }}>
							<Typography component="li" variant="body1" paragraph>
								Advanced noise reduction algorithms
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Bluetooth connectivity for seamless device integration
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Adaptive feedback cancellation
							</Typography>
							<Typography component="li" variant="body1" paragraph>
								Customizable sound profiles
							</Typography>
						</Box>
					</Paper>
				</Grid>

				<Grid item xs={12}>
					<Paper sx={{ p: 4, mt: 4 }}>
						<Typography variant="h4" gutterBottom>
							Our Commitment
						</Typography>
						<Typography variant="body1" paragraph>
							We believe that everyone deserves access to quality hearing
							solutions. Our commitment extends beyond just selling hearing aids
							- we provide comprehensive support, including:
						</Typography>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6} md={3}>
								<Box sx={{ textAlign: "center" }}>
									<Typography variant="h6" gutterBottom>
										Expert Consultation
									</Typography>
									<Typography variant="body2">
										Professional guidance in choosing the right hearing aid
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<Box sx={{ textAlign: "center" }}>
									<Typography variant="h6" gutterBottom>
										Custom Fitting
									</Typography>
									<Typography variant="body2">
										Personalized fitting and adjustment services
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<Box sx={{ textAlign: "center" }}>
									<Typography variant="h6" gutterBottom>
										Ongoing Support
									</Typography>
									<Typography variant="body2">
										Regular check-ups and maintenance services
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<Box sx={{ textAlign: "center" }}>
									<Typography variant="h6" gutterBottom>
										Warranty Coverage
									</Typography>
									<Typography variant="body2">
										Comprehensive warranty and protection plans
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default About;
