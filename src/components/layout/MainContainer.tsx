import { ReactNode } from "react";

import Navbar from "@/components/navbar/Navbar";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      {children}
    </div>
  );
}
