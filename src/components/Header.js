import { Body } from "./Body";

export const Header = () => {
  return (
    <div>
      <div className="absolute right-12 space-x-12">
        <ul className="flex items-center space-x-8 py-3 ">
          <li>Help</li>
          <li>Orders & returns</li>
          <li>Hi, John</li>
        </ul>
      </div>
      <div>
        <div className="flex flex-row">
          <div className="bold font-bold text-3xl m-6 py-5">ECOMMERCE</div>
          <div className="m-4">
            <ul className="px-64 m-6 font-bold flex items-center space-x-8 py-3">
              <li>Categories</li>
              <li>Sales</li>
              <li>Clearance</li>
              <li>New stock</li>
              <li>pending</li>
              <div className="flex justify-between absolute right-16 space-x-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-200 h-10 w-auto p-2">
        <p className="text-center"> Get 10% off on business sign up </p>
      </div>
      <Body />
    </div>
  );
};
