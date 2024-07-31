import { useCustomization } from '@/context/Customization';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui//command';

type VerticalAwningColor =
  | 'wit'
  | 'begie'
  | 'creme'
  | 'grijsaluminium'
  | 'antraciet'
  | 'zwart';

const verticalAwningColors: {
  color: VerticalAwningColor;
  bgColor: string;
  label: string;
}[] = [
  { color: 'wit', bgColor: '#FFFFF3', label: 'Wit (White)' },
  { color: 'begie', bgColor: '#CAB49E', label: 'Begie' },
  { color: 'creme', bgColor: '#B29272', label: 'Creme' },
  { color: 'grijsaluminium', bgColor: '#BFBFBF', label: 'Grijsaluminium' },
  { color: 'antraciet', bgColor: '#293133', label: 'Antraciet' },
  { color: 'zwart', bgColor: '#000000', label: 'Zwart' },
];

export default function AwningColor_FrontRightWall() {
  const { verticalAwningColor, setVerticalAwningColor } = useCustomization();

  const selectedColor =
    verticalAwningColors.find((item) => item.color === verticalAwningColor)
      ?.label || verticalAwningColor;

  return (
    <>
      <Command className="px-2">
        <CommandList className="text-left max-h-svh mt-2">
          <CommandGroup heading="Kleur verticale zonwering" className="text-left">
            <div className="flex flex-wrap justify-center py-2 gap-4">
              {verticalAwningColors.map(({ color, bgColor }) => (
                <CommandItem
                  key={color}
                  onSelect={() => setVerticalAwningColor(color)}
                  className={`flex p-2 cursor-pointer items-center justify-start gap-4 ${
                    verticalAwningColor === color ? 'border border-myColor' : ''
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
        </CommandList>
      </Command>
    </>
  );
}
