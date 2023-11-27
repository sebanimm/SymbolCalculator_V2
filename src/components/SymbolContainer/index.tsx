import { SYMBOL_DATA, ARCANE_SYMBOL, AUTHENTIC_SYMBOL } from "constants/index";
import Symbol from "components/Symbol";

const SymbolContainer = ({
	isWeeklyQuestChecked,
	setIndex,
	setSymbolInfo,
	setIsWeeklyQuestChecked,
	setExtraMap,
}: any) => {
	return (
		<>
			<div>
				{SYMBOL_DATA.filter((o) => o.symbolType === ARCANE_SYMBOL).map((o) => (
					<Symbol
						key={o.name}
						{...o}
						isWeeklyQuestChecked={isWeeklyQuestChecked}
						setIndex={setIndex}
						setSymbolInfo={setSymbolInfo}
						setIsWeeklyQuestChecked={setIsWeeklyQuestChecked}
						setExtraMap={setExtraMap}
					/>
				))}
			</div>
			<div>
				{SYMBOL_DATA.filter((o) => o.symbolType === AUTHENTIC_SYMBOL).map((o) => (
					<Symbol
						key={o.name}
						{...o}
						isWeeklyQuestChecked={isWeeklyQuestChecked}
						setIndex={setIndex}
						setSymbolInfo={setSymbolInfo}
						setIsWeeklyQuestChecked={setIsWeeklyQuestChecked}
						setExtraMap={setExtraMap}
					/>
				))}
			</div>
		</>
	);
};

export default SymbolContainer;
