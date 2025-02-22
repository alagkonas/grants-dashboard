import { shimmer } from "@/components/skeletons/shimmer";

export function UserGreetingSkeleton() {
  return (
    <div className="hidden lg:block h-60 w-1/5 bg-white rounded-xl shadow-sm">
      <div className={`${shimmer} h-[250px] w-full rounded-lg bg-gray-200`} />
    </div>
  );
}
