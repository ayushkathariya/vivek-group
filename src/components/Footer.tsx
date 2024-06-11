import React from "react";

export default function Footer() {
  return (
    <footer className="py-3 bg-bg-black">
      <div>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 items-center justify-between">
              <div>
                <h3 className="text-lg font-bold mb-4 text-bg-white">
                  Vivek Logo
                </h3>
                <p className="text-sm text-bg-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-bg-white">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-bg-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-bg-white">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-bg-white">
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-bg-white">
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-bg-white">
                  Support
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-bg-white">
                      Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-bg-white">
                      Help
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-bg-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-bg-white">
                      Customer Support
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-bg-white">Legals</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-bg-white">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-bg-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-bg-white">
                      Licensing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-bg-white">
                      Licensing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 text-center">
          © 2024 Vivek&apos;s Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
