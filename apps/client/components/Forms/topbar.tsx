"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Topnav() {
  const pathname = usePathname()

  const lastTab = pathname.split("/").pop();
  const slug = pathname.split("/")[2]

  return (
    <div className="w-full max-w-6xl ml-10">
      <div className="flex mx-48 gap-6 justify-start mt-40">

        <Link href={`/form/${slug}/insights`}>
          <p className={lastTab === "insights"
            ? "font-bold text-black text-sm"
            : "font-bold text-stone-500 text-sm"}>
            Insights
          </p>
        </Link>

        <Link href={`/form/${slug}/submissions`}>
          <p className={lastTab === "submissions"
            ? "font-bold text-black text-sm"
            : "font-bold text-stone-500 text-sm"}>
            Submissions
          </p>
        </Link>

        <Link href={`/form/${slug}/share`}>
          <p className={lastTab === "share"
            ? "font-bold text-black text-sm"
            : "font-bold text-stone-500 text-sm"}>
            Share
          </p>
        </Link>

        <Link href={`/form/${slug}/integration`}>
          <p className={lastTab === "integration"
            ? "font-bold text-black text-sm"
            : "font-bold text-stone-500 text-sm"}>
            Integration
          </p>
        </Link>

        <Link href={`/form/${slug}/settings`}>
          <p className={lastTab === "settings"
            ? "font-bold text-black text-sm"
            : "font-bold text-stone-500 text-sm"}>
            Settings
          </p>
        </Link>

      </div>

      <div className="border-b border-stone-200 mx-48 mt-1" />
    </div>
  )
}