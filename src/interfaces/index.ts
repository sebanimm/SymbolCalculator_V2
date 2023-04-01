import { SymbolType } from "constants/index";

export interface SymbolDataType {
	name: string;
	symbolType: SymbolType;
	baseCost: number;
	additionalCost: number;
}

export interface SymbolPropsType extends SymbolDataType {
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

export interface calculateRequiredCostOptions extends SymbolInfoType {
	symbolLevel: number;
}

export interface calculateRequiredSymbolCountOptions extends InputValuesType {
	symbolType: SymbolType;
}

export interface ResultType {
	requiredCount: number;
	requiredCostIn100M: number;
	requiredCostIn10K: number;
}

export interface ResultPropsType extends ResultType {
	isCalculated: boolean;
}

export interface InputsPropsType extends InputValuesType {
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
