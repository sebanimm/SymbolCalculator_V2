import { SymbolType } from "constants/index";

export interface SymbolDataType {
	name: string;
	symbolType: SymbolType;
	baseCost: number;
	additionalCost: number;
}

export interface SymbolPropsType {
	name: string;
	symbolType: SymbolType;
	baseCost: number;
	additionalCost: number;
	setSymbolInfo: React.Dispatch<React.SetStateAction<SymbolInfoType>>;
}

export interface InputValuesType {
	symbolLevel: number;
	symbolCount: number;
}

export interface SymbolInfoType {
	symbolType: SymbolType;
	baseCost: number;
	additionalCost: number;
}

export interface calculateRequiredCostOptions {
	symbolType: SymbolType;
	symbolLevel: number;
	baseCost: number;
	additionalCost: number;
}

export interface calculateRequiredSymbolCountOptions {
	symbolType: SymbolType;
	symbolLevel: number;
	symbolCount: number;
}
