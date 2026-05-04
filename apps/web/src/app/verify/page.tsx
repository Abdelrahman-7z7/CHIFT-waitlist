export const runtime = "edge";

import { Loader2 } from "lucide-react";
import { Suspense } from "react";

import VerificationScreen from "@/features/verification/screens/VerificationScreen";

export default function VerifyPage() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <Loader2 className="h-12 w-12 text-primary animate-spin" />
          </div>
        }
      >
        <VerificationScreen />
      </Suspense>
    </main>
  );
}
