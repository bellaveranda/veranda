import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useCustomization } from '@/context/Customization';

export default function Dropdown_LeftWall() {
  const { leftWallType, setLeftWallType, setLeftAwning } = useCustomization();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-full">
        <Command className="px-2">
          <CommandList className="text-left max-h-svh mt-2">
            <CommandGroup heading="Type linker wand" className="text-left ">
              <CommandItem className="flex mt-2 py-4 capitalize w-full items-center justify-start gap-4 border border-myColor">
                {leftWallType === 'notSpecified'
                  ? 'Niet gespecificeerd'
                  : leftWallType === 'fixedGlassWall'
                  ? 'Vast glazen wand'
                  : leftWallType === 'slidingDoor'
                  ? 'Schuifdeur'
                  : leftWallType === 'aluminium'
                  ? 'Aluminium wand'
                  : leftWallType === 'polycarbonate'
                  ? 'Polycarbonaatwand'
                  : 'Vorm'}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[92svw] sm:w-[45svw] md:w-[36svw] lg:w-[30svw] xl:w-[23svw] mx-auto z-[100000002]">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={leftWallType}
          onValueChange={(value) => {
            setLeftWallType(
              value as
                | 'notSpecified'
                | 'fixedGlassWall'
                | 'slidingDoor'
                | 'wedge'
                | 'aluminium'
                | 'polycarbonate'
            );
            value === 'notSpecified' ? setLeftAwning(false) : null;
          }}
        >
          <DropdownMenuRadioItem
            value="notSpecified"
            className={`flex gap-2 p-2 w-full items-center justify-start ${
              leftWallType === 'notSpecified' ? 'bg-myColor' : ''
            }`}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/Not specified.png"
              alt="Not specified"
            />
            <div>Niet gespecificeerd</div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="wedge"
            className={`flex gap-2 p-2 w-full items-center justify-start ${
              leftWallType === 'wedge' ? 'bg-myColor' : ''
            }`}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/Wedge.png"
              alt="Wedge"
            />
            <div>Vorm</div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="fixedGlassWall"
            className={`flex gap-2 p-2 w-full items-center justify-start ${
              leftWallType === 'fixedGlassWall' ? 'bg-myColor' : ''
            }`}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/Fixed glass wall.png"
              alt="Fixed glass wall"
            />
            <div>Vast glazen wand</div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="slidingDoor"
            className={`flex gap-2 p-2 w-full items-center justify-start ${
              leftWallType === 'slidingDoor' ? 'bg-myColor' : ''
            }`}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/Sliding door.png"
              alt="Sliding door"
            />
            <div>Schuifdeur</div>
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value="aluminium"
            className={`flex gap-2 p-2 w-full items-center justify-start ${
              leftWallType === 'aluminium' ? 'bg-myColor' : ''
            }`}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/Sliding door.png"
              alt="Sliding door"
            />
            <div>Aluminium wand</div>
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value="polycarbonate"
            className={`flex gap-2 p-2 w-full items-center justify-start ${
              leftWallType === 'polycarbonate' ? 'bg-myColor' : ''
            }`}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/Sliding door.png"
              alt="Sliding door"
            />
            <div>Polycarbonaatwand</div>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
