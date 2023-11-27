import { ARCANE_SYMBOL } from "constants/index";
import { CheckboxesPropsType } from "interfaces/components";

const Checkboxes = ({
	weeklyQuest,
	extraMap,
	isWeeklyQuestChecked,
	additionalMap,
	symbolType,
	setWeeklyQuest,
	setExtraMap,
	setIsWeeklyQuestChecked,
}: CheckboxesPropsType) => {
	const handleWeeklyQuest = () => {
		setWeeklyQuest(!weeklyQuest);
	};

	const handleExtraMap = () => {
		setExtraMap(!extraMap);
		setIsWeeklyQuestChecked(!isWeeklyQuestChecked);
	};

	return (
		<div>
			{additionalMap && (
				<>
					{additionalMap}?
					<input
						type="checkbox"
						checked={isWeeklyQuestChecked}
						onChange={handleExtraMap}
					/>
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
