import { useState, ChangeEvent, FormEvent } from "react";
import {
	Container,
	Typography,
	Grid,
	Paper,
	TextField,
	Button,
	Box,
	Snackbar,
	Alert,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

interface FormData {
	name: string;
	email: string;
	phone: string;
	message: string;
}

interface SnackbarState {
	open: boolean;
	message: string;
	severity: "success" | "error" | "warning" | "info";
}

function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [snackbar, setSnackbar] = useState<SnackbarState>({
		open: false,
		message: "",
		severity: "success",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Here we would typically send the form data to the backend
		console.log("Form submitted:", formData);
		setSnackbar({
			open: true,
			message: "Thank you for your message. We will contact you soon!",
			severity: "success",
		});
		setFormData({
			name: "",
			email: "",
			phone: "",
			message: "",
		});
	};

	const handleCloseSnackbar = () => {
		setSnackbar((prev) => ({ ...prev, open: false }));
	};

	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Typography variant="h2" component="h1" align="center" gutterBottom>
				Contact Us
			</Typography>
			<Typography
				variant="h5"
				align="center"
				color="text.secondary"
				paragraph
				sx={{ mb: 6 }}
			>
				Get in touch with our hearing aid experts
			</Typography>

			<Grid container spacing={4}>
				<Grid item xs={12} md={4}>
					<Paper sx={{ p: 3, height: "100%" }}>
						<Box sx={{ mb: 4 }}>
							<LocationOnIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
							<Typography variant="h6" gutterBottom>
								Visit Us
							</Typography>
							<Typography variant="body1">
								123 Hearing Center Street
								<br />
								Suite 100
								<br />
								City, State 12345
							</Typography>
						</Box>

						<Box sx={{ mb: 4 }}>
							<PhoneIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
							<Typography variant="h6" gutterBottom>
								Call Us
							</Typography>
							<Typography variant="body1">
								Toll-free: (800) 123-4567
								<br />
								Local: (555) 123-4567
							</Typography>
						</Box>

						<Box>
							<EmailIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
							<Typography variant="h6" gutterBottom>
								Email Us
							</Typography>
							<Typography variant="body1">
								info@hearingaidshowcase.com
								<br />
								support@hearingaidshowcase.com
							</Typography>
						</Box>
					</Paper>
				</Grid>

				<Grid item xs={12} md={8}>
					<Paper sx={{ p: 3 }}>
						<Typography variant="h4" gutterBottom>
							Send Us a Message
						</Typography>
						<form onSubmit={handleSubmit}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										fullWidth
										label="Your Name"
										name="name"
										value={formData.name}
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										fullWidth
										label="Your Email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label="Phone Number"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										multiline
										rows={4}
										label="Your Message"
										name="message"
										value={formData.message}
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<Button
										type="submit"
										variant="contained"
										size="large"
										fullWidth
									>
										Send Message
									</Button>
								</Grid>
							</Grid>
						</form>
					</Paper>
				</Grid>
			</Grid>

			<Snackbar
				open={snackbar.open}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity={snackbar.severity}
					sx={{ width: "100%" }}
				>
					{snackbar.message}
				</Alert>
			</Snackbar>
		</Container>
	);
}

export default Contact;
