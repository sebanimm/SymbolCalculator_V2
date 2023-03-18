import React, { useState } from "react";
import {
	SymbolType,
	CalculateRequiredMesoOptions,
	CalculateRequiredCostOptions,
	SymbolInfoType,
	InputValuesType,
} from "types";
import Symbol from "components/Symbol";

const ARCANE_SYMBOL: SymbolType = "Arcane";
const AUTHENTIC_SYMBOL: SymbolType = "Authentic";
const DEFAULT: SymbolType = "Default";
const symbolData = [
	{
		name: "Vanishing",
		symbolType: ARCANE_SYMBOL,
		defaultMeso: 3_110_000,
		symbolUpMeso: 3_960_000,
	},
	{
		name: "ChewChew",
		symbolType: ARCANE_SYMBOL,
		defaultMeso: 6_220_000,
		symbolUpMeso: 4_620_000,
	},
	{
		name: "Lacheln",
		symbolType: ARCANE_SYMBOL,
		defaultMeso: 9_330_000,
		symbolUpMeso: 5_280_000,
	},
	{
		name: "Arcana",
		symbolType: ARCANE_SYMBOL,
		defaultMeso: 11_196_000,
		symbolUpMeso: 5_940_000,
	},
	{
		name: "Morass",
		symbolType: ARCANE_SYMBOL,
		defaultMeso: 11_196_000,
		symbolUpMeso: 5_940_000,
	},
	{
		name: "Esfera",
		symbolType: ARCANE_SYMBOL,
		defaultMeso: 11_196_000,
		symbolUpMeso: 5_940_000,
	},
	{
		name: "Cernium",
		symbolType: AUTHENTIC_SYMBOL,
		defaultMeso: 96_900_000,
		symbolUpMeso: 88_500_000,
	},
	{
		name: "Arcs",
		symbolType: AUTHENTIC_SYMBOL,
		defaultMeso: 106_600_000,
		symbolUpMeso: 97_300_000,
	},
	{
		name: "Odium",
		symbolType: AUTHENTIC_SYMBOL,
		defaultMeso: 117_400_000,
		symbolUpMeso: 107_100_000,
	},
];

class SymbolCalculator {
	static calculateRequiredMeso(options: CalculateRequiredMesoOptions) {
		const { symbolType, userSymbolLv, defaultMeso, symbolUpMeso } = options;
		const maxSymbolLv = symbolType === ARCANE_SYMBOL ? 20 : 11;
		let maxRequiredMeso = 0;
		let nextLvUpgradeMeso = defaultMeso;
		let requiredMeso = 0;

		for (let i = 1; i < maxSymbolLv; i++) {
			nextLvUpgradeMeso += symbolUpMeso;
			maxRequiredMeso += nextLvUpgradeMeso;
		}

		nextLvUpgradeMeso = defaultMeso;

		for (let i = 1; i < userSymbolLv; i++) {
			nextLvUpgradeMeso += symbolUpMeso;
			requiredMeso += nextLvUpgradeMeso;
		}

		return maxRequiredMeso - requiredMeso;
	}

	static calculateRequiredCost(options: CalculateRequiredCostOptions) {
		const { symbolType, userSymbolLv, userSymbolCount } = options;
		const maxRequiredCost = symbolType === ARCANE_SYMBOL ? 2679 : 4565;
		let symbolUpCost = 0;

		if (symbolType === ARCANE_SYMBOL) {
			for (let i = 1; i < userSymbolLv; i++) {
				symbolUpCost += i ** 2 + 11;
			}
		} else {
			for (let i = 1; i < userSymbolLv; i++) {
				symbolUpCost += 9 * i ** 2 + 20 * i;
			}
		}

		const requiredCost = maxRequiredCost - (symbolUpCost + userSymbolCount);
		return requiredCost;
	}
}

const App = () => {
	const [symbolInfo, setSymbolInfo] = useState<SymbolInfoType>({
		symbolType: DEFAULT,
		defaultMeso: 1,
		symbolUpMeso: 1,
	});
	const [inputValues, setInputValues] = useState<InputValuesType>({
		userSymbolLv: 1,
		userSymbolCount: 0,
	});
	const [isClicked, setIsClicked] = useState<Boolean>(false);

	const { userSymbolLv, userSymbolCount } = inputValues;
	const { symbolType, defaultMeso, symbolUpMeso } = symbolInfo;

	const requiredCost = SymbolCalculator.calculateRequiredCost({
		symbolType,
		userSymbolLv,
		userSymbolCount,
	});
	const requiredMeso = SymbolCalculator.calculateRequiredMeso({
		symbolType,
		userSymbolLv,
		defaultMeso,
		symbolUpMeso,
	});
	const requiredMeso100M = Math.floor(requiredMeso / 100_000_000);
	const requiredMeso10K = Math.floor((requiredMeso % 100_000_000) / 10000);

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
							defaultMeso={obj.defaultMeso}
							symbolUpMeso={obj.symbolUpMeso}
							setSymbolInfo={setSymbolInfo}
						/>
					);
				})}
			</div>
			<input
				type="number"
				name="userSymbolLv"
				maxLength={2}
				value={userSymbolLv}
				onChange={handleChange}
			/>
			<input
				type="number"
				name="userSymbolCount"
				maxLength={4}
				value={userSymbolCount}
				onChange={handleChange}
			/>
			<br />
			<button onClick={() => setIsClicked(true)}>계산하기</button>
			<br />
			<br />
			{isClicked && (
				<div>
					{requiredCost <= 0 || userSymbolCount < 0 || userSymbolLv <= 0 ? (
						"심볼 범위 초과함"
					) : symbolType === DEFAULT ? (
						"심볼고르셈"
					) : (
						<div>
							{`${requiredCost}개 남음`}
							<br />
							{defaultMeso === 1 ? (
								`심볼 선택하셈`
							) : (
								<>
									{requiredMeso100M === 0 ? "" : `${requiredMeso100M}억`}
									{`${requiredMeso10K}만 메소 필요함`}
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
