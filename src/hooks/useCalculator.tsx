import {useState} from "react";

export default function useCalculator() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function openCalculator(): void {
		if (!isOpen) setIsOpen(true);
	}

	function closeCalculator(): void {
		if (isOpen) setIsOpen(false);
	}

	return {isOpen, openCalculator, closeCalculator};
}