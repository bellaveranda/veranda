import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useCustomization } from '@/context/Customization';

const ExtensionsTabOpening = () => {
  const {
    leftWall,
    setLeftWall,
    frontWall,
    setFrontWall,
    rightWall,
    setRightWall,
    frontWallLeft,
    setFrontWallLeft,
    frontWallRight,
    setFrontWallRight,
    width,
  } = useCustomization();
  return (
    <Command className="px-2">
      <CommandList className="text-left max-h-svh my-8 sm:my-12">
        <CommandGroup heading="Instellingen" className="text-left">
          <CommandItem
            onSelect={() => {
              setLeftWall(true);
              setRightWall(false);
              setFrontWall(false);
              setFrontWallLeft(false);
              setFrontWallRight(false);
            }}
            className={`flex mt-2 px-2 py-4 w-full items-center justify-start gap-4 ${
              leftWall ? 'border border-myColor' : ''
            }`}
          >
            <div>Linker zijwand</div>
          </CommandItem>
          {width <= 607 ? (
            <CommandItem
              onSelect={() => {
                setLeftWall(false);
                setRightWall(false);
                setFrontWall(true);
                setFrontWallLeft(false);
                setFrontWallRight(false);
              }}
              className={`flex mt-2 px-2 py-4 w-full items-center justify-start gap-4 ${
                frontWall ? 'border border-myColor' : ''
              }`}
            >
              <div>Voorkant zijwand</div>
            </CommandItem>
          ) : (
            <>
              <CommandItem
                onSelect={() => {
                  setLeftWall(false);
                  setRightWall(false);
                  setFrontWall(false);
                  setFrontWallLeft(true);
                  setFrontWallRight(false);
                }}
                className={`flex mt-2 px-2 py-4 w-full items-center justify-start gap-4 ${
                  frontWallLeft ? 'border border-myColor' : ''
                }`}
              >
                <div>Front linker zijwand</div>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  setLeftWall(false);
                  setRightWall(false);
                  setFrontWall(false);
                  setFrontWallLeft(false);
                  setFrontWallRight(true);
                }}
                className={`flex mt-2 px-2 py-4 w-full items-center justify-start gap-4 ${
                  frontWallRight ? 'border border-myColor' : ''
                }`}
              >
                <div>Front rechter zijwand</div>
              </CommandItem>
            </>
          )}

          <CommandItem
            onSelect={() => {
              setLeftWall(false);
              setRightWall(true);
              setFrontWall(false);
              setFrontWallLeft(false);
              setFrontWallRight(false);
            }}
            className={`flex mt-2 px-2 py-4 w-full items-center justify-start gap-4 ${
              rightWall ? 'border border-myColor' : ''
            }`}
          >
            <div>Rechter zijwand</div>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default ExtensionsTabOpening;
