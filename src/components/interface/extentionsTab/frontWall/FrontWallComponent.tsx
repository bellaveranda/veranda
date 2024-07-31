import { Button } from '../../../ui/button';
import { useCustomization } from '@/context/Customization';
import AwningColor_FrontWall from './AwningColor_FrontWall';
import Dropdown_FrontWall from './Dropdown_FrontWall';
import MaterialTransparency_FrontWall from './MaterialTransparency_FrontWall';

export default function FrontWallComponent() {
  const {
    setLeftWall,
    setRightWall,
    setFrontWall,
    setFrontWallLeft,
    setFrontWallRight,
    frontWallType,
  } = useCustomization();

  return (
    <div className="mt-12 w-full sm:bg-white sm:py-4 text-left ">
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

      <Dropdown_FrontWall />

      <MaterialTransparency_FrontWall />

      {frontWallType === 'awning' && <AwningColor_FrontWall />}
    </div>
  );
}
