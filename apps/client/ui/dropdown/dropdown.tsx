"use client"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function DropdownUi() {
  return (
    <Command className="rounded-lg border shadow-md w-60 h-50">
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
          <CommandItem>
            <Calendar />
            <span>shortanswer</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>long answer</span>
          </CommandItem>
          <CommandItem>
            <User />
            <span>Payment</span>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Email</span>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Signature</span>
          </CommandItem>
          <CommandItem>
            <Calendar />
            <span>Checkboxes</span>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Dropdown</span>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Link</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>Wallet connect</span>
          </CommandItem>
      </CommandList>  
    </Command>
  )
}
