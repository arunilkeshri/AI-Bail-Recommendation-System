import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Eye, ArrowUpDown } from "lucide-react";

interface Case {
  id: string;
  defendant: string;
  charge: string;
  riskLevel: "Low" | "Medium" | "High";
  status: "Pending" | "Approved" | "Denied";
  dateSubmitted: string;
  bailAmount: string;
}

interface CaseListProps {
  onViewCase?: (caseId: string) => void;
}

export default function CaseList({ onViewCase }: CaseListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  //todo: remove mock functionality - replace with real case data
  const mockCases: Case[] = [
    {
      id: "CASE-2024-001",
      defendant: "John Smith",
      charge: "Theft",
      riskLevel: "Low",
      status: "Approved",
      dateSubmitted: "2024-01-15",
      bailAmount: "$5,000"
    },
    {
      id: "CASE-2024-002",
      defendant: "Maria Garcia",
      charge: "DUI",
      riskLevel: "Medium",
      status: "Pending",
      dateSubmitted: "2024-01-14",
      bailAmount: "$10,000"
    },
    {
      id: "CASE-2024-003",
      defendant: "Robert Johnson",
      charge: "Assault",
      riskLevel: "High",
      status: "Denied",
      dateSubmitted: "2024-01-13",
      bailAmount: "$25,000"
    },
    {
      id: "CASE-2024-004",
      defendant: "Sarah Wilson",
      charge: "Fraud",
      riskLevel: "Medium",
      status: "Approved",
      dateSubmitted: "2024-01-12",
      bailAmount: "$15,000"
    },
    {
      id: "CASE-2024-005",
      defendant: "Michael Brown",
      charge: "Burglary",
      riskLevel: "High",
      status: "Pending",
      dateSubmitted: "2024-01-11",
      bailAmount: "$20,000"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "bg-chart-2/10 text-chart-2 border-chart-2/20";
      case "Medium": return "bg-chart-3/10 text-chart-3 border-chart-3/20";
      case "High": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-chart-2/10 text-chart-2 border-chart-2/20";
      case "Denied": return "bg-destructive/10 text-destructive border-destructive/20";
      case "Pending": return "bg-chart-3/10 text-chart-3 border-chart-3/20";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const filteredCases = mockCases.filter(caseItem => {
    const matchesSearch = caseItem.defendant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseItem.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseItem.charge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || caseItem.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleViewCase = (caseId: string) => {
    console.log('View case:', caseId);
    onViewCase?.(caseId);
  };

  return (
    <Card data-testid="case-list-container">
      <CardHeader>
        <CardTitle>Case Management</CardTitle>
        <CardDescription>Review and manage bail recommendation cases</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search cases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              data-testid="input-search-cases"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48" data-testid="select-status-filter">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="denied">Denied</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2" data-testid="button-sort">
            <ArrowUpDown className="h-4 w-4" />
            Sort
          </Button>
        </div>

        {/* Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Defendant</TableHead>
                <TableHead>Charge</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Bail Amount</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCases.map((caseItem) => (
                <TableRow key={caseItem.id} data-testid={`case-row-${caseItem.id}`}>
                  <TableCell className="font-mono text-sm">{caseItem.id}</TableCell>
                  <TableCell className="font-medium">{caseItem.defendant}</TableCell>
                  <TableCell>{caseItem.charge}</TableCell>
                  <TableCell>
                    <Badge className={getRiskColor(caseItem.riskLevel)} data-testid={`badge-risk-${caseItem.id}`}>
                      {caseItem.riskLevel}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(caseItem.status)} data-testid={`badge-status-${caseItem.id}`}>
                      {caseItem.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{caseItem.dateSubmitted}</TableCell>
                  <TableCell className="font-mono">{caseItem.bailAmount}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewCase(caseItem.id)}
                      data-testid={`button-view-${caseItem.id}`}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-8 text-muted-foreground" data-testid="no-cases-message">
            No cases found matching your criteria.
          </div>
        )}
      </CardContent>
    </Card>
  );
}