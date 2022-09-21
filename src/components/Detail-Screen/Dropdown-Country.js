import { memo } from "react";
import SelectDropdown from "react-native-select-dropdown";
import IconAD from "react-native-vector-icons/AntDesign";
import {
	otherColor,
	textPrimary,
	textSecondary,
} from "../../utils/Color-Pallete";

const DropdownCountry = (props) => {
	const buttonStyle = {
		backgroundColor: otherColor,
		borderRadius: 10,
		elevation: 3,
		width: 350,
	};

	const buttonTextStyle = {
		color: textPrimary,
	};

	const dropdownIcon = () => {
		return (
			<IconAD
				name='caretdown'
				size={20}
				color={textPrimary}
				style={{ elevation: 10 }}
			/>
		);
	};

	const dropdownStyle = {
		backgroundColor: otherColor,
		color: textPrimary,
	};

	const selectedRowStyle = {
		backgroundColor: textSecondary,
		elevation: 5,
		borderRadius: 10,
	};

	const selectedRowTextStyle = {
		color: otherColor,
	};

	return (
		<SelectDropdown
			defaultButtonText='Select Country'
			data={props.countries}
			onSelect={(selectedItem, index) => {
				props.handleChange(selectedItem);
			}}
			buttonTextAfterSelection={(selectedItem, index) => {
				// text represented after item is selected
				// if data array is an array of objects then return selectedItem.property to render after item is selected
				return selectedItem;
			}}
			rowTextForSelection={(item, index) => {
				// text represented for each item in dropdown
				// if data array is an array of objects then return item.property to represent item in dropdown
				return item;
			}}
			buttonStyle={buttonStyle}
			buttonTextStyle={buttonTextStyle}
			dropdownOverlayColor='none'
			renderDropdownIcon={dropdownIcon}
			dropdownStyle={dropdownStyle}
			selectedRowStyle={selectedRowStyle}
			selectedRowTextStyle={selectedRowTextStyle}
		/>
	);
};

export default memo(DropdownCountry);
