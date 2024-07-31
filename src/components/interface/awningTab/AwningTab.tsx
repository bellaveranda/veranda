import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useCustomization } from '@/context/Customization';
import FabricColor_Awning from './FabricColor_Awning';

export default function AwningTab() {
  const { awning, setAwning } = useCustomization();
  return (
    <Command className="px-2">
      <CommandList className="text-left max-h-svh my-8 sm:my-12">
        <CommandGroup heading="Type zonwering" className="text-left">
          <CommandItem
            onSelect={() => setAwning('withoutAwning')}
            className={`flex p-2 my-2 cursor-pointer w-full items-center justify-start gap-4 ${
              awning === 'withoutAwning' ? 'border border-myColor' : ''
            }`}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/Without awning.png"
              alt="Without awning"
            />
            <div>Zonder zonwering</div>
          </CommandItem>
          <CommandItem
            onSelect={() => setAwning('roofAwning')}
            className={`flex p-2 my-2 cursor-pointer w-full items-center justify-start gap-4 ${
              awning === 'roofAwning' ? 'border border-myColor' : ''
            }`}
          >
            <img
              className="w-16 h-16 rounded-sm"
              src="./images/Roof awning.png"
              alt="Roof awning"
            />
            <div>Dakzonwering</div>
          </CommandItem>
        </CommandGroup>

        {awning === 'roofAwning' && <FabricColor_Awning />}
      </CommandList>
    </Command>
  );
}
