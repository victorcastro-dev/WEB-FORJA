const motionScript = `
(() => {
  try {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.dataset.motion = prefersReducedMotion ? "reduce" : "ok";
  } catch {
    document.documentElement.dataset.motion = "ok";
  }
})();
`;

export function MotionScript() {
  return <script dangerouslySetInnerHTML={{ __html: motionScript }} />;
}
