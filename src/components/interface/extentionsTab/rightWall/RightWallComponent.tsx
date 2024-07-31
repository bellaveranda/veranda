import { Command, CommandGroup, CommandList } from '@/components/ui/command';

import { Button } from '../../../ui/button';
import { useCustomization } from '@/context/Customization';
import { Switch } from '../../../ui/switch';
import Dropdown_RightWall from './Dropdown_RightWall';
import MaterialType_RightWall from './MaterialType_RightWall';
import MaterialTransparency_RightWall from './MaterialTransparency_RightWall';
import AwningColor_RightWall from './AwningColor_RightWall';

const RightWallComponent = () => {
  const {
    setLeftWall,
    setRightWall,
    setFrontWall,
    setFrontWallLeft,
    setFrontWallRight,
    rightWallType,
    rightWedgeMaterial,
    setRightWedgeMaterial,
    rightAwning,
    setRightAwning,
  } = useCustomization();

  return (
    <div className="mt-12 w-full sm:bg-white sm:py-4  text-left">
      <Button
        variant={'ghost'}
        onClick={() => {
          setLeftWall(false);
          setRightWall(false);
          setFrontWall(false);
          setFrontWallLeft(false);
          setFrontWallRight(false);
        }}
        className="ml-4"
      >
        &larr; achterkant
      </Button>

      <Dropdown_RightWall />

      {(rightWallType === 'aluminium' || rightWallType === 'polycarbonate') && (
        <Command className="px-2">
          <CommandList className="text-left max-h-svh mt-2">
            <CommandGroup
              heading="Materiaal wig"
              className="text-left flex justify-start items-center gap-2"
            >
              <Switch
                className="mt-2"
                checked={rightWedgeMaterial}
                onCheckedChange={() =>
                  setRightWedgeMaterial(!rightWedgeMaterial)
                }
              />
            </CommandGroup>
          </CommandList>
        </Command>
      )}

      {!(rightWallType === 'notSpecified') && (
        <div>
          <MaterialType_RightWall />

          <MaterialTransparency_RightWall />

          <Command className="px-2">
            <CommandList className="text-left max-h-svh mt-2">
              <CommandGroup
                heading="Zonwering"
                className="text-left flex justify-start items-center gap-2"
              >
                <Switch
                  className="mt-2"
                  checked={rightAwning}
                  onCheckedChange={() => setRightAwning(!rightAwning)}
                />
              </CommandGroup>
            </CommandList>
          </Command>

          {rightAwning && <AwningColor_RightWall />}
        </div>
      )}
    </div>
  );
};

export default RightWallComponent;
