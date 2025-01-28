"use client";

import { usePathname } from "next/navigation";

export default function useInvalidPaths() {
  const pathName = usePathname();

  const invalidPaths = ["studio", "admin"];

  // isInvalid return true if one of the items in invalidPaths is in the path name, otherwise it returns false
  const isInvalid = invalidPaths.some((path) => pathName.includes(path));

  return isInvalid;
}
