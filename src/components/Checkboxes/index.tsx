import { ARCANE_SYMBOL } from "constants/index";
import { CheckboxesPropsType } from "interfaces/components";

const Checkboxes = ({
	weeklyQuest,
	extraMap,
	checked,
	additionalMap,
	symbolType,
	setWeeklyQuest,
	setExtraMap,
	setChecked,
}: CheckboxesPropsType) => {
	const handleWeeklyQuest = () => {
		setWeeklyQuest(!weeklyQuest);
	};

	const handleExtraMap = () => {
		setExtraMap(!extraMap);
		setChecked(!checked);
	};

	return (
		<div>
			{additionalMap && (
				<>
					{additionalMap}?
					<input type="checkbox" checked={checked} onChange={handleExtraMap} />
				</>
			)}
			{symbolType === ARCANE_SYMBOL && (
				<>
					주간퀘?
					<input type="checkbox" onChange={handleWeeklyQuest} />
				</>
			)}
		</div>
	);
};

export default Checkboxes;
