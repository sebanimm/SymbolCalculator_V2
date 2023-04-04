import React, { useState } from "react";
import { SymbolInfoType, InputValuesType, ResultType } from "interfaces/others";
import { ARCANE_SYMBOL, DEFAULT, SYMBOL_DATA } from "constants/index";
import {
	calculateRequiredCost,
	calculateRequiredSymbolCount,
	calculateRequiredDays,
} from "util/index";
import Symbol from "components/Symbol";
import Result from "components/Result";
import Inputs from "components/Inputs";

const App = () => {
	const [isCalculated, setIsCalculated] = useState<boolean>(false);
	const [isInRange, setIsInRange] = useState<boolean>(false);
	const [index, setIndex] = useState<number>(0);
	const [weeklyQuest, setWeeklyQuest] = useState<boolean>(false);
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, maxLength } = e.target;
		const parsedValue = Number(value);
		if (value.length > maxLength || isNaN(parsedValue)) return;
		setInputValues({ ...inputValues, [name]: parsedValue });
	};

	const handleCheckbox = () => {
		setWeeklyQuest(!weeklyQuest);
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
				{SYMBOL_DATA.map((obj, idx) => {
					return (
						<Symbol
							key={idx}
							index={idx}
							{...obj}
							setIndex={setIndex}
							setSymbolInfo={setSymbolInfo}
						/>
					);
				})}
			</div>
			<Inputs {...inputValues} handleChange={handleChange} />
			{symbolType === ARCANE_SYMBOL && (
				<div>
					주간퀘?
					<input type="checkbox" onChange={handleCheckbox} />
				</div>
			)}
			<button onClick={handleButtonClick}>계산하기</button>
			<Result isCalculated={isCalculated} isInRange={isInRange} {...result} />
		</div>
	);
};

export default App;
