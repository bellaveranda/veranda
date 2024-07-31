import { useCustomization } from '@/context/Customization';
import { CommandGroup, CommandItem } from '../../ui/command';

type FabricColor =
  | 'wit'
  | 'begie'
  | 'creme'
  | 'grijsaluminium'
  | 'antraciet'
  | 'zwart';

const fabricColors: { color: FabricColor; bgColor: string; label: string }[] = [
  { color: 'wit', bgColor: '#FFFFF3', label: 'Wit (White)' },
  { color: 'begie', bgColor: '#CAB49E', label: 'Begie' },
  { color: 'creme', bgColor: '#B29272', label: 'Creme' },
  { color: 'grijsaluminium', bgColor: '#BFBFBF', label: 'Grijsaluminium' },
  { color: 'antraciet', bgColor: '#293133', label: 'Antraciet' },
  { color: 'zwart', bgColor: '#000000', label: 'Zwart' },
];

export default function FabricColor_Awning() {
  const { fabricColor, setFabricColor } = useCustomization();

  const selectedColor =
    fabricColors.find((item) => item.color === fabricColor)?.label ||
    fabricColor;

  return (
    <>
      <CommandGroup heading="Stofkleur" className="text-left">
        <div className="flex flex-wrap justify-center py-2 gap-4">
          {fabricColors.map(({ color, bgColor }) => (
            <CommandItem
              key={color}
              onSelect={() => setFabricColor(color)}
              className={`flex p-2 cursor-pointer items-center justify-start gap-4 ${
                fabricColor === color ? 'border border-myColor' : ''
              }`}
            >
              <div
                className="w-16 h-16 rounded-sm"
                style={{ backgroundColor: bgColor }}
              />
            </CommandItem>
          ))}
        </div>
        <div className="flex p-2 my-2 w-full rounded-sm items-center justify-center gap-4 border border-myColor capitalize text-center">
          {selectedColor}
        </div>
      </CommandGroup>
    </>
  );
}
