import { useState } from "react";
import CaseList from "@/components/CaseList";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Download, Filter, BarChart } from "lucide-react";

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  //todo: remove mock functionality - replace with real case statistics
  const caseStats = [
    { label: "Total Cases", value: "2,847", color: "text-foreground" },
    { label: "Pending", value: "143", color: "text-chart-3" },
    { label: "Approved", value: "2,156", color: "text-chart-2" },
    { label: "Denied", value: "548", color: "text-destructive" }
  ];

  const handleViewCase = (caseId: string) => {
    setSelectedCase(caseId);
    console.log('Viewing case details:', caseId);
  };

  const handleNewCase = () => {
    console.log('Creating new case');
  };

  const handleExport = () => {
    console.log('Exporting case data');
  };

  const handleFilter = () => {
    console.log('Opening filter options');
  };

  const handleAnalytics = () => {
    console.log('Opening analytics view');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold">Case Management</h1>
            <p className="text-muted-foreground">
              Review, track, and manage all bail recommendation cases in your system.
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              onClick={handleAnalytics}
              data-testid="button-analytics"
            >
              <BarChart className="h-4 w-4 mr-2" />
              Analytics
            </Button>
            <Button 
              variant="outline" 
              onClick={handleExport}
              data-testid="button-export"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button 
              onClick={handleNewCase}
              data-testid="button-new-case"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Case
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {caseStats.map((stat, index) => (
            <Card key={index} data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}>
              <CardContent className="p-4 text-center">
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case List */}
        <CaseList onViewCase={handleViewCase} />

        {/* Selected Case Quick View */}
        {selectedCase && (
          <Card className="border-primary/20 bg-primary/5" data-testid="selected-case-preview">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <span>Case Details</span>
                    <Badge variant="outline">{selectedCase}</Badge>
                  </CardTitle>
                  <CardDescription>
                    Quick preview of selected case information
                  </CardDescription>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedCase(null)}
                  data-testid="button-close-preview"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Status</div>
                  <Badge className="mt-1">Pending Review</Badge>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Risk Level</div>
                  <Badge variant="secondary" className="mt-1">Medium</Badge>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Last Updated</div>
                  <div className="text-sm mt-1">2 hours ago</div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Button size="sm" data-testid="button-view-full-case">
                  View Full Case
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}