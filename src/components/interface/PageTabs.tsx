import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BaseInfoTab from './baseInfoTab/BaseInfoTab';
import CoveringTab from './coveringTab/CoveringTab';
import AwningTab from './awningTab/AwningTab';
import ExtentionsTab from './extentionsTab/ExtentionsTab';
import { useRef, useState } from 'react';
import { Button } from '../ui/button';
import PrevNextBtns from './PrevNextBtns';
import MenuIcon from '../icons/MenuIcon';
import { useCustomization } from '@/context/Customization';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LightingTab from './lightingTab/LightingTab';
import CrossIcon from '../icons/CrossIcon';

export default function PageTabs() {
  const [tabsOpen, setTabsOpen] = useState(true);
  const { tab, setTab, model } = useCustomization();

  const slidingMenu = useRef(null);
  useGSAP(() => {
    if (slidingMenu.current) {
      if (!tabsOpen) {
        gsap.to(slidingMenu.current, { x: '-100%', duration: 0.3 });
      } else {
        gsap.to(slidingMenu.current, { x: '0', duration: 0.3 });
      }
    }
  }, [setTabsOpen, tabsOpen]);

  return (
    <Tabs
      value={tab}
      onValueChange={(value) =>
        setTab(value as 'baseInfo' | 'covering' | 'awning' | 'extentions')
      }
      defaultValue="baseInfo"
      className="flex flex-col justify-center items-center text-center relative scrollbar-none"
    >
      <div className="w-full bg-white py-2 fixed top-[48svh] sm:top-0 left-0 right-0 z-50 sm:flex justify-between items-center overflow-x-auto">
        <Button
          onClick={() => setTabsOpen(!tabsOpen)}
          className="hidden sm:block text-myColor "
          variant={'link'}
        >
          {tabsOpen ? <CrossIcon /> : <MenuIcon />}
        </Button>
        <div className=" w-full sm:flex justify-center items-center ">
          <TabsList>
            <TabsTrigger onClick={() => setTabsOpen(true)} value="baseInfo">
              Basisinformatie
            </TabsTrigger>
            <TabsTrigger onClick={() => setTabsOpen(true)} value="covering">
              Bekleding
            </TabsTrigger>
            {!(model === 'slattedRoof') && (
              <TabsTrigger onClick={() => setTabsOpen(true)} value="awning">
                Zonwering
              </TabsTrigger>
            )}

            <TabsTrigger onClick={() => setTabsOpen(true)} value="extentions">
              Uitbreidingen
            </TabsTrigger>
            {/* <TabsTrigger onClick={() => setTabsOpen(true)} value="lighting">
              Verlichting
            </TabsTrigger> */}
          </TabsList>
        </div>
      </div>

      <div ref={slidingMenu} className={`w-full bg-white h-full `}>
        <TabsContent value="baseInfo" className="w-full  sm:h-screen">
          <BaseInfoTab />
        </TabsContent>

        <TabsContent value="covering" className="w-full  sm:h-screen ">
          <CoveringTab />
        </TabsContent>

        <TabsContent value="awning" className="w-full  sm:h-screen ">
          <AwningTab />
        </TabsContent>

        <TabsContent value="extentions" className="w-full sm:h-svh ">
          <ExtentionsTab />
        </TabsContent>
        <TabsContent value="lighting" className="w-full sm:h-svh ">
          <LightingTab />
        </TabsContent>
        <PrevNextBtns />
      </div>
    </Tabs>
  );
}
