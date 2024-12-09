import Link from "next/link";

export default function Footer() {
  return (
    <main className="w-full bg-white py-16">
      <footer className="w-full py-4 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address Column */}
            <div className="text-sm text-gray-500 mt-12">
              <p className="font-semibold text-gray-700">GIAIC Student</p>
              <p>Pakistan, Sindh, Karachi</p>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-700">Links</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="/" className="hover:underline text-gray-500">
                  Home
                </Link>
                <Link href="/shop" className="hover:underline text-gray-500">
                  Shop
                </Link>
                <Link href="/about" className="hover:underline text-gray-500">
                  About
                </Link>
                <Link href="/contact" className="hover:underline text-gray-500">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Help Column */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-700">Help</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link
                  href="/help/payment-options"
                  className="hover:underline text-gray-500"
                >
                  Payment Options
                </Link>
                <Link
                  href="/help/returns"
                  className="hover:underline text-gray-500"
                >
                  Returns
                </Link>
                <Link
                  href="/help/privacy-policies"
                  className="hover:underline text-gray-500"
                >
                  Privacy Policies
                </Link>
              </nav>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-700">Newsletter</h3>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors rounded-sm"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} TANZEEL STORE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
