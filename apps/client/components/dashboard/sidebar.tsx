import { BiSolidUser, BiSolidCity } from "react-icons/bi";
import {
  TfiSettings,
  TfiTrash,
  TfiArrowTopRight,
  TfiBook,
  TfiComments,
  TfiThumbUp,
  TfiArrowCircleUp,
  TfiDribbble,
  TfiLayoutAccordionSeparated,
  TfiPlus,
  TfiMoney,
  TfiMapAlt,
} from "react-icons/tfi";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="min-h-screen bg-stone-100 border border-stone-200 w-62">
      
      {/* Avatar section */}
      <div className="max-w-64 flex p-2">
        <div className="flex gap-1 items-center mx-2">
          <BiSolidUser size={18} className="text-black" />
          <p className="text-sm font-bold text-stone-700">testuser</p>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-col gap-2.5 mt-4 items-start cursor-pointer">
        <SidebarItem icon={TfiDribbble} label="Home" isActive />
        <SidebarItem icon={BiSolidCity} label="Analytics" />
        <SidebarItem icon={TfiSettings} label="Settings" />
        <SidebarItem icon={TfiTrash} label="Trash" />
        <SidebarItem icon={TfiArrowCircleUp} label="Upgrade plan" highlight />
      </div>

      {/* Workspace */}
      <div className="flex flex-col mt-8 gap-2.5">
        <div className="mx-4 max-w-64 cursor-pointer">
          <p className="text-xs text-stone-500 font-bold">Workspaces</p>
        </div>

        <div className="mx-4 max-w-64">
          <p className="text-sm text-stone-600 font-semibold rounded-md hover:bg-stone-200 py-0.5">
            My workspace
          </p>
        </div>
      </div>

      {/* Product */}
      <div className="flex flex-col gap-2.5 mt-8">
        <div className="mx-4 max-w-64">
          <p className="text-xs text-stone-500 font-semibold">Product</p>
        </div>

        <SidebarItem icon={TfiLayoutAccordionSeparated} label="Templates" />
        <SidebarItem icon={TfiMapAlt} label="Road map" />
        <SidebarItem icon={TfiPlus} label="What's new" highlight />

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiMoney className="text-black" />
            <p className="text-sm font-semibold text-stone-600">Rewards</p>
          </div>
        </div>
      </div>

      {/* Help */}
      <div className="max-w-64 flex flex-col gap-2.5 mt-8">
        <div className="mx-4 max-w-64">
          <p className="text-xs text-stone-500 font-semibold">Help</p>
        </div>

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiArrowTopRight className="text-black" />
            <p className="text-sm font-semibold text-stone-600">Get Started</p>
          </div>
        </div>

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiBook className="text-black" />
            <p className="text-sm font-semibold text-stone-600">Docs</p>
          </div>
        </div>

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiThumbUp className="text-black" />
            <p className="text-sm font-semibold text-stone-600">Help Center</p>
          </div>
        </div>

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiComments className="text-black" />
            <p className="text-sm font-semibold text-stone-600">
              Contact Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
