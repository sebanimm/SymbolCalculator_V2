import { SymbolPropsType } from "interfaces/components";

const Symbol = ({
	index,
	name,
	symbolType,
	baseCost,
	additionalCost,
	isWeeklyQuestChecked,
	setIndex,
	setSymbolInfo,
	setExtraMap,
	setIsWeeklyQuestChecked,
}: SymbolPropsType) => {
	const ImagePath = `/images/${symbolType.split("_", 1)}/${name}.png`;

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
				<img src={`${ImagePath}`} alt={name} title={name} />
			</label>
			<input type="radio" id={name} value={index} name="symbol" onChange={handleChange} />
		</div>
	);
};

export default Symbol;
