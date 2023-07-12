import clsx from "clsx";

export function GraphSkeleton({ className }) {
 return (
  <div className="flex flex-col items-center justify-center">
   <div className={clsx(className, "relative isolate h-80 w-full overflow-hidden rounded-md border border-neutral-900 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent")} />
  </div>
 );
}

export function TextSkeleton({ className }) {
 return <div className={clsx(className, "relative isolate h-6 w-64 overflow-hidden rounded-md border border-neutral-900 bg-neutral-500/40  before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent")} />;
}

export function InputSkeleton({ className }) {
 return <div className={clsx(className, "relative isolate h-10 w-full max-w-[20rem] overflow-hidden rounded-md border border-neutral-900 bg-neutral-500/40  before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent")} />;
}

export function EmbedSkeleton({ className }) {
 return <div className={clsx(className, "relative isolate h-96 w-full overflow-hidden rounded-md border border-neutral-900 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent")} />;
}

export function AvatarSkeleton({ className }) {
 return <div className={clsx(className, "relative isolate h-16 w-16 overflow-hidden rounded-full border border-neutral-900 bg-neutral-500/40 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent")} />;
}

export function ButtonSkeleton({ className }) {
 return <div className={clsx(className, "relative isolate h-10 w-32 overflow-hidden rounded-md border border-neutral-900 bg-neutral-500/40  before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent")} />;
}
