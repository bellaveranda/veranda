import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useCustomization } from '@/context/Customization';
import Height_Covering from './Height_Covering';
import Width_Covering from './Width_Covering';
import Depth_Covering from './Depth_Covering';
import ProfileColor_Covering from './ProfileColor_Covering';

export default function CoveringTab() {
  const {
    model,
    coveringModel,
    setCoveringModel,
    coveringMaterial,
    setCoveringMaterial,
  } = useCustomization();

  return (
    <>
      <Command className="px-2  ">
        <CommandList className="text-left max-h-svh my-8 sm:my-12 scrollbar-none">
          <Height_Covering />

          <Width_Covering />

          <Depth_Covering />

          <ProfileColor_Covering />
          {model === 'standradVeranda' && (
            <CommandGroup heading="Bekleding" className="text-left">
              <CommandItem
                onSelect={() => {
                  setCoveringModel('GlassCommon8mm');
                  setCoveringMaterial('glassClear');
                }}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 cursor-pointer ${
                  coveringModel === 'GlassCommon8mm' &&
                  coveringMaterial === 'glassClear'
                    ? 'border border-myColor'
                    : ''
                }`}
              >
                <img
                  className="w-16 h-16 rounded-sm"
                  src="./images/8mm clear (VSG).png"
                  alt="8mm clear (VSG)"
                />
                <div>8mm helder (VSG)</div>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  setCoveringModel('GlassCommon8mm');
                  setCoveringMaterial('glassOpal');
                }}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 cursor-pointer ${
                  coveringModel === 'GlassCommon8mm' &&
                  coveringMaterial === 'glassOpal'
                    ? 'border border-myColor'
                    : ''
                }`}
              >
                <img
                  className="w-16 h-16 rounded-sm"
                  src="./images/8mm opal.png"
                  alt="8mm opal"
                />
                <div>8mm opaal</div>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  setCoveringModel('PolycarbonateCommon16mm');
                  setCoveringMaterial('Poly_Clear');
                }}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 cursor-pointer ${
                  coveringModel === 'PolycarbonateCommon16mm' &&
                  coveringMaterial === 'Poly_Clear'
                    ? 'border border-myColor'
                    : ''
                }`}
              >
                <img
                  className="w-16 h-16 rounded-sm"
                  src="./images/16mm clear (polycarbonate).png"
                  alt="16mm clear (polycarbonate)"
                />
                <div>16mm helder (polycarbonaat)</div>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  setCoveringModel('PolycarbonateCommon16mm');
                  setCoveringMaterial('Poly_Opal');
                }}
                className={`flex p-2 my-2 w-full items-center justify-start gap-4 cursor-pointer ${
                  coveringModel === 'PolycarbonateCommon16mm' &&
                  coveringMaterial === 'Poly_Opal'
                    ? 'border border-myColor'
                    : ''
                }`}
              >
                <img
                  className="w-16 h-16 rounded-sm"
                  src="./images/16mm opal (polycarbonate).png"
                  alt="16mm opal (polycarbonate)"
                />
                <div>16mm opaal (polycarbonaat)</div>
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </>
  );
}
