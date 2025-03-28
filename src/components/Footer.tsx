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
						<Typography variant="body2" color="text.secondary">
							创新听力解决方案，品质生活之选
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Typography variant="h6" color="text.primary" gutterBottom>
							产品
						</Typography>
						<Link href="/models" color="inherit" display="block">
							全部型号
						</Link>
						<Link href="/models/premium" color="inherit" display="block">
							尊享系列
						</Link>
						<Link href="/models/essential" color="inherit" display="block">
							基础系列
						</Link>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Typography variant="h6" color="text.primary" gutterBottom>
							公司
						</Typography>
						<Link href="/about" color="inherit" display="block">
							关于我们
						</Link>
						<Link href="/contact" color="inherit" display="block">
							联系我们
						</Link>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Typography variant="h6" color="text.primary" gutterBottom>
							法律条款
						</Typography>
						<Link href="/privacy" color="inherit" display="block">
							隐私政策
						</Link>
						<Link href="/terms" color="inherit" display="block">
							用户协议
						</Link>
					</Grid>
				</Grid>
				<Typography
					variant="body2"
					color="text.secondary"
					align="center"
					sx={{ mt: 4 }}
				>
					© {new Date().getFullYear()} 新疆福音 版权所有
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
