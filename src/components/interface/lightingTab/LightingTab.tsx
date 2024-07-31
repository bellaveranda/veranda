import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useCustomization } from '@/context/Customization';

export default function LightingTab() {
  const { ledSet, setLedSet } = useCustomization();
  return (
    <Command className="px-2">
      <CommandList className="text-left max-h-svh my-8 sm:my-12">
        <CommandGroup heading="Lighting" className="text-left">
          <CommandItem
            onSelect={() => setLedSet(false)}
            className={`flex p-2 my-2 cursor-pointer w-full items-center justify-start gap-4 ${
              ledSet ? '' : 'border border-myColor'
            }`}
          >
            <div>None</div>
          </CommandItem>
          <CommandItem
            onSelect={() => setLedSet(true)}
            className={`flex p-2 my-2 cursor-pointer w-full items-center justify-start gap-4 ${
              ledSet ? 'border border-myColor' : ''
            }`}
          >
            <div>Led Set</div>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
