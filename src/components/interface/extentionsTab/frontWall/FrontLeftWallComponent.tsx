import { Button } from '@/components/ui/button';
import { useCustomization } from '@/context/Customization';
import Dropdown_FrontLeftWall from './Dropdown_FrontLeftWall';
import MaterialTransparency_FrontLeftWall from './MaterialTransparency_FrontLeftWall';
import AwningColor_FrontLeftWall from './AwningColor_FrontLeftWall';

export default function FrontLeftWallComponent() {
  const {
    setLeftWall,
    setRightWall,
    setFrontWall,
    setFrontWallLeft,
    setFrontWallRight,
    frontLeftWallType,
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

      <Dropdown_FrontLeftWall />

      <MaterialTransparency_FrontLeftWall />

      {frontLeftWallType === 'awning' && <AwningColor_FrontLeftWall />}
    </div>
  );
}
