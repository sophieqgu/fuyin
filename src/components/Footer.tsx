import { Box, Container, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				py: 6,
				px: 2,
				mt: "auto",
				bgColor: "background.paper",
				borderTop: 1,
				borderColor: "divider",
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={4} justifyContent="space-between">
					<Grid item xs={12} sm={6} md={3}>
						<Typography variant="h6" color="text.primary" gutterBottom>
							Fuyin
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Innovative hearing solutions for better living.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Typography variant="h6" color="text.primary" gutterBottom>
							Products
						</Typography>
						<Link href="/models" color="inherit" display="block">
							All Models
						</Link>
						<Link href="/models/premium" color="inherit" display="block">
							Premium Series
						</Link>
						<Link href="/models/essential" color="inherit" display="block">
							Essential Series
						</Link>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Typography variant="h6" color="text.primary" gutterBottom>
							Company
						</Typography>
						<Link href="/about" color="inherit" display="block">
							About Us
						</Link>
						<Link href="/contact" color="inherit" display="block">
							Contact
						</Link>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Typography variant="h6" color="text.primary" gutterBottom>
							Legal
						</Typography>
						<Link href="/privacy" color="inherit" display="block">
							Privacy Policy
						</Link>
						<Link href="/terms" color="inherit" display="block">
							Terms of Use
						</Link>
					</Grid>
				</Grid>
				<Typography
					variant="body2"
					color="text.secondary"
					align="center"
					sx={{ mt: 4 }}
				>
					© {new Date().getFullYear()} Fuyin. All rights reserved.
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
