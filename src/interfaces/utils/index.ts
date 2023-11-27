import { SymbolType } from "constants/index";
import { SymbolInfoType, InputValuesType } from "interfaces/others";

export interface calculateRequiredCostOptions extends SymbolInfoType {
	symbolLevel: number;
}

export interface calculateRequiredSymbolCountOptions extends InputValuesType {
	symbolType: SymbolType;
}

export interface calculateRequiredDaysOptions
	extends calculateRequiredSymbolCountOptions {
	index: number;
	weeklyQuest: boolean;
	extraMap: boolean;
}

export interface getMaxRequiredCostOptions {
	baseCost: number;
	maxSymbolLv: number;
	additionalCost: number;
}

export interface getTotalRequiredCostOptions {
	baseCost: number;
	symbolLevel: number;
	additionalCost: number;
}
