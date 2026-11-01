export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/**
 * Base classes for an image frame. Tailwind does not de-duplicate conflicting
 * utilities, so the defaults are only added when the caller has not supplied
 * its own position or background.
 */
export function frameClasses(className?: string): string {
  const hasPosition = /(^|\s)(absolute|fixed|sticky|relative)(\s|$)/.test(className ?? "");
  const hasBackground = /(^|\s)bg-/.test(className ?? "");
  return cn("media overflow-hidden", !hasPosition && "relative", !hasBackground && "bg-space", className);
}
