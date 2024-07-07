import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const downloads = [
  {
    title: "Downloaded Song 1",
    artist: "Artist 1",
    album: "Album 1",
    duration: "3:45",
  },
  {
    title: "Downloaded Song 2",
    artist: "Artist 2",
    album: "Album 2",
    duration: "4:20",
  },
  // Add more downloaded songs here
];

const Downloads = () => {
  return (
    <div className="space-y-4">
      {downloads.map((song, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{song.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Artist: {song.artist}</p>
            <p>Album: {song.album}</p>
            <p>Duration: {song.duration}</p>
            <div className="flex space-x-2 mt-2">
              <Button>Play</Button>
              <Button variant="outline">Remove</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Downloads;