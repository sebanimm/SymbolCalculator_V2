export type SymbolType = "Arcane" | "Authentic" | "Default";

export interface SymbolPropsType {
	name: string;
	symbolType: SymbolType;
	defaultMeso: number;
	symbolUpMeso: number;
	setSymbolInfo: React.Dispatch<React.SetStateAction<SymbolInfoType>>;
}

export interface InputValuesType {
	userSymbolLv: number;
	userSymbolCount: number;
}

export interface SymbolInfoType {
	symbolType: SymbolType;
	defaultMeso: number;
	symbolUpMeso: number;
}

export interface CalculateRequiredMesoOptions {
	symbolType: SymbolType;
	userSymbolLv: number;
	defaultMeso: number;
	symbolUpMeso: number;
}

export interface CalculateRequiredCostOptions {
	symbolType: SymbolType;
	userSymbolLv: number;
	userSymbolCount: number;
}
