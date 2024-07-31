import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface CustomizationContextProps {
  tab: 'baseInfo' | 'covering' | 'awning' | 'extentions' | 'lighting';
  setTab: (
    material: 'baseInfo' | 'covering' | 'awning' | 'extentions' | 'lighting'
  ) => void;

  // Base info tab
  model: 'standradVeranda' | 'square' | 'slattedRoof';
  setModel: (material: 'standradVeranda' | 'square' | 'slattedRoof') => void;
  freeStanding: boolean;
  setFreeStanding: Dispatch<SetStateAction<boolean>>;
  standardType: 'round' | 'crate';
  setStandardType: (material: 'round' | 'crate') => void;

  // Coverings tab
  coveringModel: 'GlassCommon8mm' | 'PolycarbonateCommon16mm';
  setCoveringModel: (
    material: 'GlassCommon8mm' | 'PolycarbonateCommon16mm'
  ) => void;
  coveringMaterial: 'glassClear' | 'glassOpal' | 'Poly_Clear' | 'Poly_Opal';
  setCoveringMaterial: (
    material: 'glassClear' | 'glassOpal' | 'Poly_Clear' | 'Poly_Opal'
  ) => void;
  maxHeight: number;
  minHeight: number;
  height: number;
  setHeight: (material: number) => void;
  maxWidth: number;
  minWidth: number;
  width: number;
  setWidth: (material: number) => void;

  maxDepth: number;
  minDepth: number;
  depth: number;
  setDepth: (material: number) => void;
  profileColor: 'RAL7016' | 'RAL9001' | 'RAL9005';
  setProfileColor: (material: 'RAL7016' | 'RAL9001' | 'RAL9005') => void;

  // Awning tab
  awning: 'withoutAwning' | 'roofAwning';
  setAwning: (material: 'withoutAwning' | 'roofAwning') => void;
  fabricColor:
    | 'wit'
    | 'begie'
    | 'creme'
    | 'grijsaluminium'
    | 'antraciet'
    | 'zwart';
  setFabricColor: (
    material:
      | 'wit'
      | 'begie'
      | 'creme'
      | 'grijsaluminium'
      | 'antraciet'
      | 'zwart'
  ) => void;

  // Extentions tab
  //left wall
  leftWall: boolean;
  setLeftWall: Dispatch<SetStateAction<boolean>>;
  leftWallType:
    | 'notSpecified'
    | 'fixedGlassWall'
    | 'slidingDoor'
    | 'wedge'
    | 'aluminium'
    | 'polycarbonate';
  setLeftWallType: (
    material:
      | 'notSpecified'
      | 'fixedGlassWall'
      | 'slidingDoor'
      | 'wedge'
      | 'aluminium'
      | 'polycarbonate'
  ) => void;
  leftWallMaterial: 'glass' | 'poly' | 'aluminium';
  setLeftWallMaterial: (material: 'glass' | 'poly' | 'aluminium') => void;
  leftMaterialTransparency: 'clear' | 'opal' | 'tinted';
  setLeftMaterialTransparency: (material: 'clear' | 'opal' | 'tinted') => void;
  leftWedgeMaterial: boolean;
  setLeftWedgeMaterial: Dispatch<SetStateAction<boolean>>;
  leftAwning: boolean;
  setLeftAwning: Dispatch<SetStateAction<boolean>>;
  leftAwningColor:
    | 'wit'
    | 'begie'
    | 'creme'
    | 'grijsaluminium'
    | 'antraciet'
    | 'zwart';
  setLeftAwningColor: (
    material:
      | 'wit'
      | 'begie'
      | 'creme'
      | 'grijsaluminium'
      | 'antraciet'
      | 'zwart'
  ) => void;

  // Front wall
  frontWall: boolean;
  setFrontWall: Dispatch<SetStateAction<boolean>>;
  frontWallLeft: boolean;
  setFrontWallLeft: Dispatch<SetStateAction<boolean>>;
  frontWallRight: boolean;
  setFrontWallRight: Dispatch<SetStateAction<boolean>>;
  frontWallType: 'notSpecified' | 'fixedGlassWall' | 'slidingDoor' | 'awning';
  setFrontWallType: (
    material: 'notSpecified' | 'fixedGlassWall' | 'slidingDoor' | 'awning'
  ) => void;
  frontLeftWallType:
    | 'notSpecified'
    | 'fixedGlassWall'
    | 'slidingDoor'
    | 'awning';
  setFrontLeftWallType: (
    material: 'notSpecified' | 'fixedGlassWall' | 'slidingDoor' | 'awning'
  ) => void;
  frontRightWallType:
    | 'notSpecified'
    | 'fixedGlassWall'
    | 'slidingDoor'
    | 'awning';
  setFrontRightWallType: (
    material: 'notSpecified' | 'fixedGlassWall' | 'slidingDoor' | 'awning'
  ) => void;
  frontMaterialTransparency: 'clear' | 'opal' | 'tinted';
  setFrontMaterialTransparency: (material: 'clear' | 'opal' | 'tinted') => void;
  frontLeftMaterialTransparency: 'clear' | 'opal' | 'tinted';
  setFrontLeftMaterialTransparency: (
    material: 'clear' | 'opal' | 'tinted'
  ) => void;
  frontRightMaterialTransparency: 'clear' | 'opal' | 'tinted';
  setFrontRightMaterialTransparency: (
    material: 'clear' | 'opal' | 'tinted'
  ) => void;
  verticalAwningColor:
    | 'wit'
    | 'begie'
    | 'creme'
    | 'grijsaluminium'
    | 'antraciet'
    | 'zwart';
  setVerticalAwningColor: (
    material:
      | 'wit'
      | 'begie'
      | 'creme'
      | 'grijsaluminium'
      | 'antraciet'
      | 'zwart'
  ) => void;

  // Right wall
  rightWall: boolean;
  setRightWall: Dispatch<SetStateAction<boolean>>;
  rightWallType:
    | 'notSpecified'
    | 'fixedGlassWall'
    | 'slidingDoor'
    | 'wedge'
    | 'aluminium'
    | 'polycarbonate';
  setRightWallType: (
    material:
      | 'notSpecified'
      | 'fixedGlassWall'
      | 'slidingDoor'
      | 'wedge'
      | 'aluminium'
      | 'polycarbonate'
  ) => void;
  rightWallMaterial: 'glass' | 'poly' | 'aluminium';
  setRightWallMaterial: (material: 'glass' | 'poly' | 'aluminium') => void;
  rightMaterialTransparency: 'clear' | 'opal' | 'tinted';
  setRightMaterialTransparency: (material: 'clear' | 'opal' | 'tinted') => void;
  rightWedgeMaterial: boolean;
  setRightWedgeMaterial: Dispatch<SetStateAction<boolean>>;
  rightAwning: boolean;
  setRightAwning: Dispatch<SetStateAction<boolean>>;
  rightAwningColor:
    | 'wit'
    | 'begie'
    | 'creme'
    | 'grijsaluminium'
    | 'antraciet'
    | 'zwart';
  setRightAwningColor: (
    material:
      | 'wit'
      | 'begie'
      | 'creme'
      | 'grijsaluminium'
      | 'antraciet'
      | 'zwart'
  ) => void;

  // Lighting tab
  ledSet: boolean;
  setLedSet: Dispatch<SetStateAction<boolean>>;

  // Overview
  overview: boolean;
  setOverview: Dispatch<SetStateAction<boolean>>;
  requestForm: boolean;
  setRequestForm: Dispatch<SetStateAction<boolean>>;
  confirmation: boolean;
  setConfirmation: Dispatch<SetStateAction<boolean>>;
}

