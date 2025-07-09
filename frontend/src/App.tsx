import { API } from "./api/Api.js";

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <button
        className={"p-2 rounded-2xl bg-gray-700 text-white"}
        onClick={async () => {
          await API.pingBackend();
        }}
      >
        Ping Backend
      </button>
    </div>
  );
}
