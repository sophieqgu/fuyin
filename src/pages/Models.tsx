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

export const models: Model[] = [
	{
		id: "premium-1",
		name: "Naida P 美人鱼·天朗",
		category: "premium",
		description:
			"峰力美人鱼·天朗助听器搭载全新的PRISM芯片，力求营造最舒适最真实的聆听环境，让每一位用户都能尽情享受助听器带来的美妙体验。",
		price: "$2,999",
		image: "https://www.phonak.com.cn/i/product/Naida-Paradise/title-pc.png",
	},
	{
		id: "premium-2",
		name: "Audeo P 奥笛·天朗",
		category: "premium",
		description:
			"峰力奥笛·天朗助听器搭载全新一代PRISM芯片，在声音处理上更为细致自然。同时新增听觉运动传感功能，让声音更具空间感。无论身处宁静或者喧嚣，让聆听重新成为一种享受。",
		price: "$3,499",
		image: "https://www.phonak.com.cn/i/product/Audeo-Paradise/title-pc.jpg",
	},
	{
		id: "essential-1",
		name: "Sky M 美人鱼·神采",
		category: "essential",
		description:
			"峰力美人鱼 ∙ 神采助听器可与手机等各种电子设备直连，充电款产品解决了更换电池的麻烦，为学习和生活提供了便捷途径，让孩子可以在充满爱的声音世界中成长。",
		price: "$1,499",
		image: "https://www.phonak.com.cn/i/product/sky-m/title-pc.jpg",
	},
	{
		id: "essential-2",
		name: "Naida M | Bolero M 芭蕾·神采",
		category: "essential",
		description:
			"峰力芭蕾 ∙ 神采助听器专注与为成人提供完善的听力解决方案。立体声聚焦有效降低听配能，丰富的直连功能能够方便地免提接听电话、观看影片。让成年人工作、生活两不误。",
		price: "$1,999",
		image: "https://www.phonak.com.cn/i/product/naida-m/title-pc.jpg",
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

	const filteredModels = models.filter((model) => {
		if (category === "all") return true;
		return model.category === category;
	});

	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Typography variant="h2" component="h1" align="center" gutterBottom>
				全部型号
			</Typography>
			<Typography variant="h5" align="center" color="text.secondary" paragraph>
				探索全系列创新听力解决方案
			</Typography>

			<Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
				<Tabs
					value={category}
					onChange={handleCategoryChange}
					centered
					indicatorColor="primary"
					textColor="primary"
				>
					<Tab label="全部型号" value="all" />
					<Tab label="尊享系列" value="premium" />
					<Tab label="基础系列" value="essential" />
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
