import { Button } from '@/components/ui/button';
import { useCustomization } from '@/context/Customization';
import MaterialTransparency_FrontRightWall from './MaterialTransparency_FrontRightWall';
import Dropdown_FrontRightWall from './Dropdown_FrontRightWall';
import AwningColor_FrontRightWall from './AwningColor_FrontRightWall';

export default function FrontRightWallComponent() {
  const {
    setLeftWall,
    setRightWall,
    setFrontWall,
    setFrontWallLeft,
    setFrontWallRight,
    frontRightWallType,
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

      <Dropdown_FrontRightWall />

      <MaterialTransparency_FrontRightWall />

      {frontRightWallType === 'awning' && <AwningColor_FrontRightWall />}
    </div>
  );
}
