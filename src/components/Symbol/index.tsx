import { SymbolPropsType } from "interfaces/props";

const Symbol = ({
	index,
	name,
	checked,
	symbolType,
	baseCost,
	additionalCost,
	setIndex,
	setSymbolInfo,
	setExtraMap,
	setChecked,
}: SymbolPropsType) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const parsedValue = parseInt(e.target.value);
		setIndex(parsedValue);
		setChecked(false);
		setSymbolInfo({ symbolType, baseCost, additionalCost });
		if (checked) {
			setExtraMap(false);
		}
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
