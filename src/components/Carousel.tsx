import React from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

interface CarouselProps {
	children: React.ReactNode;
	navigation?: boolean;
	autoPlay?: boolean;
	animation?: "slide" | "fade";
	IndicatorIconProps?: React.ComponentProps<"div">;
}

const Carousel = ({
	children,
	navigation = true,
	autoPlay = false,
	animation = "slide",
	IndicatorIconProps,
}: CarouselProps) => {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const childrenArray = React.Children.toArray(children);

	const handleNext = () => {
		setActiveIndex((prev) => (prev + 1) % childrenArray.length);
	};

	const handlePrev = () => {
		setActiveIndex(
			(prev) => (prev - 1 + childrenArray.length) % childrenArray.length
		);
	};

	return (
		<Box position="relative" width="100%" overflow="hidden">
			<Box
				display="flex"
				style={{
					transform: `translateX(-${activeIndex * 100}%)`,
					transition: "transform 0.5s",
				}}
			>
				{children}
			</Box>

			{navigation && (
				<>
					<IconButton
						onClick={handlePrev}
						style={{
							position: "absolute",
							left: 16,
							top: "50%",
							transform: "translateY(-50%)",
						}}
					>
						<ArrowBackIos />
					</IconButton>
					<IconButton
						onClick={handleNext}
						style={{
							position: "absolute",
							right: 16,
							top: "50%",
							transform: "translateY(-50%)",
						}}
					>
						<ArrowForwardIos />
					</IconButton>
				</>
			)}
		</Box>
	);
};

export default Carousel;
