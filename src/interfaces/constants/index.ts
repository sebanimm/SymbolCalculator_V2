import { SymbolInfoType } from "interfaces/others";

export interface SymbolDataType extends SymbolInfoType {
	name: string;
	dailyAcquisitionAmount: number;
	additionalMap?: string;
}
