export const Body = () => {
  return (
    <div>
      <div className="m-8 box-border flex justify-center">
        <form className="bg-white shadow-md rounded px-8 pt-6">
          <div className="mb-4">
            <p className="font-bold text-center text-3xl mb-4">
              Create your account
            </p>
            <label className="block text-md font-bold mb-2" for="username">
              Name
            </label>
            <input
              class="shadow appearance-none border rounded mb-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter"
            ></input>

            <label className="block text-md font-bold mb-2 py-1" for="username">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded mb-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter"
            ></input>

            <label className="block text-md font-bold mb-2 py-1" for="username">
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 mb-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter"
            ></input>

            <button className="bg-black text-md text-white h-12 rounded py-3 mb-14 w-auto min-w-full flex flex-col items-center">
              CREATE ACCOUNT
            </button>
            <div className="mb-8">
              <p>Have an account? LOGIN</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
