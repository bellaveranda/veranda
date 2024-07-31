import { useCustomization } from "@/context/Customization";
import { CommandGroup } from "../../ui/command";
import { Input } from "../../ui/input";
import { useState, useEffect, ChangeEvent, FocusEvent } from "react";

export default function Width_Covering() {
  const { maxWidth, minWidth, width, setWidth } = useCustomization();
  const [inputValue, setInputValue] = useState<number>(width);

  useEffect(() => {
    setInputValue(width);
  }, [width]);

  const increaseWidth = () => {
    if (width < maxWidth) {
      const newWidth = width + 10;
      setWidth(newWidth);
      setInputValue(newWidth);
    }
  };

  const decreaseWidth = () => {
    if (width > minWidth) {
      const newWidth = width - 10;
      setWidth(newWidth);
      setInputValue(newWidth);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const handleUpdate = (e: FocusEvent<HTMLInputElement>) => {
    let value = parseInt(e.currentTarget.value, 10);
    if (isNaN(value)) {
      value = minWidth;
    }
    if (value < minWidth) value = minWidth;
    if (value > maxWidth) value = maxWidth;
    setWidth(value);
    setInputValue(value);
  };

  return (
    <CommandGroup heading="Breedte" className="text-left">
      <div className="flex ml-2 px-2 my-2 items-center justify-start gap-1 rounded-sm border border-myColor">
        <div
          onClick={increaseWidth}
          className="text-lg font-bold rounded-full bg-myColor cursor-pointer flex justify-center items-center w-8 h-6 select-none"
        >
          +
        </div>
        <div
          onClick={decreaseWidth}
          className="text-lg font-bold rounded-full bg-myColor cursor-pointer flex justify-center items-center w-8 h-6 select-none"
        >
          -
        </div>

        <Input
          type="number"
          className="text-right border-none focus-visible:ring-0"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleUpdate}
        />
        <div className="-ml-3 mb-[1px]">cm</div>
      </div>
    </CommandGroup>
  );
}
