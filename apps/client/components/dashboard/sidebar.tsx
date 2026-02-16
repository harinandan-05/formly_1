import { BiSolidUser } from "react-icons/bi";
import { BiSolidCity } from "react-icons/bi";
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

export default function Sidebar() {
  return (
    <div className="min-h-screen bg-stone-100 border border-stone-200 w-62">
      {/* avatar section */}
      <div className="max-w-64 flex p-2">
        <div className="flex gap-1 items-center mx-2">
          <BiSolidUser size={18} color="black" />
          <p className="text-sm font-bold text-stone-700">testuser</p>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 mt-4 items-start">
        {/* Home tab */}
        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiDribbble color="black" />
            <p className="text-sm font-semibold text-stone-600">Home</p>
          </div>
        </div>

        {/* analytics tab */}
        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <BiSolidCity color="black" />
            <p className="text-sm font-semibold text-stone-600">Analytic</p>
          </div>
        </div>

        {/* settings */}
        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiSettings color="black" />
            <p className="text-sm font-semibold text-stone-600">Settings</p>
          </div>
        </div>

        {/* Trash */}
        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiTrash color="black" />
            <p className="text-sm font-semibold text-stone-600">Trash</p>
          </div>
        </div>

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiArrowCircleUp color="black" size={16} />
            <p className="text-sm font-semibold text-green-400">Upgrade Plan</p>
          </div>
        </div>
      </div>

      {/* workspace */}
      <div className="flex flex-col mt-8 gap-2.5">
        <div className="mx-4 max-w-64">
          <p className="text-xs text-stone-500 font-bold">Workspaces</p>
        </div>

        <div className="mx-4 max-w-64">
          <p className="text-sm text-stone-600 font-semibold rounded-md hover:bg-stone-200 py-0.5">
            My workspace
          </p>
        </div>
      </div>

      {/* product  */}

      <div className="flex flex-col gap-2.5 mt-8">
        <div className="mx-4 max-w-64">
          <p className="text-xs text-stone-500 font-semibold">Product</p>
        </div>

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiLayoutAccordionSeparated color="black" />
            <p className="text-sm font-semibold text-stone-600">Templates</p>
          </div>
        </div>

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiMapAlt color="black" />
            <p className="text-sm font-semibold text-stone-600">Roadmap</p>
          </div>
        </div>

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiPlus color="black" />
            <p className="text-sm font-semibold text-green-400">Whats new!</p>
          </div>
        </div>

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiMoney color="black" />
            <p className="text-sm font-semibold text-stone-600">Rewards</p>
          </div>
        </div>
      </div>

      <div className="max-w-64 flex flex-col gap-2.5 mt-8">
        <div className="mx-4 max-w-64">
          <p className="text-xs text-stone-500 font-semibold">Help</p>
        </div>

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiArrowTopRight color="black" />
            <p className="text-sm font-semibold text-stone-600">Get Started</p>
          </div>
        </div>

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiBook color="black" />
            <p className="text-sm font-semibold text-stone-600">Docs</p>
          </div>
        </div>

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiThumbUp color="black" />
            <p className="text-sm font-semibold text-stone-600">Help Center</p>
          </div>
        </div>

        <div className="max-w-64 flex items-center hover:bg-stone-200 rounded-md w-60 py-0.5">
          <div className="flex gap-1 items-center mx-4">
            <TfiComments color="black" />
            <p className="text-sm font-semibold text-stone-600">
              Contact Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
