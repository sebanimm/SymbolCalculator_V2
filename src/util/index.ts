import {
	calculateRequiredCostOptions,
	calculateRequiredDaysOptions,
	calculateRequiredSymbolCountOptions,
	getMaxRequiredCostOptions,
	getTotalRequiredCostOptions,
} from "interfaces/util";
import { ARCANE_SYMBOL, SYMBOL_DATA, SymbolType } from "constants/index";

export const calculateRequiredCost = (options: calculateRequiredCostOptions) => {
	const { symbolType, symbolLevel, baseCost, additionalCost } = options;
	const maxSymbolLv = symbolType === ARCANE_SYMBOL ? 20 : 11;
	const maxRequiredCost = getMaxRequiredCost({ baseCost, maxSymbolLv, additionalCost });
	const totalRequiredCost = getTotalRequiredCost({
		baseCost,
		symbolLevel,
		additionalCost,
	});
	const requiredCost = maxRequiredCost - totalRequiredCost;

	return requiredCost;
};

export const calculateRequiredSymbolCount = (
	options: calculateRequiredSymbolCountOptions
) => {
	const { symbolType, symbolLevel, symbolCount } = options;
	const maxRequiredCount = symbolType === ARCANE_SYMBOL ? 2679 : 4565;
	const symbolUpCount = getSymbolUpCount(symbolType, symbolLevel);
	const requiredCount = maxRequiredCount - (symbolUpCount + symbolCount);

	return requiredCount;
};

export const calculateRequiredDays = (options: calculateRequiredDaysOptions) => {
	const { index, symbolType, symbolLevel, symbolCount, weeklyQuest } = options;
	const maxRequiredCount = symbolType === ARCANE_SYMBOL ? 2679 : 4565;
	const symbolUpCount = getSymbolUpCount(symbolType, symbolLevel);
	const dailyAcquisitionAmount = SYMBOL_DATA[index].dailyAcquisitionAmount;
	const requiredCount = maxRequiredCount - (symbolUpCount + symbolCount);
	const requiredDays = Math.ceil(
		weeklyQuest
			? requiredCount / (dailyAcquisitionAmount + 45 / 7)
			: requiredCount / dailyAcquisitionAmount
	);

	return requiredDays;
};

const getSymbolUpCount = (symbolType: SymbolType, symbolLevel: number) => {
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
	return symbolUpCount;
};

const getMaxRequiredCost = (options: getMaxRequiredCostOptions) => {
	const { baseCost, maxSymbolLv, additionalCost } = options;
	let maxRequiredCost = 0;
	let nextLevelUpgradeCost = baseCost;

	for (let i = 1; i < maxSymbolLv; i++) {
		nextLevelUpgradeCost += additionalCost;
		maxRequiredCost += nextLevelUpgradeCost;
	}

	return maxRequiredCost;
};

const getTotalRequiredCost = (options: getTotalRequiredCostOptions) => {
	const { baseCost, symbolLevel, additionalCost } = options;
	let totalRequiredCost = 0;
	let nextLevelUpgradeCost = baseCost;

	for (let i = 1; i < symbolLevel; i++) {
		nextLevelUpgradeCost += additionalCost;
		totalRequiredCost += nextLevelUpgradeCost;
	}

	return totalRequiredCost;
};
