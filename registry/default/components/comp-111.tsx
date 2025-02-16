import { Button } from "@/registry/default/ui/button";
import { QrCode } from "lucide-react";

export default function Component() {
  return (
    <div className="divide-primary-foreground/30 inline-flex -space-x-px divide-x rounded-lg shadow-xs shadow-black/5 rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        size="icon"
        aria-label="QR code"
      >
        <QrCode size={16} aria-hidden="true" />
      </Button>
      <Button className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10">
        Sign in
      </Button>
    </div>
  );
}
