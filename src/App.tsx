import React, { useState } from "react";
import { SymbolInfoType, InputValuesType, ResultType } from "interfaces/others";
import { ARCANE_SYMBOL, AUTHENTIC_SYMBOL, DEFAULT, SYMBOL_DATA } from "constants/index";
import {
	calculateRequiredCost,
	calculateRequiredSymbolCount,
	calculateRequiredDays,
} from "utils/index";
import Symbol from "components/Symbol";
import Result from "components/Result";
import Inputs from "components/Inputs";
import Checkboxes from "components/Checkboxes";

const App = () => {
	const [isCalculated, setIsCalculated] = useState<boolean>(false);
	const [isInRange, setIsInRange] = useState<boolean>(false);
	const [index, setIndex] = useState<number>(8);
	const [weeklyQuest, setWeeklyQuest] = useState<boolean>(false);
	const [extraMap, setExtraMap] = useState<boolean>(false);
	const [isWeeklyQuestChecked, setIsWeeklyQuestChecked] = useState<boolean>(false);
	const [symbolInfo, setSymbolInfo] = useState<SymbolInfoType>({
		symbolType: DEFAULT,
		baseCost: 1,
		additionalCost: 1,
	});
	const [inputValues, setInputValues] = useState<InputValuesType>({
		symbolLevel: 1,
		symbolCount: 0,
	});
	const [result, setResult] = useState<ResultType>({
		requiredCount: 0,
		requiredCostIn100M: 0,
		requiredCostIn10K: 0,
		requiredDays: 0,
	});

	const { symbolType, baseCost, additionalCost } = symbolInfo;
	const { symbolLevel, symbolCount } = inputValues;
	const additionalMap = SYMBOL_DATA[index].additionalMap;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, maxLength } = e.target;
		const parsedValue = Number(value);
		if (value.length > maxLength || isNaN(parsedValue)) return;
		setInputValues({ ...inputValues, [name]: parsedValue });
	};

	const handleButtonClick = () => {
		const requiredCount = calculateRequiredSymbolCount({
			symbolType,
			symbolLevel,
			symbolCount,
		});
		const requiredCost = calculateRequiredCost({
			symbolType,
			symbolLevel,
			baseCost,
			additionalCost,
		});
		const requiredDays = calculateRequiredDays({
			index,
			symbolType,
			symbolLevel,
			symbolCount,
			weeklyQuest,
			extraMap,
		});
		const requiredCostIn100M = Math.floor(requiredCost / 100_000_000);
		const requiredCostIn10K = Math.floor((requiredCost % 100_000_000) / 10000);

		setResult({
			requiredCount,
			requiredCostIn100M,
			requiredCostIn10K,
			requiredDays,
		});

		if (requiredCost > 65) {
			setIsCalculated(true);
		}

		if (symbolLevel > 0) {
			setIsInRange(true);
		} else {
			setIsInRange(false);
		}
	};

	return (
		<div>
			<div>
				{SYMBOL_DATA.filter((o) => o.symbolType === ARCANE_SYMBOL).map((o, i) => (
					<Symbol
						key={o.name}
						index={i}
						isWeeklyQuestChecked={isWeeklyQuestChecked}
						{...o}
						setIndex={setIndex}
						setSymbolInfo={setSymbolInfo}
						setIsWeeklyQuestChecked={setIsWeeklyQuestChecked}
						setExtraMap={setExtraMap}
					/>
				))}
			</div>
			<div>
				{SYMBOL_DATA.filter((o) => o.symbolType === AUTHENTIC_SYMBOL).map((o, i) => (
					<Symbol
						key={o.name}
						index={i}
						isWeeklyQuestChecked={isWeeklyQuestChecked}
						{...o}
						setIndex={setIndex}
						setSymbolInfo={setSymbolInfo}
						setIsWeeklyQuestChecked={setIsWeeklyQuestChecked}
						setExtraMap={setExtraMap}
					/>
				))}
			</div>
			<Inputs {...inputValues} handleChange={handleChange} />
			<Checkboxes
				weeklyQuest={weeklyQuest}
				extraMap={extraMap}
				isWeeklyQuestChecked={isWeeklyQuestChecked}
				additionalMap={additionalMap}
				symbolType={symbolType}
				setWeeklyQuest={setWeeklyQuest}
				setExtraMap={setExtraMap}
				setIsWeeklyQuestChecked={setIsWeeklyQuestChecked}
			/>
			<button onClick={handleButtonClick}>황혐시발롬</button>
			<Result isCalculated={isCalculated} isInRange={isInRange} {...result} />
		</div>
	);
};

export default App;
