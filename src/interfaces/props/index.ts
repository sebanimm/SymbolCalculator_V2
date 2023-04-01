import {
	ResultType,
	InputValuesType,
	SymbolDataType,
	SymbolInfoType,
} from "interfaces/others";

export interface InputsPropsType extends InputValuesType {
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface SymbolPropsType extends SymbolDataType {
	setSymbolInfo: React.Dispatch<React.SetStateAction<SymbolInfoType>>;
}

export interface ResultPropsType extends ResultType {
	isCalculated: boolean;
}
