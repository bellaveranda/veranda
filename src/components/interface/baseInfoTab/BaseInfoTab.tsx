import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useCustomization } from "@/context/Customization";

export default function BaseInfoTab() {
  const {
    model,
    setModel,
    freeStanding,
    setFreeStanding,
    standardType,
    setStandardType,
  } = useCustomization();

  return (
    <Command className="px-2">
      <CommandList className="text-left max-h-svh my-8 sm:my-12 scrollbar-none overflow-y-auto">
        <CommandGroup heading="Model Type" className="text-left">
          <CommandItem
            onSelect={() => setModel("standradVeranda")}
            className={`flex p-2 w-full items-center justify-start gap-4 cursor-pointer my-2 ${
              model === "standradVeranda" ? "border border-myColor" : ""
            } `}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/standard veranda.png"
              alt="standard veranda"
            />
            <div>Standaard Veranda</div>
          </CommandItem>
          <CommandItem
            onSelect={() => setModel("square")}
            className={`flex p-2 w-full items-center justify-start gap-4 cursor-pointer my-2 ${
              model === "square" ? "border border-myColor" : ""
            } `}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/square.png"
              alt="square"
            />
            <div>Vierkant</div>
          </CommandItem>
          <CommandItem
            onSelect={() => setModel("slattedRoof")}
            className={`flex p-2 w-full items-center justify-start gap-4 cursor-pointer my-2 ${
              model === "slattedRoof" ? "border border-myColor" : ""
            } `}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/slatted.png"
              alt="slatted"
            />
            <div>Lattenbodem</div>
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading="Bouw Type" className="text-left">
          <CommandItem
            onSelect={() => setFreeStanding(false)}
            className={`flex p-2 w-full items-center justify-start gap-4 cursor-pointer my-2 ${
              freeStanding ? "" : "border border-myColor"
            }`}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/wall mounting.png"
              alt="wall mounting"
            />
            <div>Wand Montage</div>
          </CommandItem>
          <CommandItem
            onSelect={() => setFreeStanding(true)}
            className={`flex p-2 w-full items-center justify-start gap-4 cursor-pointer my-2 ${
              freeStanding ? "border border-myColor" : ""
            }`}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/freeStanding.png"
              alt="free standing"
            />
            <div>Vrijstaand</div>
          </CommandItem>
        </CommandGroup>

        {model === "standradVeranda" && (
          <CommandGroup heading="Gutter" className="text-left">
            <CommandItem
              onSelect={() => setStandardType("round")}
              className={`flex p-2 w-full items-center justify-start gap-4 cursor-pointer my-2 ${
                standardType === "round" ? "border border-myColor" : ""
              }`}
            >
              <img
                className="w-16 h-16 rounded-sm"
                src="./images/round.png"
                alt="round"
              />
              <div>Round</div>
            </CommandItem>
            <CommandItem
              onSelect={() => setStandardType("crate")}
              className={`flex p-2 w-full items-center justify-start gap-4 cursor-pointer my-2 ${
                standardType === "crate" ? "border border-myColor" : ""
              }`}
            >
              <img
                className="w-16 h-16 rounded-sm"
                src="./images/straight.png"
                alt="straight"
              />
              <div>Crate</div>
            </CommandItem>
          </CommandGroup>
        )}
      </CommandList>
    </Command>
  );
}
