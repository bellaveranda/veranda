import PageTabs from './PageTabs';
import OverviewAndRequestForm from './overviewAndRequestForm/OverviewAndRequestForm';

export default function Interface() {
  return (
    <>
      <div className="absolute bottom-0 sm:-top-3 left-0 right-0 sm:right-auto sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4 h-1/2 sm:h-full sm:z-[51]">
        <PageTabs />
      </div>
      <div className="fixed left-4 top-[40svh] sm:left-auto sm:top-auto sm:bottom-8 sm:right-8 z-[51]">
        <OverviewAndRequestForm />
      </div>
      <img
        className="w-24 sm:w-40 fixed z-[51] top-0 sm:top-12 right-0"
        src="bellaVerandaLogoBgRemoved.png"
        alt="logo"
      />
      {/* <div className="fixed left-24 top-[40svh] sm:left-auto sm:top-auto sm:bottom-8 sm:right-32 z-[51] text-3xl font-bold opacity-50">
        MASHUD008
      </div> */}
    </>
  );
}
