import React, { useEffect, useRef, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}

interface HeaderProps {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}

interface CardProps {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}

export const ContainerScroll = ({ titleComponent, children }: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => (isMobile ? [0.84, 0.96] : [1.05, 1]);

  const rotate = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[58rem] items-center justify-center p-2 md:h-[78rem] md:p-20"
    >
      <div
        className="relative w-full py-10 md:py-40"
        style={{ perspective: "1000px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: HeaderProps) => (
  <motion.div
    style={{ translateY: translate }}
    className="mx-auto max-w-5xl text-center"
  >
    {titleComponent}
  </motion.div>
);

export const Card = ({ rotate, scale, children }: CardProps) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
    }}
    className="mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] border-4 border-primary/30 bg-card/75 p-2 shadow-2xl backdrop-blur-xl md:h-[40rem] md:p-6"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black/35 md:rounded-2xl md:p-4">
      {children}
    </div>
  </motion.div>
);