const CustomizationContext = createContext<
  CustomizationContextProps | undefined
>(undefined);

export const CustomizationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [tab, setTab] = useState<
    'baseInfo' | 'covering' | 'awning' | 'extentions' | 'lighting'
  >('baseInfo');

  // Base info tab
  const [model, setModel] = useState<
    'standradVeranda' | 'square' | 'slattedRoof'
  >('standradVeranda');
  const [freeStanding, setFreeStanding] = useState(false);
  const [standardType, setStandardType] = useState<'round' | 'crate'>('round');

  // Coverings tab
  const [coveringModel, setCoveringModel] = useState<
    'GlassCommon8mm' | 'PolycarbonateCommon16mm'
  >('GlassCommon8mm');
  const [coveringMaterial, setCoveringMaterial] = useState<
    'glassClear' | 'glassOpal' | 'Poly_Clear' | 'Poly_Opal'
  >('glassClear');
  const maxHeight = 270;
  const minHeight = 230;
  const [height, setHeight] = useState<number>(minHeight);
  const maxWidth = 800;
  const minWidth = 250;
  const [width, setWidth] = useState<number>(minWidth);

  const maxDepth = 500;
  const minDepth = 200;
  const [depth, setDepth] = useState<number>(minDepth);
  const [profileColor, setProfileColor] = useState<
    'RAL7016' | 'RAL9001' | 'RAL9005'
  >('RAL7016');

  // Awning tab
  const [awning, setAwning] = useState<'withoutAwning' | 'roofAwning'>(
    'withoutAwning'
  );
  const [fabricColor, setFabricColor] = useState<
    'wit' | 'begie' | 'creme' | 'grijsaluminium' | 'antraciet' | 'zwart'
  >('wit');

  // Extentions tab
  // Left wall
  const [leftWallType, setLeftWallType] = useState<
    | 'notSpecified'
    | 'fixedGlassWall'
    | 'slidingDoor'
    | 'wedge'
    | 'aluminium'
    | 'polycarbonate'
  >('notSpecified');
  const [leftWallMaterial, setLeftWallMaterial] = useState<
    'glass' | 'poly' | 'aluminium'
  >('glass');
  const [leftWall, setLeftWall] = useState(false);
  const [leftMaterialTransparency, setLeftMaterialTransparency] = useState<
    'clear' | 'opal' | 'tinted'
  >('clear');
  const [leftWedgeMaterial, setLeftWedgeMaterial] = useState(false);
  const [leftAwning, setLeftAwning] = useState(false);
  const [leftAwningColor, setLeftAwningColor] = useState<
    'wit' | 'begie' | 'creme' | 'grijsaluminium' | 'antraciet' | 'zwart'
  >('wit');

  // Front wall
  const [frontWallType, setFrontWallType] = useState<
    'notSpecified' | 'fixedGlassWall' | 'slidingDoor' | 'awning'
  >('notSpecified');
  const [frontLeftWallType, setFrontLeftWallType] = useState<
    'notSpecified' | 'fixedGlassWall' | 'slidingDoor' | 'awning'
  >('notSpecified');
  const [frontRightWallType, setFrontRightWallType] = useState<
    'notSpecified' | 'fixedGlassWall' | 'slidingDoor' | 'awning'
  >('notSpecified');

  const [frontWall, setFrontWall] = useState(false);
  const [frontWallLeft, setFrontWallLeft] = useState(false);
  const [frontWallRight, setFrontWallRight] = useState(false);
  const [frontMaterialTransparency, setFrontMaterialTransparency] = useState<
    'clear' | 'opal' | 'tinted'
  >('clear');
  const [frontLeftMaterialTransparency, setFrontLeftMaterialTransparency] =
    useState<'clear' | 'opal' | 'tinted'>('clear');
  const [frontRightMaterialTransparency, setFrontRightMaterialTransparency] =
    useState<'clear' | 'opal' | 'tinted'>('clear');
  const [verticalAwningColor, setVerticalAwningColor] = useState<
    'wit' | 'begie' | 'creme' | 'grijsaluminium' | 'antraciet' | 'zwart'
  >('wit');

  // Right wall
  const [rightWallType, setRightWallType] = useState<
    | 'notSpecified'
    | 'fixedGlassWall'
    | 'slidingDoor'
    | 'wedge'
    | 'aluminium'
    | 'polycarbonate'
  >('notSpecified');
  const [rightWallMaterial, setRightWallMaterial] = useState<
    'glass' | 'poly' | 'aluminium'
  >('glass');
  const [rightWall, setRightWall] = useState(false);
  const [rightMaterialTransparency, setRightMaterialTransparency] = useState<
    'clear' | 'opal' | 'tinted'
  >('clear');
  const [rightWedgeMaterial, setRightWedgeMaterial] = useState(false);
  const [rightAwning, setRightAwning] = useState(false);
  const [rightAwningColor, setRightAwningColor] = useState<
    'wit' | 'begie' | 'creme' | 'grijsaluminium' | 'antraciet' | 'zwart'
  >('wit');

  // Lighting tab
  const [ledSet, setLedSet] = useState(false);

  // Overview
  const [overview, setOverview] = useState(true);
  const [requestForm, setRequestForm] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  return (
    <CustomizationContext.Provider
      value={{
        tab,
        setTab,

        // Base info tab
        model,
        setModel,
        freeStanding,
        setFreeStanding,
        standardType,
        setStandardType,

        // Coverings tab
        coveringModel,
        setCoveringModel,
        coveringMaterial,
        setCoveringMaterial,
        maxHeight,
        minHeight,
        height,
        setHeight,
        maxWidth,
        minWidth,
        width,

        setWidth,
        maxDepth,
        minDepth,
        depth,
        setDepth,
        profileColor,
        setProfileColor,

        // Awning tab
        awning,
        setAwning,
        fabricColor,
        setFabricColor,

        // Extentions tab
        // Left wall
        leftWall,
        setLeftWall,
        leftWallType,
        setLeftWallType,
        leftWallMaterial,
        setLeftWallMaterial,
        leftMaterialTransparency,
        setLeftMaterialTransparency,
        leftWedgeMaterial,
        setLeftWedgeMaterial,
        leftAwning,
        setLeftAwning,
        leftAwningColor,
        setLeftAwningColor,

        // Front wall
        frontWall,
        setFrontWall,
        frontWallLeft,
        setFrontWallLeft,
        frontWallRight,
        setFrontWallRight,
        frontWallType,
        setFrontWallType,
        frontLeftWallType,
        setFrontLeftWallType,
        frontRightWallType,
        setFrontRightWallType,
        frontMaterialTransparency,
        setFrontMaterialTransparency,
        frontLeftMaterialTransparency,
        setFrontLeftMaterialTransparency,
        frontRightMaterialTransparency,
        setFrontRightMaterialTransparency,
        verticalAwningColor,
        setVerticalAwningColor,

        // Right wall
        rightWall,
        setRightWall,
        rightWallType,
        setRightWallType,
        rightWallMaterial,
        setRightWallMaterial,
        rightMaterialTransparency,
        setRightMaterialTransparency,
        rightWedgeMaterial,
        setRightWedgeMaterial,
        rightAwning,
        setRightAwning,
        rightAwningColor,
        setRightAwningColor,

        // Lighting tab
        ledSet,
        setLedSet,

        // Overview
        overview,
        setOverview,
        requestForm,
        setRequestForm,
        confirmation,
        setConfirmation,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  if (context === undefined) {
    throw new Error(
      'useCustomization must be used within a CustomizationProvider'
    );
  }
  return context;
};
