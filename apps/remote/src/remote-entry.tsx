import { Button } from "ui";

const RemoteEntry = () => {
  return (
    <div className="bg-green-900 h-full flex flex-col items-center justify-center">
      <h1 className="text-5xl">Remote Application</h1>
      <p>Remotes can be served via module federation</p>
      <Button>Button from Shared UI</Button>
    </div>
  );
};

export default RemoteEntry;
