"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { trackPageView } from "@/lib/analytics";

export function AnalyticsPageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    const path = search ? `${pathname}?${search}` : pathname;
    trackPageView(path);
  }, [pathname, search]);

  return null;
}
