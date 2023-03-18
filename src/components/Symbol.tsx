import { SymbolPropsType } from "types";

const Symbol = ({
	name,
	symbolType,
	defaultMeso,
	symbolUpMeso,
	setSymbolInfo,
}: SymbolPropsType) => {
	const handleChange = () => {
		setSymbolInfo({ symbolType, defaultMeso, symbolUpMeso });
	};

	return (
		<div>
			<label htmlFor={name}>
				<img src={`/images/${symbolType.split("_", 1)}/${name}.png`} alt={name} />
			</label>
			<input type="radio" id={name} name="symbol" onChange={handleChange} />
		</div>
	);
};

export default Symbol;
