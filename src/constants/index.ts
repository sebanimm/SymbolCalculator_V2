import { SymbolDataType } from "interfaces/constants";

export enum SymbolType {
	Default = "Default",
	Arcane = "Arcane",
	Authentic = "Authentic",
}

export const ARCANE_SYMBOL: SymbolType = SymbolType.Arcane;

export const AUTHENTIC_SYMBOL: SymbolType = SymbolType.Authentic;

export const DEFAULT: SymbolType = SymbolType.Default;

export const SYMBOL_DATA: SymbolDataType[] = [
	{
		index: 0,
		name: "Vanishing",
		symbolType: ARCANE_SYMBOL,
		baseCost: 3_110_000,
		additionalCost: 3_960_000,
		dailyAcquisitionAmount: 9,
		additionalMap: "리버스 시티",
	},
	{
		index: 1,
		name: "ChewChew",
		symbolType: ARCANE_SYMBOL,
		baseCost: 6_220_000,
		additionalCost: 4_620_000,
		dailyAcquisitionAmount: 8,
		additionalMap: "얌얌",
	},
	{
		index: 2,
		name: "Lacheln",
		symbolType: ARCANE_SYMBOL,
		baseCost: 9_330_000,
		additionalCost: 5_280_000,
		dailyAcquisitionAmount: 11,
	},
	{
		index: 3,
		name: "Arcana",
		symbolType: ARCANE_SYMBOL,
		baseCost: 11_196_000,
		additionalCost: 5_940_000,
		dailyAcquisitionAmount: 9,
	},
	{
		index: 4,
		name: "Morass",
		symbolType: ARCANE_SYMBOL,
		baseCost: 11_196_000,
		additionalCost: 5_940_000,
		dailyAcquisitionAmount: 8,
	},
	{
		index: 5,
		name: "Esfera",
		symbolType: ARCANE_SYMBOL,
		baseCost: 11_196_000,
		additionalCost: 5_940_000,
		dailyAcquisitionAmount: 8,
	},
	{
		index: 6,
		name: "Cernium",
		symbolType: AUTHENTIC_SYMBOL,
		baseCost: 96_900_000,
		additionalCost: 88_500_000,
		dailyAcquisitionAmount: 10,
		additionalMap: "후르니움",
	},
	{
		index: 7,
		name: "Arcs",
		symbolType: AUTHENTIC_SYMBOL,
		baseCost: 106_600_000,
		additionalCost: 97_300_000,
		dailyAcquisitionAmount: 10,
	},
	{
		index: 8,
		name: "Odium",
		symbolType: AUTHENTIC_SYMBOL,
		baseCost: 117_400_000,
		additionalCost: 107_100_000,
		dailyAcquisitionAmount: 5,
	},
];
