import { SymbolType } from "constants/index";

export interface SymbolInfoType {
	symbolType: SymbolType;
	baseCost: number;
	additionalCost: number;
}

export interface SymbolDataType extends SymbolInfoType {
	name: string;
	dailyAcquisitionAmount: number;
}

export interface InputValuesType {
	symbolLevel: number;
	symbolCount: number;
}

export interface ResultType {
	requiredCount: number;
	requiredCostIn100M: number;
	requiredCostIn10K: number;
	requiredDays: number;
}
