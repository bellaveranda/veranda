import { useCustomization } from '@/context/Customization';
import Overview from './Overview';
import RequestForm from './RequestForm';
import Confirmation from './Confirmation';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function OverviewAndRequestForm() {
  const {
    overview,
    requestForm,
    setOverview,
    setRequestForm,
    setConfirmation,
  } = useCustomization();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="default">
          Overzicht
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[96vw] sm:max-w-[48vw] z-[52] rounded-sm">
        <DialogHeader>
          <DialogTitle>
            {overview ? 'Overzicht' : requestForm ? '' : 'Bevestiging'}
          </DialogTitle>
        </DialogHeader>
        <div className="min-h-[64vh]">
          {overview ? (
            <Overview />
          ) : requestForm ? (
            <RequestForm />
          ) : (
            <Confirmation />
          )}
        </div>
        <DialogFooter>
          {overview ? (
            <DialogClose asChild>
              <Button className="m-2" type="button" variant="outline">
                Annuleren
              </Button>
            </DialogClose>
          ) : null}

          {overview ? (
            <Button
              className="m-2"
              onClick={() => {
                setOverview(false);
                setRequestForm(true);
                setConfirmation(false);
              }}
              type="button"
            >
              Volgende
            </Button>
          ) : requestForm ? null : (
            <DialogClose asChild>
              <Button
                onClick={() => {
                  setOverview(true);
                  setRequestForm(false);
                  setConfirmation(false);
                }}
                type="button"
              >
                Sluiten
              </Button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
