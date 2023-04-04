import {
	calculateRequiredCostOptions,
	calculateRequiredDaysOptions,
	calculateRequiredSymbolCountOptions,
} from "interfaces/calculator";
import { ARCANE_SYMBOL, SYMBOL_DATA } from "constants/index";

class SymbolCalculator {
	static calculateRequiredCost(options: calculateRequiredCostOptions) {
		const { symbolType, symbolLevel, baseCost, additionalCost } = options;
		const maxSymbolLv = symbolType === ARCANE_SYMBOL ? 20 : 11;
		let maxRequiredCost = 0;
		let nextLevelUpgradeCost = baseCost;
		let totalRequiredCost = 0;

		for (let i = 1; i < maxSymbolLv; i++) {
			nextLevelUpgradeCost += additionalCost;
			maxRequiredCost += nextLevelUpgradeCost;
		}

		nextLevelUpgradeCost = baseCost;

		for (let i = 1; i < symbolLevel; i++) {
			nextLevelUpgradeCost += additionalCost;
			totalRequiredCost += nextLevelUpgradeCost;
		}

		const requiredCost = maxRequiredCost - totalRequiredCost;

		return requiredCost;
	}

	static calculateRequiredSymbolCount(options: calculateRequiredSymbolCountOptions) {
		const { symbolType, symbolLevel, symbolCount } = options;
		const maxRequiredCount = symbolType === ARCANE_SYMBOL ? 2679 : 4565;
		let symbolUpCount = 0;

		if (symbolType === ARCANE_SYMBOL) {
			for (let i = 1; i < symbolLevel; i++) {
				symbolUpCount += i ** 2 + 11;
			}
		} else {
			for (let i = 1; i < symbolLevel; i++) {
				symbolUpCount += 9 * i ** 2 + 20 * i;
			}
		}

		const requiredCount = maxRequiredCount - (symbolUpCount + symbolCount);

		return requiredCount;
	}

	static calculateRequiredDays(options: calculateRequiredDaysOptions) {
		const { index, symbolType, symbolLevel, symbolCount, weeklyQuest } = options;
		const maxRequiredCount = symbolType === ARCANE_SYMBOL ? 2679 : 4565;
		let symbolUpCount = 0;

		if (symbolType === ARCANE_SYMBOL) {
			for (let i = 1; i < symbolLevel; i++) {
				symbolUpCount += i ** 2 + 11;
			}
		} else {
			for (let i = 1; i < symbolLevel; i++) {
				symbolUpCount += 9 * i ** 2 + 20 * i;
			}
		}
		const dailyAcquisitionAmount = SYMBOL_DATA[index].dailyAcquisitionAmount;
		const requiredCount = maxRequiredCount - (symbolUpCount + symbolCount);

		const requiredDays = Math.ceil(
			weeklyQuest
				? requiredCount / (dailyAcquisitionAmount + 45 / 7)
				: requiredCount / dailyAcquisitionAmount
		);

		return requiredDays;
	}
}

export default SymbolCalculator;
