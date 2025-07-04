
import { AlertTriangle, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IncidentReportProps {
  case_: any;
}

const IncidentReport = ({ case_ }: IncidentReportProps) => {
  return (
    <>
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
              {case_.evidence.map((item: string, index: number) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-slate-900/50 rounded border border-slate-700 hover:border-teal-500/50 transition-colors">
                  <FileText className="h-4 w-4 text-teal-400" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default IncidentReport;
