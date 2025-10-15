import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("bg-indigo-600 hover:bg-indigo-700");
  const [rounded, setRounded] = useState("rounded-xl");
  const [textSize, setTextSize] = useState("text-3xl");

  return (
    <>
      <div className="min-h-full flex flex-col items-center justify-center p-6">
        <h1 className={`${textSize} font-semibold text-white`}>
          Hello React + Tailwind v4
        </h1>
        <p className="mt-2 text-slate-300">
          Use the controls to experiment with Tailwind utilities in real time.
        </p>
        <div className="mt-6">
          <button
            className={`${color} ${rounded} px-6 py-3 text-white font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-400`}
          >
            Tailwind Button
          </button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Control label="Color">
            <Select
              value={color}
              onChange={setColor}
              options={[
                "bg-indigo-600 hover:bg-indigo-700",
                "bg-blue-600 hover:bg-blue-700",
                "bg-emerald-600 hover:bg-emerald-700",
                "bg-rose-600 hover:bg-rose-700",
                "bg-amber-500 hover:bg-amber-600",
              ]}
            />
          </Control>
          <Control label="Rounded">
            <Select
              value={rounded}
              onChange={setRounded}
              options={[
                "rounded-md",
                "rounded-xl",
                "rounded-2xl",
                "rounded-full",
              ]}
            />
          </Control>
          <Control label="Text Size">
            <Select
              value={textSize}
              onChange={setTextSize}
              options={[
                "text-xl",
                "text-2xl",
                "text-3xl",
                "text-4xl",
                "text-5xl",
              ]}
            />
          </Control>
        </div>
        <p className="mt-8 text-sm text-slate-400 text-center">
          Try changing classes in JSX - Tailwind hot-reloads instantly
        </p>
      </div>
    </>
  );
}

function Control({ label, children }) {
  return (
    <label className="block">
      <span className="block mb-1 text-slate-200 text-sm">{label}</span>
      {children}
    </label>
  );
}

function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white/80 text-slate-900 px-3 py-2 rounded-md outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-indigo-400"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default App;
