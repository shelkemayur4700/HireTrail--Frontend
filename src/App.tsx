import type { FC } from "react";
import { Button } from "./components/ui/button";

const App: FC = () => {
  return (
    <div className="h-screen flex items-center  justify-center">
      <h2>App</h2>
      <Button variant={"ghost"}>Hello</Button>
    </div>
  );
};

export default App;
