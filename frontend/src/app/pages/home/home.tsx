import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Speech } from "lucide-react";
import { toast } from "sonner";

import { createAttemptVideosVideoIdAttemptsPost } from "@/client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createAttemptMutation = useMutation({
    mutationFn: () =>
      createAttemptVideosVideoIdAttemptsPost({ path: { video_id: 6 } }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["attempts"] });
      navigate(`/attempts/${data.data?.id}/prepare`);
    },
    onError: () => {
      toast.error("Failed to create attempt");
    },
  });
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
            <Button
              className="mt-8"
              onClick={() => createAttemptMutation.mutate()}
            >
              Start practice
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
