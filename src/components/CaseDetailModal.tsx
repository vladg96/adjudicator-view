
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Plane } from "lucide-react";
import CaseTimelineSidebar from "./CaseTimelineSidebar";
import PassengerInformation from "./PassengerInformation";
import IncidentReport from "./IncidentReport";
import ResponseSection from "./ResponseSection";
import type { Dispute } from "@/services/disputeService";

interface CaseDetailModalProps {
  case_: Dispute;
  onClose: () => void;
  onUpdate?: () => void;
}

const CaseDetailModal = ({ case_, onClose, onUpdate }: CaseDetailModalProps) => {
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
            <span className="text-slate-200">Case {case_.case_id}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="flex gap-6 overflow-y-auto max-h-[calc(95vh-120px)]">
          {/* Left Sidebar - Timeline */}
          <CaseTimelineSidebar case_={case_} />

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Case Overview */}
            <PassengerInformation case_={case_} onUpdate={onUpdate} />

            {/* Incident Report and Evidence */}
            <IncidentReport case_={case_} />

            <Separator className="bg-slate-700" />

            {/* Reply Section */}
            <ResponseSection case_={case_} onClose={onClose} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseDetailModal;
