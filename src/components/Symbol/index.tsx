import { SymbolPropsType } from "interfaces/props";

const Symbol = ({
	name,
	symbolType,
	baseCost,
	additionalCost,
	setSymbolInfo,
}: SymbolPropsType) => {
	const handleChange = () => {
		setSymbolInfo({ symbolType, baseCost, additionalCost });
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
