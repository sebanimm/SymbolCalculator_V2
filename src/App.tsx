import React, { useState } from "react";
import { SymbolInfoType, InputValuesType, ResultType } from "interfaces/others";
import { DEFAULT, symbolData } from "constants/index";
import SymbolCalculator from "calculator";
import Symbol from "components/Symbol";
import Result from "components/Result";
import Inputs from "components/Inputs";

const App = () => {
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
	});
	const [isCalculated, setIsCalculated] = useState<boolean>(false);
	const [isInRange, setIsInRange] = useState<boolean>(false);

	const { symbolType, baseCost, additionalCost } = symbolInfo;
	const { symbolLevel, symbolCount } = inputValues;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, maxLength } = e.target;
		const parsedValue = Number(value);
		if (value.length > maxLength || isNaN(parsedValue)) return;
		setInputValues({ ...inputValues, [name]: parsedValue });
	};

	const handleButtonClick = () => {
		const requiredCount = SymbolCalculator.calculateRequiredSymbolCount({
			symbolType,
			symbolLevel,
			symbolCount,
		});
		const requiredCost = SymbolCalculator.calculateRequiredCost({
			symbolType,
			symbolLevel,
			baseCost,
			additionalCost,
		});
		const requiredCostIn100M = Math.floor(requiredCost / 100_000_000);
		const requiredCostIn10K = Math.floor((requiredCost % 100_000_000) / 10000);

		setResult({
			requiredCount,
			requiredCostIn100M,
			requiredCostIn10K,
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
				{symbolData.map((obj, idx) => {
					return <Symbol key={idx} {...obj} setSymbolInfo={setSymbolInfo} />;
				})}
			</div>
			<Inputs {...inputValues} handleChange={handleChange} />
			<button onClick={handleButtonClick}>계산하기</button>
			<Result isCalculated={isCalculated} isInRange={isInRange} {...result} />
		</div>
	);
};

export default App;
