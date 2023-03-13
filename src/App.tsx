import React, { useState } from "react";

type SymbolType = "Arcane" | "Authentic";

const ARCANE_SYMBOL = "Arcane";
const AUTHENTIC_SYMBOL = "Authentic";

type CalculateRequiredMesoOptions = {
	userSymbolLv: number;
	defaultMeso: number;
	symbolUpMeso: number;
	maxSymbolMeso: number;
};

type CalculateRequiredCostOptions = {
	symbolType: SymbolType;
	userSymbolLv: number;
	userSymbolCount: number;
};

class SymbolCalculator {
	public static calculateRequiredMeso(options: CalculateRequiredMesoOptions) {
		const { userSymbolLv, defaultMeso, symbolUpMeso, maxSymbolMeso } = options;
		let symbolUpRequiredMeso = defaultMeso;
		let requiredMeso = 0;
		for (let i = 0; i < userSymbolLv; i++) {
			symbolUpRequiredMeso += symbolUpMeso;
			requiredMeso += symbolUpRequiredMeso;
		}
		console.log(`최대: ${maxSymbolMeso}, 다음 렙업 필요:${symbolUpRequiredMeso} 총 필요량: ${requiredMeso}`);
	}

	public static calculateRequiredCost(options: CalculateRequiredCostOptions) {
		const { symbolType, userSymbolLv, userSymbolCount } = options;
		const maxSymbolCost = symbolType === ARCANE_SYMBOL ? 2679 : 4565;
		let symbolUpCost = 0;
		const firstCoefficient = symbolType === ARCANE_SYMBOL ? 1 : 9;
		const secondCoefficient = symbolType === ARCANE_SYMBOL ? 11 : 20;

		for (let i = 1; i < userSymbolLv; i++) {
			symbolUpCost += firstCoefficient * i ** 2 + i * secondCoefficient;
		}

		const requiredCost = maxSymbolCost - (symbolUpCost + userSymbolCount);
		return requiredCost;
	}
}

type InputValues = {
	userSymbolLv: number;
	userSymbolCount: number;
};

const App = () => {
	const [inputs, setInputs] = useState<InputValues>({
		userSymbolLv: 1,
		userSymbolCount: 0,
	});

	const { userSymbolLv, userSymbolCount } = inputs;
	const requiredCost = SymbolCalculator.calculateRequiredCost({
		symbolType: AUTHENTIC_SYMBOL,
		userSymbolLv,
		userSymbolCount,
	});
	const requiredMeso = SymbolCalculator.calculateRequiredMeso({
		userSymbolLv,
		defaultMeso: 3_110_000,
		symbolUpMeso: 3_960_000,
		maxSymbolMeso: 811_490_000,
	});
	console.log(requiredMeso);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, maxLength } = e.target;
		const parsedValue = Number(value);
		if (value.length > maxLength || isNaN(parsedValue)) return;
		setInputs({ ...inputs, [name]: parsedValue });
	};

	return (
		<div>
			<div>
				<div>
					<label htmlFor="symbolVanishing">
						<img src="/images/Arcane/Vanishing.png" title="소멸의 여로" alt="소멸의 여로" />
					</label>
					<input type="checkbox" value="1" id="symbolVanishing" />
				</div>
				<div>
					<label htmlFor="symbolChewChew">
						<img src="/images/Arcane/ChewChew.png" title="츄츄 아일랜드" alt="츄츄 아일랜드" />
					</label>
					<input type="checkbox" id="symbolChewChew" value="2" />
				</div>
				<div>
					<label htmlFor="symbolLacheln">
						<img src="/images/Arcane/Lacheln.png" title="레헬른" alt="레헬른" />
					</label>
					<input type="checkbox" id="symbolLacheln" value="3" />
				</div>
				<div>
					<label htmlFor="symbolArcana">
						<img src="/images/Arcane/Arcana.png" title="아르카나" alt="아르카나" />
					</label>
					<input type="checkbox" id="symbolArcana" value="4" />
				</div>
				<div>
					<label htmlFor="symbolMorass">
						<img src="/images/Arcane/Morass.png" title="모라스" alt="모라스" />
					</label>
					<input type="checkbox" id="symbolMorass" value="5" />
				</div>
				<div>
					<label htmlFor="symbolEsfera">
						<img src="/images/Arcane/Esfera.png" title="에스페라" alt="에스페라" />
					</label>
					<input type="checkbox" id="symbolEsfera" value="6" />
				</div>
				<div>
					<label htmlFor="symbolCernium">
						<img src="/images/Authentic/Cernium.png" title="세르니움" alt="세르니움" />
					</label>
					<input type="checkbox" id="symbolCernium" value="7" />
				</div>
				<div>
					<label htmlFor="symbolArcs">
						<img src="/images/Authentic/Arcs.png" title="호텔 아르크스" alt="호텔 아르크스" />
					</label>
					<input type="checkbox" id="symbolArcs" value="8" />
				</div>
				<div>
					<label htmlFor="symbolOdium">
						<img src="/images/Authentic/Odium.png" title="오디움" alt="오디움" />
					</label>
					<input type="checkbox" id="symbolOdium" value="9" />
				</div>
			</div>
			<input
				type="number"
				name="userSymbolLv"
				maxLength={2}
				value={userSymbolLv}
				placeholder="1 ~ 20"
				onChange={handleChange}
			/>
			<input
				type="number"
				name="userSymbolCount"
				maxLength={4}
				value={userSymbolCount}
				placeholder="0 ~ 2679"
				onChange={handleChange}
			/>
			<br />
			<br />
			<br />
			<br />
			<div>{requiredCost < 0 ? "입력잘못함" : `${requiredCost}개 남음`}</div>
		</div>
	);
};

export default App;
