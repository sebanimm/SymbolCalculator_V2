import { SymbolDataType } from "interfaces/others";

export enum SymbolType {
	Default = "Default",
	Arcane = "Arcane",
	Authentic = "Authentic",
}

export const ARCANE_SYMBOL: SymbolType = SymbolType.Arcane;

export const AUTHENTIC_SYMBOL: SymbolType = SymbolType.Authentic;

export const DEFAULT: SymbolType = SymbolType.Default;

export const symbolData: SymbolDataType[] = [
	{
		name: "Vanishing",
		symbolType: ARCANE_SYMBOL,
		baseCost: 3_110_000,
		additionalCost: 3_960_000,
	},
	{
		name: "ChewChew",
		symbolType: ARCANE_SYMBOL,
		baseCost: 6_220_000,
		additionalCost: 4_620_000,
	},
	{
		name: "Lacheln",
		symbolType: ARCANE_SYMBOL,
		baseCost: 9_330_000,
		additionalCost: 5_280_000,
	},
	{
		name: "Arcana",
		symbolType: ARCANE_SYMBOL,
		baseCost: 11_196_000,
		additionalCost: 5_940_000,
	},
	{
		name: "Morass",
		symbolType: ARCANE_SYMBOL,
		baseCost: 11_196_000,
		additionalCost: 5_940_000,
	},
	{
		name: "Esfera",
		symbolType: ARCANE_SYMBOL,
		baseCost: 11_196_000,
		additionalCost: 5_940_000,
	},
	{
		name: "Cernium",
		symbolType: AUTHENTIC_SYMBOL,
		baseCost: 96_900_000,
		additionalCost: 88_500_000,
	},
	{
		name: "Arcs",
		symbolType: AUTHENTIC_SYMBOL,
		baseCost: 106_600_000,
		additionalCost: 97_300_000,
	},
	{
		name: "Odium",
		symbolType: AUTHENTIC_SYMBOL,
		baseCost: 117_400_000,
		additionalCost: 107_100_000,
	},
];
