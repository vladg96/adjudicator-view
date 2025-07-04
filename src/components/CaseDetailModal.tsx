
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Send, Edit, FileText, User, Calendar, DollarSign, AlertTriangle, Plane, Clock, CheckCircle, XCircle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CaseDetailModal = ({ case_, onClose }) => {
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

  const getStatusColor = (status) => {
    switch (status) {
      case "pending": return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      case "in-review": return "bg-teal-500/20 text-teal-300 border-teal-500/30";
      case "resolved": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "escalated": return "bg-red-500/20 text-red-300 border-red-500/30";
      default: return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "high": return <AlertTriangle className="h-4 w-4 text-red-400" />;
      case "medium": return <Info className="h-4 w-4 text-amber-400" />;
      case "low": return <CheckCircle className="h-4 w-4 text-emerald-400" />;
      default: return <Info className="h-4 w-4 text-slate-400" />;
    }
  };

  const workflowSteps = [
    { id: 1, title: "Case Submitted", status: "completed", date: case_.submittedDate },
    { id: 2, title: "Initial Review", status: case_.status === "pending" ? "current" : "completed", date: "2024-01-16" },
    { id: 3, title: "Investigation", status: case_.status === "in-review" ? "current" : case_.status === "resolved" || case_.status === "escalated" ? "completed" : "pending", date: case_.status === "in-review" ? "In Progress" : "2024-01-18" },
    { id: 4, title: "Resolution", status: case_.status === "resolved" ? "completed" : case_.status === "escalated" ? "escalated" : "pending", date: case_.status === "resolved" ? "2024-01-20" : "Pending" }
  ];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[95vh] overflow-hidden bg-slate-900 border-slate-700 text-slate-100">
        <DialogHeader className="border-b border-slate-700 pb-4">
          <DialogTitle className="flex items-center gap-3 text-xl">
            <div className="flex items-center gap-2 bg-teal-500/20 px-3 py-1 rounded-lg">
              <Plane className="h-5 w-5 text-teal-400" />
              <span className="text-teal-300 font-medium">TAKAMOL Aviation Disputes</span>
            </div>
            <span className="text-slate-300">|</span>
            <span className="text-slate-200">Case {case_.caseId}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="flex gap-6 overflow-y-auto max-h-[calc(95vh-120px)]">
          {/* Left Sidebar - Workflow */}
          <div className="w-80 bg-slate-800/50 rounded-lg p-4 h-fit">
            <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-teal-400" />
              Case Timeline
            </h3>
            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <div key={step.id} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                      step.status === "completed" 
                        ? "bg-teal-500 border-teal-500 text-white" 
                        : step.status === "current"
                        ? "bg-teal-500/20 border-teal-500 text-teal-400"
                        : step.status === "escalated"
                        ? "bg-red-500 border-red-500 text-white"
                        : "bg-slate-700 border-slate-600 text-slate-400"
                    }`}>
                      {step.status === "completed" || step.status === "escalated" ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <span className="text-xs font-bold">{step.id}</span>
                      )}
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div className={`w-0.5 h-8 mt-2 ${
                        step.status === "completed" ? "bg-teal-500" : "bg-slate-600"
                      }`} />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <h4 className={`font-medium ${
                      step.status === "current" ? "text-teal-300" : "text-slate-300"
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-400">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Case Summary */}
            <div className="mt-6 pt-6 border-t border-slate-700">
              <h4 className="font-medium text-slate-200 mb-3">Case Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Priority:</span>
                  <div className="flex items-center gap-1">
                    {getPriorityIcon(case_.priority)}
                    <span className="text-slate-300 capitalize">{case_.priority}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <Badge className={`text-xs ${getStatusColor(case_.status)}`}>
                    {case_.status.toUpperCase()}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Amount:</span>
                  <span className="text-slate-200 font-semibold">${case_.amount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Case Overview */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-slate-200">
                  <span className="flex items-center gap-2">
                    <User className="h-5 w-5 text-teal-400" />
                    Passenger Information
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-slate-400">Passenger Name</p>
                      <p className="text-base text-slate-200">{case_.customerName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400">Contact Email</p>
                      <p className="text-base text-slate-200">{case_.customerEmail}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400">Dispute Category</p>
                      <p className="text-base text-slate-200">{case_.disputeType}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-slate-400 flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-teal-400" />
                        Compensation Claim
                      </p>
                      <p className="text-lg font-semibold text-slate-200">${case_.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400 flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-teal-400" />
                        Date Submitted
                      </p>
                      <p className="text-base text-slate-200">{case_.submittedDate}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400">Reference ID</p>
                      <p className="text-base text-slate-200 font-mono bg-slate-700/50 px-2 py-1 rounded">
                        {case_.transactionId}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Passenger Complaint */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-200">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                  Incident Report
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                  <p className="text-slate-300 leading-relaxed">{case_.complaint}</p>
                </div>
              </CardContent>
            </Card>

            {/* Evidence */}
            {case_.evidence && case_.evidence.length > 0 && (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-200">Supporting Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {case_.evidence.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-slate-900/50 rounded border border-slate-700 hover:border-teal-500/50 transition-colors">
                        <FileText className="h-4 w-4 text-teal-400" />
                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Separator className="bg-slate-700" />

            {/* Reply Section */}
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseDetailModal;
