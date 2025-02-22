"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader } from "lucide-react";
import { Dialog as ShadcnDialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type DialogProps = React.PropsWithChildren<{
  dialogTitle: string
  dialogInfo: string;
  actionText: string;
  onAction: VoidFunction
  loading: boolean
}>

export default function Dialog({ children, dialogTitle, dialogInfo, onAction, actionText, loading }: DialogProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const submittedRef = useRef<boolean>(null);

  useEffect(() => {
    if (submittedRef && !loading) {
      setOpen(false);
    }
  }, [loading, router]);

  return (
    <ShadcnDialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-800">{dialogTitle}</DialogTitle>
          <DialogDescription className="text-xl text-gray-800">{dialogInfo}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button className="text-xl bg-white text-gray-800 hover:bg-gray-100" type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <form
            onSubmit={(event) => {
              onAction();
              event.preventDefault();
              submittedRef.current = true;
            }}
          >
            <Button className="text-xl bg-orange-600 text-white hover:bg-orange-700" type="submit" variant="secondary">
              {actionText}
              {loading && <Loader className="w-4 h-4 animate-spin [animation-duration:2s]" />}
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </ShadcnDialog>
  );
}
