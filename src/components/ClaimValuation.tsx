import { Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Dispute } from "@/services/disputeService";

interface ClaimValuationProps {
  case_: Dispute;
}

const ClaimValuation = ({ case_ }: ClaimValuationProps) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-200">
          <Calculator className="h-5 w-5 text-teal-400" />
          Claim Valuation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-slate-200 leading-relaxed whitespace-pre-wrap">
          {case_.claim_valuation || "No valuation details provided"}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClaimValuation;