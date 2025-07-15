
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Eye, MessageSquare, Filter, Plane } from "lucide-react";
import CaseDetailModal from "@/components/CaseDetailModal";
import { fetchDisputes, type Dispute } from "@/services/disputeService";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCase, setSelectedCase] = useState<Dispute | null>(null);
  const [statusFilter, setStatusFilter] = useState("all");

  const { data: disputes = [], isLoading, error, refetch } = useQuery({
    queryKey: ['disputes'],
    queryFn: fetchDisputes,
  });

  const filteredCases = disputes.filter((dispute) => {
    const matchesSearch = dispute.case_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dispute.customer_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || dispute.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "in-review": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "resolved": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "escalated": return "bg-red-500/20 text-red-300 border-red-500/30";
      default: return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-slate-500";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400 mx-auto mb-4"></div>
          <p className="text-slate-300">Loading disputes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">Error loading disputes</p>
          <p className="text-slate-400">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur-sm shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-teal-500/20 px-3 py-1 rounded-lg">
                <Plane className="h-5 w-5 text-teal-400" />
                <span className="text-teal-300 font-medium">TAKAMOL Aviation Disputes</span>
              </div>
              <div className="border-l border-slate-600 pl-4">
                <h1 className="text-3xl font-bold text-slate-100">Dispute Adjudicator Portal</h1>
                <p className="text-slate-400 mt-1">Review and manage customer dispute cases</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="px-3 py-1 bg-slate-800 text-slate-300 border-slate-600">
                {filteredCases.length} Active Cases
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search by case ID or customer name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-slate-700 rounded-md bg-slate-800/50 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-review">In Review</option>
                <option value="resolved">Resolved</option>
                <option value="escalated">Escalated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCases.map((dispute) => (
            <Card key={dispute.id} className="hover:shadow-xl transition-all duration-200 border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-semibold text-slate-100">
                      {dispute.case_id}
                    </CardTitle>
                    <p className="text-sm text-slate-400 mt-1">{dispute.customer_name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getPriorityColor(dispute.priority)}`}></div>
                    <Badge className={`text-xs ${getStatusColor(dispute.status)}`}>
                      {dispute.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-slate-300">Dispute Type</p>
                    <p className="text-sm text-slate-400">{dispute.dispute_type}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-300">Amount</p>
                    <p className="text-sm text-slate-100 font-semibold">${Number(dispute.amount).toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-300">Submitted</p>
                    <p className="text-sm text-slate-400">{formatDate(dispute.submitted_date)}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-700">
                    <Button
                      onClick={() => setSelectedCase(dispute)}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white border-0"
                      size="sm"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Review Case
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-200 mb-2">No cases found</h3>
            <p className="text-slate-400">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Case Detail Modal */}
      {selectedCase && (
        <CaseDetailModal
          case_={selectedCase}
          onClose={() => setSelectedCase(null)}
          onUpdate={() => refetch()}
        />
      )}
    </div>
  );
};

export default Index;
