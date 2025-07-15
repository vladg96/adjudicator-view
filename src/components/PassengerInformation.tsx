
import { User, DollarSign, Calendar, Edit2, Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { updateDisputeAmount } from "@/services/disputeService";
import { useToast } from "@/hooks/use-toast";
import type { Dispute } from "@/services/disputeService";

interface PassengerInformationProps {
  case_: Dispute;
  onUpdate?: (updatedCase: Partial<Dispute>) => void;
}

const PassengerInformation = ({ case_, onUpdate }: PassengerInformationProps) => {
  const [isEditingAmount, setIsEditingAmount] = useState(false);
  const [amountValue, setAmountValue] = useState(case_.amount.toString());
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const handleAmountUpdate = async () => {
    if (!amountValue || isNaN(Number(amountValue))) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid number",
        variant: "destructive",
      });
      return;
    }

    setIsUpdating(true);
    try {
      await updateDisputeAmount(case_.id, Number(amountValue));
      setIsEditingAmount(false);
      // Pass the updated amount to the parent component
      onUpdate?.({ amount: Number(amountValue) });
      toast({
        title: "Amount updated",
        description: "The compensation amount has been updated successfully",
      });
    } catch (error) {
      console.error('Error updating amount:', error);
      toast({
        title: "Update failed",
        description: "Failed to update the compensation amount",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancelEdit = () => {
    setAmountValue(case_.amount.toString());
    setIsEditingAmount(false);
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
              {isEditingAmount ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-slate-200 mr-1">$</span>
                    <Input
                      type="number"
                      step="0.01"
                      value={amountValue}
                      onChange={(e) => setAmountValue(e.target.value)}
                      className="w-24 h-8 bg-slate-700 border-slate-600 text-slate-200"
                      disabled={isUpdating}
                    />
                  </div>
                  <Button
                    size="sm"
                    onClick={handleAmountUpdate}
                    disabled={isUpdating}
                    className="h-8 w-8 p-0 bg-teal-600 hover:bg-teal-700"
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleCancelEdit}
                    disabled={isUpdating}
                    className="h-8 w-8 p-0 border-slate-600 hover:bg-slate-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <p className="text-lg font-semibold text-slate-200">${Number(case_.amount).toFixed(2)}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      console.log('Edit button clicked');
                      setIsEditingAmount(true);
                    }}
                    className="h-8 px-2 border-slate-600 hover:bg-slate-700 hover:border-teal-500 transition-colors"
                  >
                    <Edit2 className="h-4 w-4 text-slate-400 mr-1" />
                    <span className="text-xs text-slate-400">Edit</span>
                  </Button>
                </div>
              )}
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
