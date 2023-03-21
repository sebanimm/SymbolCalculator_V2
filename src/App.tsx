import React, { useState } from "react";
import { SymbolInfoType, InputValuesType, ResultType } from "interfaces";
import { DEFAULT, symbolData } from "constants/index";
import SymbolCalculator from "calculator";
import Symbol from "components/Symbol";

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
		requiredCount: -1,
		requiredCostIn100M: -1,
		requiredCostIn10K: -1,
	});
	const { symbolLevel, symbolCount } = inputValues;
	const { symbolType, baseCost, additionalCost } = symbolInfo;

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
		setResult({ requiredCount, requiredCostIn100M, requiredCostIn10K });
	};

	return (
		<div>
			<div>
				{symbolData.map((obj, idx) => {
					return (
						<Symbol
							key={idx}
							name={obj.name}
							symbolType={obj.symbolType}
							baseCost={obj.baseCost}
							additionalCost={obj.additionalCost}
							setSymbolInfo={setSymbolInfo}
						/>
					);
				})}
			</div>
			<input
				type="number"
				name="symbolLevel"
				maxLength={2}
				value={symbolLevel}
				onChange={handleChange}
			/>
			<input
				type="number"
				name="symbolCount"
				maxLength={4}
				value={symbolCount}
				onChange={handleChange}
			/>
			<br />
			<button onClick={handleButtonClick}>계산하기</button>
			<br />
			<br />
			<div>
				심볼 {result.requiredCount}개 더 필요함
				<br />
				{result.requiredCostIn100M}억{result.requiredCostIn10K}만 메소 더 필요함
				<br />
			</div>
		</div>
	);
};

export default App;
