import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useCustomization } from '@/context/Customization';

export default function MaterialType_LeftWall() {
  const {
    leftWallMaterial,
    setLeftWallMaterial,
    leftWallType,
    leftWedgeMaterial,
  } = useCustomization();

  return (
    <>
      {(leftWallType === 'wedge' ||
        leftWallType === 'fixedGlassWall' ||
        leftWallType === 'slidingDoor') && (
        <Command className="px-2">
          <CommandList className="text-left max-h-svh mt-2">
            <CommandGroup
              heading={`${
                leftWallType === 'fixedGlassWall'
                  ? 'Vast glazen wand'
                  : leftWallType === 'slidingDoor'
                  ? 'Schuifdeur'
                  : 'Vorm'
              } Materiaal`}
              className="text-left"
            >
              <CommandItem
                onSelect={() => setLeftWallMaterial('glass')}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                  leftWallMaterial === 'glass' ? 'border border-myColor' : ''
                }`}
              >
                <div>Glass</div>
              </CommandItem>
              <CommandItem
                onSelect={() => setLeftWallMaterial('poly')}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                  leftWallMaterial === 'poly' ? 'border border-myColor' : ''
                }`}
              >
                <div>Poly</div>
              </CommandItem>
              {!(leftWallType === 'wedge') && (
                <CommandItem
                  onSelect={() => setLeftWallMaterial('aluminium')}
                  className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                    leftWallMaterial === 'aluminium'
                      ? 'border border-myColor'
                      : ''
                  }`}
                >
                  <div>Aluminium</div>
                </CommandItem>
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      )}

      {(leftWallType === 'aluminium' || leftWallType === 'polycarbonate') &&
        leftWedgeMaterial && (
          <Command className="px-2">
            <CommandList className="text-left max-h-svh mt-2">
              <CommandGroup className="text-left">
                <CommandItem
                  onSelect={() => setLeftWallMaterial('glass')}
                  className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                    leftWallMaterial === 'glass' ? 'border border-myColor' : ''
                  }`}
                >
                  <div>Glass</div>
                </CommandItem>
                <CommandItem
                  onSelect={() => setLeftWallMaterial('poly')}
                  className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                    leftWallMaterial === 'poly' ? 'border border-myColor' : ''
                  }`}
                >
                  <div>Poly</div>
                </CommandItem>

                <CommandItem
                  onSelect={() => setLeftWallMaterial('aluminium')}
                  className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                    leftWallMaterial === 'aluminium'
                      ? 'border border-myColor'
                      : ''
                  }`}
                >
                  <div>Aluminium</div>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        )}
    </>
  );
}
