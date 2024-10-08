"use client";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CirclePlus } from "lucide-react";

import { SetStateAction, useState } from "react";
import { FormCreateCustomer } from "../FormCreateCustomer";

export function HeaderCompanies() {
  const [openModalCreate, setOpenModalCreate] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <h2 text-2xl>List of Companies</h2>

      <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
        <DialogTrigger asChild>
          <Button>Create Company</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Create Customer</DialogTitle>
            <DialogDescription>
              Create and configure your customer
            </DialogDescription>
          </DialogHeader>
          <FormCreateCustomer
            setOpenModalCreate={function (
              value: SetStateAction<boolean>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
