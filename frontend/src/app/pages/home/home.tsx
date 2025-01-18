import { Link } from "react-router-dom";
import { Speech } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col gap-2 px-8 py-4 h-full">
      <div className="flex flex-col space-y-1.5">
        <h1 className="font-semibold text-2xl">Home</h1>
        <span className="text-muted-foreground">Today's featured question</span>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col border rounded">
        <div className="flex mt-4 mx-4 items-center font-medium text-muted-foreground">
          <Speech className="size-4 mr-2" /> Oral practice
        </div>
        <Separator className="my-3" />
        <div className="flex flex-col xl:flex-row overflow-y-auto w-full px-4 pb-12 pt-2 gap-x-12 justify-center">
          <div className="flex flex-col w-full max-w-2xl h-full">
            <span className="mt-4 mb-2 text-muted-foreground font-[450] text-sm">
              Instructions
            </span>
            <p>
              You will be given 10 minutes to watch a video clip and plan your
              response to an accompanying prompt. After the 10 minutes, record
              your response to the prompt. The delivery of your planned response
              should take only up to 2 minutes.
            </p>
            <Link to="/attempts/1">
              <Button className="mt-8">Start practice</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
