"use client";
import {
  DiPostgresql,
  DiStackoverflow,
  DiNpm,
  DiApple,
  DiSwift,
  DiSass,
  DiUnitySmall,
  DiPhp,
} from "react-icons/di";

export default function Landing() {
  return (
    <div className="bg-white w-full min-h-screen">
      <nav className="w-full relative">
        <div className="px-3 mx-auto max-w-7xl mt-4 ">
          <div className="flex justify-between  items-center">
            {/* Logo */}
            <div className="text-3xl cursor-pointer font-bold font-serif">
              ~Formly
            </div>
            <div className="hidden md:flex items-center gap-5">
              <div className="cursor-pointer font-semibold text-gray-600">
                Pricing
              </div>
              <div className="pl-5 cursor-pointer font-semibold text-gray-600">
                Log in
              </div>
              <div className="pl-5 cursor-pointer font-semibold text-gray-600">
                Sign up
              </div>
              <button className="bg-yellow-300 font-semibold rounded-sm w-auto px-2 py-1 cursor-pointer">
                Create form
              </button>
            </div>
          </div>
          <div className="flex gap-4 absolute right-5 bottom-2 items-center md:hidden">
            <div className="font-medium cursor-pointer">Login</div>
            <div className="font-medium cursor-pointer">Sign up</div>
          </div>
        </div>
      </nav>

      {/* hero section */}
      <section className="w-full mt-40">
        <div className="w-full max-w-7xl mx-auto px-7">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight text-center">
              The simplest way to create forms
            </h1>
            <p className="px-1 text-md md:text-[19px] font-medium text-stone-800 text-center">
              Say goodbye to boring forms. Meet formly — the free, intuitive
              form builder you’ve been looking for.
            </p>
            <button className="bg-yellow-300 p-2 font-semibold mt-4 rounded-md self-center md:self-center">
              Create a free Form ››
            </button>
            <p className="text-center text-sm md:text-md">No signup required</p>
            <p className="text-center text-sm font-semibold mt-20 md:text-md ">
              Powering 500,000+ teams at the world’s best companies
            </p>
          </div>
        </div>
      </section>

      {/* partners icons section */}

      <section className="w-full mt-8">
        <div className="w-full max-w-7xl mx-auto flex px-20 md:px-60">
          <div className="grid grid-cols-3 gap-12 md:gap-20 md:grid-cols-6 justify-center place-items-center">
            <div className="w-10 h-10 md:w-14 md:h-14">
              <DiPostgresql className="w-full h-full" />
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14">
              <DiApple className="w-full h-full" />
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14">
              <DiNpm className="w-full h-full" />
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14">
              <DiStackoverflow className="w-full h-full" />
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14">
              <DiSwift className="w-full h-full" />
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14">
              <DiSass className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Second hero section */}

      <div className="w-full mt-30 md:mt-50">
        <div className="w-full max-w-7xl mx-auto flex flex-col">
          <div className="px-10 text-md md:text-3xl md:px-48">
            <h1 className="font-bold text-stone-900">
              A form builder like no other
            </h1>
          </div>
          <div className="px-10 text-md md:text-2xl md:px-48 mt-3 md:mt-5">
            <p className="font-medium text-stone-800">
              Tally makes it simple for anyone to build free online forms. No
              need to code just type your questions like you would in a doc.
            </p>
          </div>
        </div>
      </div>

      {/* 2nd cta */}

      <div className="border-yellow-300 border-5 mx-10 h-120 rounded-lg md:rounded-2xl mt-10 md:mx-72 md:h-96 max-w-7xl shadow-xl">
        <p className="font-bold pt-6 pl-5 text-2xl md:pt-8 md:pl-8 md:text-3xl">
          Unlimited forms and submissions for free
        </p>
        <p className="font-medium pl-5 mt-3 md:pl-8 md:mt-4 text-stone-800">
          Paywalls getting in the way? Not anymore. Tally gives you unlimited
          forms and submissions,
          <br /> completely free, as long as you stay within our fair usage
          guidelines.
        </p>
      </div>

      {/* 3rd cta */}

      <section>
        <div className="w-full max-w-7xl">
          <div className="flex flex-col md:flex-row mt-12 px-10 md:px-14 gap-6 ">
            <div className="border-gray-300 border-2 h-96 md:ml-56 md:flex-2 p-6 rounded-2xl hover:shadow-xl">
              <h1 className="font-bold text-lg ">Just start typing</h1>
              <p className="mt-3">
                Tally is a new type of online form builder that works like a
                text document. Just start typing on the page and insert blocks
                same as Notion.
              </p>
            </div>
            <div className="border-gray-300 border-2  flex-1 h-96 p-6 rounded-2xl hover:shadow-xl">
              <h1 className="font-bold text-lg">
                Privacy-friendly form builder
              </h1>
              <p className="mt-3">
                Your data privacy and security are our top priorities. We are
                GDPR compliant and treat your data with care and confidentiality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* review part */}

      <div className="w-full max-w-7xl md:mx-auto">
        <div className="mt-8 text-center px-10">
          <p className="text-sm md:text-3xl font-bold text-stone-500 ">
            "Loving Formly! Not sure why I only started using it now, so good!"
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="text-lg text-stone-900 font-bold">"Ben Lang"</p>
          <p className="text-sm text-stone-800">
            Angel investor previously at notion
          </p>
        </div>
      </div>

      <div className="w-full mt-24 md:mt-36">
        <div className=" max-w-7xl px-14 md:px-72 flex flex-col">
          <div className="font-bold text-md  md:text-3xl text-stone-900">
            Designed for you
          </div>
          <div className="font-mediium md:text-lg text-stone-800 mt-2 md:mt-1 ">
            Start from scratch or explore templates created by our community.
          </div>
        </div>
      </div>

      <div className="border-yellow-300 shadow-xl mx-10 border-4 mt-8 grid md:grid-cols-3 gap-10 md:gap-26 text-center pt-5 pb-5 max-w-7xl md:mx-72 rounded-2xl">
        <div className="">
          <h1 className="font-bold md:text-lg">Creators</h1>
          <p className="">Sell products online </p>
        </div>
        <div>
          <h1 className="font-bold text-lg ">Product</h1>
          <p>Gather audience feedback</p>
        </div>
        <div>
          <h1 className="font-bold text-lg">Marketing</h1>
          <p>Generate leads</p>
        </div>
        <div>
          <h1 className="font-bold text-lg">Hr</h1>
          <p>evaluate employee management</p>
        </div>
        <div>
          <h1 className="font-bold text-lg">Office</h1>
          <p>organize team events</p>
        </div>
        <div>
          <h1 className="font-bold text-lg">Personal</h1>
          <p>online team events</p>
        </div>
      </div>

      {/* footer section
      <div>
        <div className="w-full">
          <div className="max-w-7xl grid grid-cols-4 mx-72 mt-52 gap-32">
            <div>
              <h1 className="text-xl cursor-pointer font-bold font-serif">
                ~Formly
              </h1>
              <p className="font-bold">Made and hosted in the EU 🇪🇺</p>
              <p>© 2026 Formly BV</p>
            </div>
            <div>
              <h1>Product</h1>
              <p>Pricinng</p>
              <p>Features</p>
              <p>Customers</p>
              <p>RoadMap</p>
            </div>
            <div>
              <h1>Help</h1>
              <p>Get started</p>
              <p>Help Center</p>
              <p>Report Abuse</p>
            </div>
            <div>
              <h1>Company</h1>
              <p>About Us</p>
              <p>Blog</p>
              <p>Media Kit</p>
            </div>
          </div>
        </div>
      </div> */}

      <footer className="w-full border-t border-gray-200 mt-40">
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Brand */}
      <div className="space-y-3">
        <h1 className="text-2xl font-bold font-serif cursor-pointer">
          ~Formly
        </h1>
        <p className="text-sm font-medium text-gray-700">
          Made and hosted By harinandan
        </p>
        <p className="text-sm text-gray-500">
          © 2026 Formly
        </p>
      </div>

      {/* Product */}
      <div className="space-y-3">
        <h2 className="font-semibold text-gray-900">Product</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>Pricing</li>
          <li>Features</li>
          <li>Customers</li>
          <li>Roadmap</li>
        </ul>
      </div>

      {/* Help */}
      <div className="space-y-3">
        <h2 className="font-semibold text-gray-900">Help</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>Get Started</li>
          <li>Help Center</li>
          <li>Report Abuse</li>
        </ul>
      </div>

      {/* Company */}
      <div className="space-y-3">
        <h2 className="font-semibold text-gray-900">Company</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>About Us</li>
          <li>Blog</li>
          <li>Media Kit</li>
        </ul>
      </div>

    </div>
  </div>
</footer>

    </div>
  );
}
