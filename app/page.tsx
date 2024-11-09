import { Button } from "./_components/ui/button";

export default function Home() {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <h1 className="p-5 text-red-500">Dashboard</h1>
      <Button>Click me</Button>
    </div>
  );
}
