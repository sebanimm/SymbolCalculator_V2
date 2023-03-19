import React, { useState } from "react";
import { SymbolInfoType, InputValuesType } from "interfaces";
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
	const [isClicked, setIsClicked] = useState<Boolean>(false);

	const { symbolLevel, symbolCount } = inputValues;
	const { symbolType, baseCost, additionalCost } = symbolInfo;

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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, maxLength } = e.target;
		const parsedValue = Number(value);
		if (value.length > maxLength || isNaN(parsedValue)) return;
		setInputValues({ ...inputValues, [name]: parsedValue });
		setIsClicked(false);
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
			<button onClick={() => setIsClicked(true)}>계산하기</button>
			<br />
			<br />
			{isClicked && (
				<div>
					{requiredCount <= 0 || symbolCount < 0 || symbolLevel <= 0 ? (
						"심볼 범위 초과함"
					) : symbolType === DEFAULT ? (
						"심볼고르셈"
					) : (
						<div>
							{`${requiredCount}개 남음`}
							<br />
							{baseCost === 1 ? (
								`심볼 선택하셈`
							) : (
								<>
									{requiredCostIn100M === 0 ? "" : `${requiredCostIn100M}억`}
									{`${requiredCostIn10K}만 메소 필요함`}
								</>
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default App;
