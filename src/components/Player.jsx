import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-muted p-4 flex items-center justify-between">
      <div>
        <p>Currently Playing: Song Title</p>
        <p>Artist Name</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon">
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={togglePlayPause}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button variant="outline" size="icon">
          <SkipForward className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Player;