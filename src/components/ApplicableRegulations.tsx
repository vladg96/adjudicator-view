import { Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Dispute } from "@/services/disputeService";

interface ApplicableRegulationsProps {
  case_: Dispute;
}

const ApplicableRegulations = ({ case_ }: ApplicableRegulationsProps) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-200">
          <Scale className="h-5 w-5 text-teal-400" />
          Applicable Regulations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-slate-200 leading-relaxed whitespace-pre-wrap">
          {case_.applicable_regulations || "No regulations specified"}
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicableRegulations;