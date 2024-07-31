import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useCustomization } from '@/context/Customization';

export default function MaterialTransparency_RightWall() {
  const {
    rightWallMaterial,
    rightMaterialTransparency,
    setRightMaterialTransparency,
    rightWallType,
    rightWedgeMaterial,
  } = useCustomization();

  return (
    <>
      {rightWallType === 'wedge' ||
      rightWallType === 'fixedGlassWall' ||
      rightWallType === 'slidingDoor'
        ? (rightWallMaterial === 'glass' || rightWallMaterial === 'poly') && (
            <Command className="px-2">
              <CommandList className="text-left max-h-svh mt-2">
                <CommandGroup heading="Transparantie" className="text-left">
                  <CommandItem
                    onSelect={() => setRightMaterialTransparency('clear')}
                    className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                      rightMaterialTransparency === 'clear'
                        ? 'border border-myColor'
                        : ''
                    }`}
                  >
                    <div>Helder</div>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => setRightMaterialTransparency('opal')}
                    className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                      rightMaterialTransparency === 'opal'
                        ? 'border border-myColor'
                        : ''
                    }`}
                  >
                    <div>Opaal</div>
                  </CommandItem>
                  {(rightWallType === 'fixedGlassWall' ||
                    rightWallType === 'wedge' ||
                    rightWallType === 'slidingDoor') && (
                    <CommandItem
                      onSelect={() => setRightMaterialTransparency('tinted')}
                      className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                        rightMaterialTransparency === 'tinted'
                          ? 'border border-myColor'
                          : ''
                      }`}
                    >
                      <div>Gekleurd</div>
                    </CommandItem>
                  )}
                </CommandGroup>
              </CommandList>
            </Command>
          )
        : (rightWallType === 'aluminium' ||
            rightWallType === 'polycarbonate') &&
          rightWedgeMaterial
        ? (rightWallMaterial === 'glass' || rightWallMaterial === 'poly') && (
            <Command className="px-2">
              <CommandList className="text-left max-h-svh mt-2">
                <CommandGroup heading="Transparency" className="text-left">
                  <CommandItem
                    onSelect={() => setRightMaterialTransparency('clear')}
                    className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                      rightMaterialTransparency === 'clear'
                        ? 'border border-myColor'
                        : ''
                    }`}
                  >
                    <div>Helder</div>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => setRightMaterialTransparency('opal')}
                    className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                      rightMaterialTransparency === 'opal'
                        ? 'border border-myColor'
                        : ''
                    }`}
                  >
                    <div>Opaal</div>
                  </CommandItem>

                  <CommandItem
                    onSelect={() => setRightMaterialTransparency('tinted')}
                    className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                      rightMaterialTransparency === 'tinted'
                        ? 'border border-myColor'
                        : ''
                    }`}
                  >
                    <div>Gekleurd</div>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          )
        : null}
    </>
  );
}
