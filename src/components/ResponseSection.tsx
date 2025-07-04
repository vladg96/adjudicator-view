
import { useState } from "react";
import { Send, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ResponseSectionProps {
  case_: any;
  onClose: () => void;
}

const ResponseSection = ({ case_, onClose }: ResponseSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [reply, setReply] = useState(case_.currentReply || "");
  const { toast } = useToast();

  const handleSendReply = () => {
    toast({
      title: "Reply sent successfully",
      description: `Reply has been sent to ${case_.customerName}`,
    });
    setIsEditing(false);
    onClose();
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-slate-200">
          <span className="flex items-center gap-2">
            <Edit className="h-5 w-5 text-teal-400" />
            TAKAMOL Official Response
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
            className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-slate-200"
          >
            {isEditing ? "Cancel" : "Draft Response"}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <Textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Draft your official response to the passenger..."
              className="min-h-[200px] resize-none bg-slate-900/50 border-slate-700 text-slate-200 placeholder:text-slate-400 focus:border-teal-500"
            />
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-slate-200"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSendReply}
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Official Response
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 min-h-[120px]">
              <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                {reply || "No response has been drafted yet. Click 'Draft Response' to compose an official TAKAMOL response to the passenger."}
              </p>
            </div>
            {reply && (
              <Button
                onClick={handleSendReply}
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Official Response
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResponseSection;
