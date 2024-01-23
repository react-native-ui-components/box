import {View, type ViewProps} from "react-native";

export const HBox = ({style, children, ...props}: ViewProps) => (
	<View {...props} style={[style, {flexDirection: "row"}]}>
		{children}
	</View>
);

export const Box = (props: ViewProps) => {
	const {style, children} = props;

	return (
		<View
			{...props}
			style={[
				{
					margin: 16,
					backgroundColor: "gray", //todo use color module (backgroundSecondary)
					borderRadius: 10
				},
				style
			]}
		>
			{children}
		</View>
	);
};
