import { useCustomization } from '@/context/Customization';
import { CommandGroup, CommandItem } from '../../ui/command';

export default function ProfileColor_Covering() {
  const { profileColor, setProfileColor } = useCustomization();

  return (
    <>
      <CommandGroup heading="Profielkleur" className="text-left  mt-2">
        <CommandItem
          onSelect={() => {
            setProfileColor('RAL7016');
          }}
          className={`flex p-2 my-2 w-full items-center justify-start gap-4 cursor-pointer ${
            profileColor === 'RAL7016' ? 'border border-myColor' : ''
          }`}
        >
          <div className="w-16 h-16 rounded-sm bg-[#383E42]" />
          <div className="text-sm space-y-1">
            <div>RAL 7016</div>
            <div>Antracietgrijs</div>
            <div className="opacity-75 text-xs">Classic</div>
          </div>
        </CommandItem>
        <CommandItem
          onSelect={() => {
            setProfileColor('RAL9001');
          }}
          className={`flex p-2 my-2 w-full items-center justify-start gap-4 cursor-pointer ${
            profileColor === 'RAL9001' ? 'border border-myColor' : ''
          }`}
        >
          <div className="w-16 h-16 rounded-sm bg-[#FDF4E3]" />
          <div className="text-sm space-y-1">
            <div>RAL 9001</div>
            <div>Crème</div>
            <div className="opacity-75 text-xs">Classic</div>
          </div>
        </CommandItem>
        <CommandItem
          onSelect={() => {
            setProfileColor('RAL9005');
          }}
          className={`flex p-2 my-2 w-full items-center justify-start gap-4 cursor-pointer ${
            profileColor === 'RAL9005' ? 'border border-myColor' : ''
          }`}
        >
          <div className="w-16 h-16 rounded-sm bg-[#0A0A0A]" />
          <div className="text-sm space-y-1">
            <div>RAL 9005</div>
            <div>Gitzwart</div>
            <div className="opacity-75 text-xs">Classic</div>
          </div>
        </CommandItem>
      </CommandGroup>
    </>
  );
}
