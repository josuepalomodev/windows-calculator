import {Icon} from "@fluentui/react/lib/Icon";

interface CalculatorProps {
	close: () => void;
}

export default function Calculator({close}: CalculatorProps) {
	return (
		<div className="min-w-[320px] max-w-screen min-h-[500] max-h-screen text-white bg-dark-charcoal">
			<div className="flex justify-between items-center text-xs">
				<div className="flex space-x-4 ml-5">
					<Icon iconName="calculator"/>
					<div className="">Calculator</div>
				</div>
				<div className="flex">
					<button className="px-4 py-2">
						<Icon iconName="remove"></Icon>
					</button>
					<button className="px-4">
						<Icon iconName="stop"></Icon>
					</button>
					<button className="px-4">
						<Icon iconName="cancel" onClick={close}></Icon>
					</button>
				</div>
			</div>
		</div>
	)
}