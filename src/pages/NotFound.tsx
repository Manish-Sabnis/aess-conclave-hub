import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Compass } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md space-y-6">
        {/* Animated 404 */}
        <div className="space-y-2">
          <div className="text-9xl font-black bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
            404
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-destructive to-orange-500 rounded-full mx-auto"></div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">Lost in Space?</h1>
          <p className="text-muted-foreground">
            The page <code className="bg-muted px-1 rounded">"{location.pathname}"</code> seems to have drifted off into the cosmos.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <Home className="w-4 h-4" />
              Beam Me Home
            </Link>
          </Button>
        </div>

        {/* Fun fact */}
        <div className="pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            Even astronauts get lost sometimes. You're in IEEE!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;