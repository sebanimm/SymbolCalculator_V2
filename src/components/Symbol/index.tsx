import { SymbolPropsType } from "interfaces/props";

const Symbol = ({
	index,
	name,
	symbolType,
	baseCost,
	additionalCost,
	setIndex,
	setSymbolInfo,
}: SymbolPropsType) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const parsedValue = parseInt(e.target.value);
		setIndex(parsedValue);
		setSymbolInfo({ symbolType, baseCost, additionalCost });
	};

	return (
		<div>
			<label htmlFor={name}>
				<img src={`/images/${symbolType.split("_", 1)}/${name}.png`} alt={name} />
			</label>
			<input type="radio" id={name} value={index} name="symbol" onChange={handleChange} />
		</div>
	);
};

export default Symbol;
