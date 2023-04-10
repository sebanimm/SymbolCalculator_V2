import { SymbolPropsType } from "interfaces/components";

const Symbol = ({
	index,
	name,
	isWeeklyQuestChecked,
	symbolType,
	baseCost,
	additionalCost,
	setIndex,
	setSymbolInfo,
	setExtraMap,
	setIsWeeklyQuestChecked,
}: SymbolPropsType) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const parsedValue = parseInt(e.target.value);
		setIndex(parsedValue);
		setIsWeeklyQuestChecked(false);
		setSymbolInfo({ symbolType, baseCost, additionalCost });
		if (isWeeklyQuestChecked) {
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
