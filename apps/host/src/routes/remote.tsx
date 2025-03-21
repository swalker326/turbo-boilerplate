import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
//@ts-expect-error - no types yet
const Remote = lazy(() => import("remote/Route"));

export const Route = createFileRoute("/remote")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="h-full">
      <Remote />
    </div>
  );
}
