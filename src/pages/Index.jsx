import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="text-center space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Sinhala Songs App</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Listen to and download your favorite Sinhala songs.</p>
          <Button variant="outline" className="mt-4">Explore Songs</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;