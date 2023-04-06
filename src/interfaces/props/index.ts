import { SymbolDataType } from "interfaces/constants";
import { ResultType, InputValuesType, SymbolInfoType } from "interfaces/others";

export interface InputsPropsType extends InputValuesType {
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface SymbolPropsType extends SymbolDataType {
	index: number;
	checked: boolean;
	setIndex: React.Dispatch<React.SetStateAction<number>>;
	setSymbolInfo: React.Dispatch<React.SetStateAction<SymbolInfoType>>;
	setChecked: React.Dispatch<React.SetStateAction<boolean>>;
	setExtraMap: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ResultPropsType extends ResultType {
	isCalculated: boolean;
	isInRange: boolean;
}
