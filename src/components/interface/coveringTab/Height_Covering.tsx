import { useCustomization } from "@/context/Customization";
import { CommandGroup } from "../../ui/command";
import { Input } from "../../ui/input";
import { useState, useEffect, ChangeEvent, FocusEvent } from "react";

export default function Height_Covering() {
  const { maxHeight, minHeight, height, setHeight } = useCustomization();
  const [inputValue, setInputValue] = useState<number>(height);

  useEffect(() => {
    setInputValue(height);
  }, [height]);

  const increaseHeight = () => {
    if (height < maxHeight) {
      const newHeight = height + 10;
      setHeight(newHeight);
      setInputValue(newHeight);
    }
  };

  const decreaseHeight = () => {
    if (height > minHeight) {
      const newHeight = height - 10;
      setHeight(newHeight);
      setInputValue(newHeight);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setInputValue(value);
  };

  const handleUpdate = (e: FocusEvent<HTMLInputElement>) => {
    let value = parseInt(e.currentTarget.value, 10);
    if (isNaN(value)) {
      value = minHeight;
    }
    if (value < minHeight) value = minHeight;
    if (value > maxHeight) value = maxHeight;

    setHeight(value);
    setInputValue(value);
  };

  return (
    <CommandGroup heading="Hoogte aan de muur" className="text-left">
      <div className="flex ml-2 px-2 my-2 items-center justify-start gap-1 rounded-sm border border-myColor">
        <div
          onClick={increaseHeight}
          className="text-lg font-bold rounded-full bg-myColor cursor-pointer flex justify-center items-center w-8 h-6 select-none"
        >
          +
        </div>
        <div
          onClick={decreaseHeight}
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
