import { ModeToggle } from "./components/shared/mode-toggle";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="flex justify-between w-[90%] mx-auto mt-2">
      <h1>Hello</h1>
      <ModeToggle />
      <Button variant="outline">Glow</Button>
    </div>
  );
}
