import { useEffect, useState } from "react";
import { MediaControls, MediaPlayer, MediaProvider } from "@vidstack/react";
import { ChevronRight, Info, Timer, Videotape } from "lucide-react";

import useTimer from "@/app/hooks/useTimer";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const Attempt = () => {
  const createdAt = new Date();
  const deadline = createdAt.setMinutes(createdAt.getMinutes() + 10);
  const { minutes, seconds } = useTimer(deadline);

  return (
    <div className="flex flex-1 flex-col gap-2 px-8 py-4 h-full">
      <div className="flex flex-col space-y-1.5">
        <h1 className="font-semibold text-2xl">Part 1: Planned Response</h1>
        <span className="text-muted-foreground">
          Plan and deliver a response of up to 2 minutes to a video clip and
          accompanying prompt presented on a computer screen. You are assessed
          on your ability to present your ideas and opinions fluently and
          effectively to engage the listener.
        </span>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col border">
        <div className="flex mt-4 mx-4 items-center font-medium text-muted-foreground">
          <Videotape className="size-4 mr-2" /> Oral practice
        </div>
        <Separator className="my-3" />
        <div className="flex flex-col xl:flex-row overflow-y-auto w-full px-6 pb-6 pt-2 gap-x-12">
          <div className="flex flex-col w-full xl:w-7/12 mb-4 xl:mb-0">
            <video controls src="http://localhost:8000/uploads/video.mp4" />
          </div>
          <div className="flex flex-col w-full xl:w-5/12 h-full">
            <span className="mt-4 mb-3 text-muted-foreground font-medium-light text-sm flex items-center">
              <ChevronRight className="mr-2 w-4 h-4" /> Prompt
            </span>
            <div className="flex border p-3 rounded items-center text-muted-foreground mb-4 text-sm bg-muted/50">
              <Info className="size-4 mr-2" />
              <span>Plan your response for the following question.</span>
            </div>
            <p className="mb-7 text-lg font-medium">
              Do you think that social media has changed the lives of youths for
              the better? Why or why not?
            </p>
            <div className="border w-full rounded bg-blue-100 border-blue-200 p-4 flex flex-col opacity-80 hover:opacity-100">
              <span
                className={cn(
                  "text-blue-500/80 font-medium flex items-center mb-1.5",
                  minutes <= 0 && seconds <= 0 && "text-red-500/80",
                )}
              >
                <Timer className="size-4 mr-2" />
                Time remaining
              </span>
              <span className="text-2xl text-blue-500 font-medium-light">
                {minutes} min {seconds} s
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attempt;
