import { Link, useParams } from "react-router-dom";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { ChevronRight, Info, Notebook, Timer, Videotape } from "lucide-react";

import useTimer from "@/app/hooks/useTimer";
import { getVideoVideosVideoIdGet } from "@/client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const AttemptPlan = () => {
  const { id } = useParams();
  const { data: submission, isLoading } = useQuery(
    queryOptions({
      queryKey: ["video", 6],
      queryFn: () =>
        getVideoVideosVideoIdGet({ path: { video_id: 6 } })
          .then((response) => response.data)
          .catch(() => undefined),
    }),
  );

  const attempt = submission?.attempts.find(
    (attempt) => attempt.id.toString() === id,
  );
  const attemptCreatedAt = attempt?.created_at && new Date(attempt.created_at);
  const deadline =
    attemptCreatedAt &&
    attemptCreatedAt.setMinutes(attemptCreatedAt.getMinutes() + 10);
  const { minutes, seconds } = useTimer(deadline ?? new Date());

  if (isLoading || !submission) return null;

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
      <div className="flex flex-col border rounded">
        <div className="flex mt-4 mx-4 items-center font-medium text-muted-foreground">
          <Videotape className="size-4 mr-2" /> Oral practice
        </div>
        <Separator className="my-3" />
        <div className="flex flex-col overflow-y-auto w-full px-6 pb-6 pt-2">
          <div className="flex flex-col xl:flex-row w-full gap-x-12">
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
                Do you think that social media has changed the lives of youths
                for the better? Why or why not?
              </p>
              <div
                className={cn(
                  "border w-full rounded bg-blue-100 border-blue-200 p-4 flex flex-col opacity-80 hover:opacity-100",
                  minutes <= 0 && seconds <= 0 && "bg-red-100 border-red-200",
                )}
              >
                <span
                  className={cn(
                    "text-blue-500/80 font-medium flex items-center mb-1.5",
                    minutes <= 0 && seconds <= 0 && "text-red-500/80",
                  )}
                >
                  <Timer className="size-4 mr-2" />
                  Time remaining
                </span>
                <span
                  className={cn(
                    "text-2xl text-blue-500 font-medium-light",
                    minutes <= 0 && seconds <= 0 && "text-red-500",
                  )}
                >
                  {minutes} min{"  "}
                  {seconds.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}{" "}
                  s
                </span>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col">
            <span className="text-muted-foreground font-medium-light text-sm flex items-center mb-4">
              <Notebook className="h-4 w-4 mr-2" />
              Notes
            </span>
            <Textarea />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8 gap-x-4 pb-8">
        <Link to="/">
          <Button variant="outline">Cancel</Button>
        </Link>
        <Link to="./../record">
          <Button>Next: Record response</Button>
        </Link>
      </div>
    </div>
  );
};

export default AttemptPlan;
