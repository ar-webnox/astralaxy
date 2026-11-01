"use client";

import { m } from "framer-motion";

/** A hairline that draws itself outward from the centre as a section arrives. */
export function SectionRule() {
  return (
    <div aria-hidden="true" className="absolute inset-x-0 top-0">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <m.div
          className="h-px origin-center bg-gradient-to-r from-transparent via-white/25 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
