import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const ACTIVE_RADIUS = 260;

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const idleTimer = useRef(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setEnabled(false);
      return;
    }

    const root = document.documentElement;

    const showGrid = () => {
      root.style.setProperty("--grid-visible", "1");
      root.style.setProperty("--cursor-radius", `${ACTIVE_RADIUS}px`);
    };

    const hideGrid = () => {
      root.style.setProperty("--grid-visible", "0");
    };

    const onPointerMove = (e) => {
      setCursorVisible(true);

      x.set(e.clientX);
      y.set(e.clientY);

      root.style.setProperty("--cursor-x", `${e.clientX}px`);
      root.style.setProperty("--cursor-y", `${e.clientY}px`);

      showGrid();

      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(hideGrid, 1300);
    };

    const onPointerLeave = () => {
      setCursorVisible(false);
      hideGrid();
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        setCursorVisible(false);
        hideGrid();
      }
    };

    const onHover = (e) => {
      const interactive = e.target.closest(
        "a, button, [role='button'], .cursor-hover"
      );
      setHovering(Boolean(interactive));
      root.style.setProperty("--grid-hover", interactive ? "1" : "0");
    };

    hideGrid();

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);
    document.addEventListener("mouseover", onHover);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.removeEventListener("mouseover", onHover);
      clearTimeout(idleTimer.current);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* 🌌 Cursor Glow */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
      >
        <motion.div
          className="w-[260px] h-[260px] rounded-full blur-[90px] cursor-glow-gradient"
          animate={{
            scale: hovering ? 1.3 : 1,
            opacity: hovering ? 1 : 0.6,
          }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
        />
      </motion.div>

      {/* 🎯 Cursor Dot */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
      >
        <div className="w-3 h-3 rounded-full bg-white mix-blend-difference" />
      </motion.div>
    </>
  );
}
