import { createFileRoute } from "@tanstack/react-router";
import RemoteRoute from "remote/Route";

export const Route = createFileRoute("/remote")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="h-full">
      <RemoteRoute />
    </div>
  );
}
