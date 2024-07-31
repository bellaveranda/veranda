import { Command, CommandGroup, CommandList } from '@/components/ui/command';

import { Switch } from '@/components/ui/switch';

import { Button } from '../../../ui/button';
import { useCustomization } from '@/context/Customization';
import Dropdown_LeftWall from './Dropdown_LeftWall';
import MaterialType_LeftWall from './MaterialType_LeftWall';
import MaterialTransparency_LeftWall from './MaterialTransparency_LeftWall';
import AwningColor_LeftWall from './AwningColor_LeftWall';

const LeftWallComponent = () => {
  const {
    setLeftWall,
    setRightWall,
    setFrontWall,
    leftWallType,
    leftWedgeMaterial,
    setFrontWallLeft,
    setFrontWallRight,
    setLeftWedgeMaterial,
    leftAwning,
    setLeftAwning,
  } = useCustomization();

  return (
    <div className="mt-12 w-full sm:bg-white sm:py-4 sm:mb-4 text-left">
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

      <Dropdown_LeftWall />

      {(leftWallType === 'aluminium' || leftWallType === 'polycarbonate') && (
        <Command className="px-2">
          <CommandList className="text-left max-h-svh mt-2">
            <CommandGroup
              heading="Materiaal wig"
              className="text-left flex justify-start items-center gap-2"
            >
              <Switch
                className="mt-2"
                checked={leftWedgeMaterial}
                onCheckedChange={() => setLeftWedgeMaterial(!leftWedgeMaterial)}
              />
            </CommandGroup>
          </CommandList>
        </Command>
      )}

      {!(leftWallType === 'notSpecified') && (
        <div>
          <MaterialType_LeftWall />

          <MaterialTransparency_LeftWall />

          <Command className="px-2">
            <CommandList className="text-left max-h-svh mt-2">
              <CommandGroup
                heading="Zonwering"
                className="text-left flex justify-start items-center gap-2"
              >
                <Switch
                  className="mt-2"
                  checked={leftAwning}
                  onCheckedChange={() => setLeftAwning(!leftAwning)}
                />
              </CommandGroup>
            </CommandList>
          </Command>

          {leftAwning && <AwningColor_LeftWall />}
        </div>
      )}
    </div>
  );
};

export default LeftWallComponent;
