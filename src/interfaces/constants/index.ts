import { SymbolInfoType } from "interfaces/others";

export interface SymbolDataType extends SymbolInfoType {
	index: number;
	name: string;
	dailyAcquisitionAmount: number;
	additionalMap?: string;
}
