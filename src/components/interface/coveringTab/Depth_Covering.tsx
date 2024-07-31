import { useCustomization } from "@/context/Customization";
import { CommandGroup } from "../../ui/command";
import { Input } from "../../ui/input";
import { useState, useEffect, ChangeEvent, FocusEvent } from "react";

export default function Depth_Covering() {
  const { maxDepth, minDepth, depth, setDepth } = useCustomization();
  const [inputValue, setInputValue] = useState<number>(depth);

  useEffect(() => {
    setInputValue(depth);
  }, [depth]);

  const increaseDepth = () => {
    if (depth < maxDepth) {
      const newDepth = depth + 10;
      setDepth(newDepth);
      setInputValue(newDepth);
    }
  };

  const decreaseDepth = () => {
    if (depth > minDepth) {
      const newDepth = depth - 10;
      setDepth(newDepth);
      setInputValue(newDepth);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const handleUpdate = (e: FocusEvent<HTMLInputElement>) => {
    let value = parseInt(e.currentTarget.value, 10);
    if (isNaN(value)) {
      value = minDepth;
    }
    if (value < minDepth) value = minDepth;
    if (value > maxDepth) value = maxDepth;
    setDepth(value);
    setInputValue(value);
  };

  return (
    <CommandGroup heading="Diepte" className="text-left">
      <div className="flex ml-2 px-2 my-2 items-center justify-start gap-1 rounded-sm border border-myColor">
        <div
          onClick={increaseDepth}
          className="text-lg font-bold rounded-full bg-myColor cursor-pointer flex justify-center items-center w-8 h-6 select-none"
        >
          +
        </div>
        <div
          onClick={decreaseDepth}
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
