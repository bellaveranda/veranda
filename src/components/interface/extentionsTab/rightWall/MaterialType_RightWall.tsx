import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useCustomization } from '@/context/Customization';

export default function MaterialType_RightWall() {
  const {
    rightWallMaterial,
    setRightWallMaterial,
    rightWallType,
    rightWedgeMaterial,
  } = useCustomization();

  return (
    <>
      {(rightWallType === 'wedge' ||
        rightWallType === 'fixedGlassWall' ||
        rightWallType === 'slidingDoor') && (
        <Command className="px-2">
          <CommandList className="text-left max-h-svh mt-2">
            <CommandGroup
              heading={`${
                rightWallType === 'fixedGlassWall'
                  ? 'Vast glazen wand'
                  : rightWallType === 'slidingDoor'
                  ? 'Schuifdeur'
                  : 'Vorm'
              } Materiaal`}
              className="text-left"
            >
              <CommandItem
                onSelect={() => setRightWallMaterial('glass')}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                  rightWallMaterial === 'glass' ? 'border border-myColor' : ''
                }`}
              >
                <div>Glass</div>
              </CommandItem>
              <CommandItem
                onSelect={() => setRightWallMaterial('poly')}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                  rightWallMaterial === 'poly' ? 'border border-myColor' : ''
                }`}
              >
                <div>Poly</div>
              </CommandItem>
              {!(rightWallType === 'wedge') && (
                <CommandItem
                  onSelect={() => setRightWallMaterial('aluminium')}
                  className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                    rightWallMaterial === 'aluminium'
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
      {(rightWallType === 'aluminium' || rightWallType === 'polycarbonate') &&
        rightWedgeMaterial && (
          <Command className="px-2">
            <CommandList className="text-left max-h-svh mt-2">
              <CommandGroup className="text-left">
                <CommandItem
                  onSelect={() => setRightWallMaterial('glass')}
                  className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                    rightWallMaterial === 'glass' ? 'border border-myColor' : ''
                  }`}
                >
                  <div>Glass</div>
                </CommandItem>
                <CommandItem
                  onSelect={() => setRightWallMaterial('poly')}
                  className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                    rightWallMaterial === 'poly' ? 'border border-myColor' : ''
                  }`}
                >
                  <div>Poly</div>
                </CommandItem>

                <CommandItem
                  onSelect={() => setRightWallMaterial('aluminium')}
                  className={`flex p-2 my-2 w-full items-center justify-start gap-4 ${
                    rightWallMaterial === 'aluminium'
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
