import { InputsPropsType } from "interfaces/props";

const Inputs = ({ symbolLevel, symbolCount, handleChange }: InputsPropsType) => {
	return (
		<div>
			<input
				type="number"
				name="symbolLevel"
				maxLength={2}
				value={symbolLevel}
				onChange={handleChange}
			/>
			<input
				type="number"
				name="symbolCount"
				maxLength={4}
				value={symbolCount}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Inputs;
