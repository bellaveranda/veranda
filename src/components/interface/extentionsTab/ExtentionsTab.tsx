import { useCustomization } from '@/context/Customization';
import LeftWallComponent from './leftWall/LeftWallComponent';
import RightWallComponent from './rightWall/RightWallComponent';
import ExtensionsTabOpening from './ExtentionTabOpening';
import FrontWallComponent from './frontWall/FrontWallComponent';
import FrontLeftWallComponent from './frontWall/FrontLeftWallComponent';
import FrontRightWallComponent from './frontWall/FrontRightWallComponent';

export default function ExtensionsTab() {
  const { leftWall, frontWall, rightWall, frontWallLeft, frontWallRight } =
    useCustomization();

  if (
    leftWall &&
    !rightWall &&
    !frontWall &&
    !frontWallLeft &&
    !frontWallRight
  ) {
    return <LeftWallComponent />;
  } else if (
    !leftWall &&
    rightWall &&
    !frontWall &&
    !frontWallLeft &&
    !frontWallRight
  ) {
    return <RightWallComponent />;
  } else if (
    !leftWall &&
    !rightWall &&
    frontWall &&
    !frontWallLeft &&
    !frontWallRight
  ) {
    return <FrontWallComponent />;
  } else if (
    !leftWall &&
    !rightWall &&
    !frontWall &&
    frontWallLeft &&
    !frontWallRight
  ) {
    return <FrontLeftWallComponent />;
  } else if (
    !leftWall &&
    !rightWall &&
    !frontWall &&
    !frontWallLeft &&
    frontWallRight
  ) {
    return <FrontRightWallComponent />;
  } else {
    return <ExtensionsTabOpening />;
  }
}
