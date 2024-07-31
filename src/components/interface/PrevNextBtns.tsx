import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useCustomization } from '@/context/Customization';

export default function PrevNextBtns() {
  const { tab, setTab, leftWall, rightWall, frontWall, model } =
    useCustomization();

  return (
    <Pagination
      className={` hidden bg-transparent justify-center items-center absolute bottom-0 mt-1 ${
        tab === 'extentions' && (leftWall || rightWall || frontWall)
          ? 'sm:hidden'
          : 'sm:flex'
      } `}
    >
      <PaginationContent className="">
        <PaginationItem>
          <PaginationPrevious
            className={`${
              tab === 'baseInfo' ? 'opacity-75' : 'cursor-pointer'
            }`}
            onClick={() => {
              setTab(
                tab === 'lighting'
                  ? 'extentions'
                  : tab === 'extentions'
                  ? model === 'slattedRoof'
                    ? 'covering'
                    : 'awning'
                  : tab === 'awning'
                  ? 'covering'
                  : 'baseInfo'
              );
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={`${
              tab === 'extentions' ? 'opacity-75' : 'cursor-pointer'
            }`}
            onClick={() => {
              setTab(
                tab === 'baseInfo'
                  ? 'covering'
                  : tab === 'covering'
                  ? model === 'slattedRoof'
                    ? 'extentions'
                    : 'awning'
                  :  'extentions'
                 
              );
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
