import { ReactNode } from "react";

interface Hyper3DZoneProps {
  children: ReactNode;
  className?: string;
  selector?: string;
  tilt?: number;
  depth?: number;
}

const Hyper3DZone = ({
  children,
  className,
  selector = "[data-depth-card]",
  tilt = 14,
  depth = 220,
}: Hyper3DZoneProps) => {
  void selector;
  void tilt;
  void depth;

  return (
    <div className={`relative ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Hyper3DZone;
