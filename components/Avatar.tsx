const PALETTE = [
  "bg-green-700",
  "bg-amber-600",
  "bg-blue-600",
  "bg-purple-600",
  "bg-teal-600",
  "bg-rose-600",
];

function pickColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Avatar({ name }: { name: string }) {
  return (
    <div
      className={`w-11 h-11 rounded-full ${pickColor(name)} flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-sm ring-2 ring-white`}
    >
      {initials(name)}
    </div>
  );
}
