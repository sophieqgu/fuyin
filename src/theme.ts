import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#CAD2C5",
			light: "#84A98C",
			dark: "#52796F",
			contrastText: "#354F52",
		},
		secondary: {
			main: "#2F3E46",
		},
		background: {
			default: "#ffffff",
			paper: "#CAD2C5",
		},
		text: {
			primary: "#2F3E46",
			secondary: "rgba(0, 0, 0, 0.6)",
		},
	},
	typography: {
		fontFamily: ["Noto Sans SC", "Noto Sans", "sans-serif"].join(","),
		h1: {
			fontSize: "2.5rem",
			fontWeight: 700,
		},
		h2: {
			fontSize: "2rem",
			fontWeight: 700,
		},
		h3: {
			fontSize: "1.75rem",
			fontWeight: 700,
		},
		h4: {
			fontSize: "1.5rem",
			fontWeight: 700,
		},
		h5: {
			fontSize: "1.25rem",
			fontWeight: 700,
		},
		h6: {
			fontSize: "1rem",
			fontWeight: 700,
		},
		body1: {
			fontSize: "1rem",
		},
		body2: {
			fontSize: "0.875rem",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 96,
					textTransform: "none",
					fontWeight: 600,
					padding: "12px 24px",
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "#ffffff",
					color: "rgba(0, 0, 0, 0.87)",
				},
			},
		},
	},
});

export default theme;
