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

export default function Dropdown_FrontWall() {
  const { frontWallType, setFrontWallType } = useCustomization();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-full">
        <Command className="px-2">
          <CommandList className="text-left max-h-svh mt-2">
            <CommandGroup
              heading="Type front linker wand"
              className="text-left "
            >
              <CommandItem className="flex mt-2 py-4 capitalize w-full items-center justify-start gap-4 border border-myColor">
                {frontWallType === 'notSpecified'
                  ? 'Niet gespecificeerd'
                  : frontWallType === 'fixedGlassWall'
                  ? 'Vast glazen wand'
                  : frontWallType === 'slidingDoor'
                  ? 'Schuifdeur'
                  : 'Verticale zonwering'}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[92svw] sm:w-[45svw] md:w-[36svw] lg:w-[30svw] xl:w-[23svw] mx-auto z-[100000002]">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={frontWallType}
          onValueChange={(value) => {
            setFrontWallType(
              value as
                | 'notSpecified'
                | 'fixedGlassWall'
                | 'slidingDoor'
                | 'awning'
            );
          }}
        >
          <DropdownMenuRadioItem
            value="notSpecified"
            className={`flex gap-2 p-2 w-full items-center justify-start ${
              frontWallType === 'notSpecified' ? 'bg-myColor' : ''
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
            value="fixedGlassWall"
            className={`flex gap-2 p-2 w-full items-center justify-start ${
              frontWallType === 'fixedGlassWall' ? 'bg-myColor' : ''
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
              frontWallType === 'slidingDoor' ? 'bg-myColor' : ''
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
            value="awning"
            className={`flex gap-2 p-2 w-full items-center justify-start ${
              frontWallType === 'awning' ? 'bg-myColor' : ''
            }`}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/verticalAwning.png"
              alt="Vertical Awning"
            />
            <div>Verticale zonwering</div>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
