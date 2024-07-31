import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useCustomization } from '@/context/Customization';

export default function MaterialTransparency_LeftWall() {
  const {
    leftWallMaterial,
    leftMaterialTransparency,
    setLeftMaterialTransparency,
    leftWallType,
    leftWedgeMaterial,
  } = useCustomization();

  return (
    <>
      {leftWallType === 'wedge' ||
      leftWallType === 'fixedGlassWall' ||
      leftWallType === 'slidingDoor'
        ? (leftWallMaterial === 'glass' || leftWallMaterial === 'poly') && (
            <Command className="px-2">
              <CommandList className="text-left max-h-svh mt-2">
                <CommandGroup heading="Transparantie" className="text-left">
                  <CommandItem
                    onSelect={() => setLeftMaterialTransparency('clear')}
                    className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                      leftMaterialTransparency === 'clear'
                        ? 'border border-myColor'
                        : ''
                    }`}
                  >
                    <div>Helder</div>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => setLeftMaterialTransparency('opal')}
                    className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                      leftMaterialTransparency === 'opal'
                        ? 'border border-myColor'
                        : ''
                    }`}
                  >
                    <div>Opaal</div>
                  </CommandItem>
                  {(leftWallType === 'fixedGlassWall' ||
                    leftWallType === 'wedge' ||
                    leftWallType === 'slidingDoor') && (
                    <CommandItem
                      onSelect={() => setLeftMaterialTransparency('tinted')}
                      className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                        leftMaterialTransparency === 'tinted'
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
        : (leftWallType === 'aluminium' || leftWallType === 'polycarbonate') &&
          leftWedgeMaterial
        ? (leftWallMaterial === 'glass' || leftWallMaterial === 'poly') && (
            <Command className="px-2">
              <CommandList className="text-left max-h-svh mt-2">
                <CommandGroup heading="Transparency" className="text-left">
                  <CommandItem
                    onSelect={() => setLeftMaterialTransparency('clear')}
                    className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                      leftMaterialTransparency === 'clear'
                        ? 'border border-myColor'
                        : ''
                    }`}
                  >
                    <div>Helder</div>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => setLeftMaterialTransparency('opal')}
                    className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                      leftMaterialTransparency === 'opal'
                        ? 'border border-myColor'
                        : ''
                    }`}
                  >
                    <div>Opaal</div>
                  </CommandItem>

                  <CommandItem
                    onSelect={() => setLeftMaterialTransparency('tinted')}
                    className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                      leftMaterialTransparency === 'tinted'
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
