import { SymbolType } from "constants/index";
import { SymbolInfoType, InputValuesType } from "interfaces/others";

export interface calculateRequiredCostOptions extends SymbolInfoType {
	symbolLevel: number;
}

export interface calculateRequiredSymbolCountOptions extends InputValuesType {
	symbolType: SymbolType;
}
