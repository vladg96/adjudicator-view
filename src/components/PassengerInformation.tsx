
import { User, DollarSign, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Dispute } from "@/services/disputeService";

interface PassengerInformationProps {
  case_: Dispute;
}

const PassengerInformation = ({ case_ }: PassengerInformationProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
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
              <p className="text-base text-slate-200">{case_.customer_name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">Contact Email</p>
              <p className="text-base text-slate-200">{case_.customer_email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">Dispute Category</p>
              <p className="text-base text-slate-200">{case_.dispute_type}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-slate-400 flex items-center gap-1">
                <DollarSign className="h-4 w-4 text-teal-400" />
                Compensation Claim
              </p>
              <p className="text-lg font-semibold text-slate-200">${Number(case_.amount).toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400 flex items-center gap-1">
                <Calendar className="h-4 w-4 text-teal-400" />
                Date Submitted
              </p>
              <p className="text-base text-slate-200">{formatDate(case_.submitted_date)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">Reference ID</p>
              <p className="text-base text-slate-200 font-mono bg-slate-700/50 px-2 py-1 rounded">
                {case_.transaction_id}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PassengerInformation;
