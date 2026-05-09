import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

interface SkeletonProps {
  className?: string;
  rounded?:   "sm" | "md" | "lg" | "full";
}

// ─── Base Skeleton ────────────────────────────────────────────────────────────

function Skeleton({ className, rounded = "md" }: SkeletonProps) {
  const roundedStyles = {
    sm:   "rounded-sm",
    md:   "rounded-md",
    lg:   "rounded-xl",
    full: "rounded-full",
  };

  return (
    <div
      className={cn(
        "animate-pulse bg-white/6",
        roundedStyles[rounded],
        className
      )}
    />
  );
}

// ─── Product Card Skeleton ────────────────────────────────────────────────────

function ProductCardSkeleton() {
  return (
    <div className="bg-white/4 border border-white/8 rounded-2xl p-4 space-y-3">
      <Skeleton className="w-full h-48" rounded="lg" />
      <Skeleton className="w-3/4 h-4" />
      <Skeleton className="w-1/2 h-3" />
      <div className="flex items-center justify-between pt-1">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-20 h-8" rounded="lg" />
      </div>
    </div>
  );
}

// ─── Table Row Skeleton ───────────────────────────────────────────────────────

function TableRowSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-4 bg-white/4 border border-white/8 rounded-xl">
          <Skeleton className="w-10 h-10" rounded="full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="w-1/3 h-4" />
            <Skeleton className="w-1/5 h-3" />
          </div>
          <Skeleton className="w-20 h-4" />
          <Skeleton className="w-16 h-8" rounded="lg" />
        </div>
      ))}
    </div>
  );
}

// ─── Profile Skeleton ─────────────────────────────────────────────────────────

function ProfileSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="w-14 h-14" rounded="full" />
      <div className="space-y-2">
        <Skeleton className="w-32 h-4" />
        <Skeleton className="w-24 h-3" />
      </div>
    </div>
  );
}

// ─── Text Block Skeleton ──────────────────────────────────────────────────────

function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-3", i === lines - 1 ? "w-2/3" : "w-full")}
        />
      ))}
    </div>
  );
}

export {
  Skeleton,
  ProductCardSkeleton,
  TableRowSkeleton,
  ProfileSkeleton,
  TextSkeleton,
};