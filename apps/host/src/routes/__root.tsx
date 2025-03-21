import {
  Link,
  Outlet,
  createRootRouteWithContext,
  useRouterState
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { ModeToggle } from "../components/ModeToggle";

function RouterSpinner() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });
  return <div>{isLoading ? "🌀" : null}</div>;
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent
});

function RootComponent() {
  return (
    <>
      <div className={"min-h-screen flex flex-col"}>
        <header className="flex items-center justify-between border-b px-3">
          <div className="flex items-center border-b gap-2 relative">
            <h1 className="text-3xl p-2">Rsbuild Tanstack Turbo MF Tailwind</h1>
            {/* Show a global spinner when the router is transitioning */}
            <div className="text-3xl absolute -left-5 top-0">
              <RouterSpinner />
            </div>
          </div>
          <ModeToggle />
        </header>
        <div className={"flex-1 flex"}>
          <div className={"divide-y w-56"}>
            {(
              [
                ["/", "Home"],
                ["/remote", "Remote"]
                // ["/expensive", "Expensive"],
                // ["/route-a", "Pathless Layout A"],
                // ["/route-b", "Pathless Layout B"],
                // ["/profile", "Profile"],
                // ["/login", "Login"]
              ] as const
            ).map(([to, label]) => {
              return (
                <div key={to}>
                  <Link
                    to={to}
                    activeOptions={
                      {
                        // If the route points to the root of it's parent,
                        // make sure it's only active if it's exact
                        // exact: to === '.',
                      }
                    }
                    preload="intent"
                    className={"block py-2 px-3 text-blue-700"}
                    // Make "active" links bold
                    activeProps={{ className: "font-bold" }}
                  >
                    {label}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className={"flex-1 border-l"}>
            <Outlet />
          </div>
        </div>
      </div>
      <ReactQueryDevtools buttonPosition="bottom-left" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
