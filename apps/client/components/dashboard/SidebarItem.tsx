interface ItemProps {
  label: string;
  icon: React.ElementType;
  isActive?: boolean;
  highlight?: boolean; 
}

export default function SidebarItem({
  label,
  icon: Icon,
  isActive = false,
  highlight = false,
}: ItemProps) {
  return (
    <div
      className={`max-w-64 flex items-center rounded-md w-60 py-0.5 hover:bg-stone-200 ${
        isActive ? "bg-stone-200" : ""
      }`}
    >
      <div className="flex gap-1 items-center mx-4">
        <Icon
          className={highlight ? "text-green-500" : "text-black"}
          size={16}
        />
        <p
          className={`text-sm font-semibold ${
            highlight ? "text-green-600" : "text-stone-600"
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
