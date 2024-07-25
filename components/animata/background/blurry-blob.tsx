import { cn } from "@/libs/utils";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
}

export default function BlurryBlob({
  className,
  firstBlobColor,
}: BlobProps) {
  return (
        <div
          className={cn(
            "absolute h-72 w-72 animate-pop-blob rounded-sm p-8 blur-3xl filter",
            className,
            firstBlobColor,
          )}
        ></div>
  );
}
