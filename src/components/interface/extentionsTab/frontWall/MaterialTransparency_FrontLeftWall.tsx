import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useCustomization } from '@/context/Customization';

export default function MaterialTransparency_FrontLeftWall() {
  const {
    frontLeftWallType,
    frontLeftMaterialTransparency,
    setFrontLeftMaterialTransparency,
  } = useCustomization();

  return (
    <>
      {!(
        frontLeftWallType === 'notSpecified' || frontLeftWallType === 'awning'
      ) && (
        <Command className="px-2">
          <CommandList className="text-left max-h-svh mt-2">
            <CommandGroup heading="Transparantie" className="text-left">
              <CommandItem
                onSelect={() => setFrontLeftMaterialTransparency('clear')}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                  frontLeftMaterialTransparency === 'clear'
                    ? 'border border-myColor'
                    : ''
                }`}
              >
                <div>Helder</div>
              </CommandItem>
              <CommandItem
                onSelect={() => setFrontLeftMaterialTransparency('opal')}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                  frontLeftMaterialTransparency === 'opal'
                    ? 'border border-myColor'
                    : ''
                }`}
              >
                <div>Opaal</div>
              </CommandItem>
              <CommandItem
                onSelect={() => setFrontLeftMaterialTransparency('tinted')}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                  frontLeftMaterialTransparency === 'tinted'
                    ? 'border border-myColor'
                    : ''
                }`}
              >
                <div>Gekleurd</div>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      )}
    </>
  );
}
