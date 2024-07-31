import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useCustomization } from '@/context/Customization';

export default function MaterialTransparency_FrontRightWall() {
  const {
    frontRightWallType,
    frontRightMaterialTransparency,
    setFrontRightMaterialTransparency,
  } = useCustomization();

  return (
    <>
      {!(
        frontRightWallType === 'notSpecified' || frontRightWallType === 'awning'
      ) && (
        <Command className="px-2">
          <CommandList className="text-left max-h-svh mt-2">
            <CommandGroup heading="Transparantie" className="text-left">
              <CommandItem
                onSelect={() => setFrontRightMaterialTransparency('clear')}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                  frontRightMaterialTransparency === 'clear'
                    ? 'border border-myColor'
                    : ''
                }`}
              >
                <div>Helder</div>
              </CommandItem>
              <CommandItem
                onSelect={() => setFrontRightMaterialTransparency('opal')}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                  frontRightMaterialTransparency === 'opal'
                    ? 'border border-myColor'
                    : ''
                }`}
              >
                <div>Opaal</div>
              </CommandItem>
              <CommandItem
                onSelect={() => setFrontRightMaterialTransparency('tinted')}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                  frontRightMaterialTransparency === 'tinted'
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
