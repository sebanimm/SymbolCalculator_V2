import { ResultPropsType } from "interfaces/props";

const Result = ({
	isCalculated,
	isInRange,
	requiredCount,
	requiredCostIn100M,
	requiredCostIn10K,
}: ResultPropsType) => {
	return (
		<div>
			{isCalculated &&
				(requiredCount > 0 && isInRange === true ? (
					<div>
						심볼은 {requiredCount}개가 더 필요합니다.
						<br />
						메소는 {requiredCostIn100M}억{requiredCostIn10K}만 메소가 더 필요합니다.
						<br />
					</div>
				) : (
					<div>범위를 초과했습니다.</div>
				))}
		</div>
	);
};

export default Result;
