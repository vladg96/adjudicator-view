
import { Clock, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Dispute } from "@/services/disputeService";

interface WorkflowStep {
  id: number;
  title: string;
  status: string;
  date: string;
}

interface CaseTimelineSidebarProps {
  case_: Dispute;
}

const CaseTimelineSidebar = ({ case_ }: CaseTimelineSidebarProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      case "in-review": return "bg-teal-500/20 text-teal-300 border-teal-500/30";
      case "resolved": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "escalated": return "bg-red-500/20 text-red-300 border-red-500/30";
      default: return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high": return <AlertTriangle className="h-4 w-4 text-red-400" />;
      case "medium": return <Info className="h-4 w-4 text-amber-400" />;
      case "low": return <CheckCircle className="h-4 w-4 text-emerald-400" />;
      default: return <Info className="h-4 w-4 text-slate-400" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  // Calculate workflow steps based on actual data
  const submittedDate = formatDate(case_.submitted_date);
  const createdDate = formatDate(case_.created_at);
  
  const workflowSteps: WorkflowStep[] = [
    { id: 1, title: "Case Submitted", status: "completed", date: submittedDate },
    { id: 2, title: "Initial Review", status: case_.status === "pending" ? "current" : "completed", date: createdDate },
    { id: 3, title: "Investigation", status: case_.status === "in-review" ? "current" : case_.status === "resolved" || case_.status === "escalated" ? "completed" : "pending", date: case_.status === "in-review" ? "In Progress" : case_.status === "resolved" || case_.status === "escalated" ? formatDate(case_.updated_at) : "Pending" },
    { id: 4, title: "Resolution", status: case_.status === "resolved" ? "completed" : case_.status === "escalated" ? "escalated" : "pending", date: case_.status === "resolved" ? formatDate(case_.updated_at) : "Pending" }
  ];

  return (
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
            <span className="text-slate-200 font-semibold">${Number(case_.amount).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseTimelineSidebar;
