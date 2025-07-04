
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Send, Edit, FileText, User, Calendar, DollarSign, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CaseDetailModal = ({ case_, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [reply, setReply] = useState(case_.currentReply || "");
  const { toast } = useToast();

  const handleSendReply = () => {
    // Here you would normally send the reply to your backend
    toast({
      title: "Reply sent successfully",
      description: `Reply has been sent to ${case_.customerName}`,
    });
    setIsEditing(false);
    onClose();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "in-review": return "bg-blue-100 text-blue-800 border-blue-200";
      case "resolved": return "bg-green-100 text-green-800 border-green-200";
      case "escalated": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high": return "text-red-600 bg-red-50";
      case "medium": return "text-yellow-600 bg-yellow-50";
      case "low": return "text-green-600 bg-green-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-blue-600" />
            Case Details - {case_.caseId}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Case Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Case Overview
                </span>
                <div className="flex items-center gap-2">
                  <Badge className={`${getPriorityColor(case_.priority)} px-2 py-1`}>
                    {case_.priority.toUpperCase()} PRIORITY
                  </Badge>
                  <Badge className={getStatusColor(case_.status)}>
                    {case_.status.toUpperCase()}
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Customer Name</p>
                    <p className="text-base text-gray-900">{case_.customerName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Email</p>
                    <p className="text-base text-gray-900">{case_.customerEmail}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Dispute Type</p>
                    <p className="text-base text-gray-900">{case_.disputeType}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700 flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      Disputed Amount
                    </p>
                    <p className="text-lg font-semibold text-gray-900">${case_.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Submitted Date
                    </p>
                    <p className="text-base text-gray-900">{case_.submittedDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Transaction ID</p>
                    <p className="text-base text-gray-900 font-mono">{case_.transactionId}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Complaint */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Customer Complaint
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-800 leading-relaxed">{case_.complaint}</p>
              </div>
            </CardContent>
          </Card>

          {/* Evidence */}
          {case_.evidence && case_.evidence.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Supporting Evidence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {case_.evidence.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Separator />

          {/* Reply Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Edit className="h-4 w-4" />
                  Adjudicator Reply
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? "Cancel" : "Edit Reply"}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-4">
                  <Textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Enter your reply to the customer..."
                    className="min-h-[200px] resize-none"
                  />
                  <div className="flex justify-end gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSendReply}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Reply to Customer
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                      {reply || "No reply has been drafted yet. Click 'Edit Reply' to compose a response."}
                    </p>
                  </div>
                  {reply && (
                    <Button
                      onClick={handleSendReply}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Reply to Customer
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseDetailModal;
