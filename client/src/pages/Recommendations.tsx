import RecommendationCards from "@/components/RecommendationCards";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Clock,
  RefreshCw,
  Settings,
  Download,
  Filter
} from "lucide-react";

export default function Recommendations() {
  //todo: remove mock functionality - replace with real recommendation statistics  
  const systemStats = [
    {
      label: "Pending Recommendations",
      value: "12",
      change: "+3 from yesterday",
      trend: "up",
      icon: <Clock className="h-5 w-5 text-chart-3" />
    },
    {
      label: "Today's Processed",
      value: "47",
      change: "+12% from avg",
      trend: "up", 
      icon: <TrendingUp className="h-5 w-5 text-chart-2" />
    },
    {
      label: "System Accuracy",
      value: "94.7%",
      change: "Consistent",
      trend: "stable",
      icon: <Shield className="h-5 w-5 text-primary" />
    },
    {
      label: "Avg. Processing Time",
      value: "2.3 min",
      change: "-15% this week",
      trend: "down",
      icon: <Brain className="h-5 w-5 text-primary" />
    }
  ];

  const handleAcceptRecommendation = (caseId: string) => {
    console.log('Recommendation accepted for case:', caseId);
  };

  const handleRejectRecommendation = (caseId: string) => {
    console.log('Recommendation rejected for case:', caseId);
  };

  const handleRefreshRecommendations = () => {
    console.log('Refreshing recommendations');
  };

  const handleSettings = () => {
    console.log('Opening AI settings');
  };

  const handleExport = () => {
    console.log('Exporting recommendations');
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up": return "text-chart-2";
      case "down": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold flex items-center space-x-3">
              <Brain className="h-8 w-8 text-primary" />
              <span>AI Recommendations</span>
            </h1>
            <p className="text-muted-foreground">
              Review AI-generated bail recommendations with confidence scores and detailed analysis.
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleSettings}
              data-testid="button-ai-settings"
            >
              <Settings className="h-4 w-4 mr-2" />
              AI Settings
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleExport}
              data-testid="button-export-recommendations"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button 
              size="sm"
              onClick={handleRefreshRecommendations}
              data-testid="button-refresh-recommendations"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* System Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemStats.map((stat, index) => (
            <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`system-stat-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className={`text-xs ${getTrendColor(stat.trend)}`}>
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI System Status */}
        <Card className="bg-gradient-to-r from-primary/5 to-chart-2/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-chart-2 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold">AI System Status: Active</div>
                  <div className="text-sm text-muted-foreground">
                    All systems operational • Last model update: 2 days ago
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Queue Status</div>
                  <div className="font-semibold">12 pending</div>
                </div>
                <Badge variant="secondary" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
                  Healthy
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filter Bar */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Active Recommendations</CardTitle>
                <CardDescription>
                  Current AI recommendations awaiting review and decision
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" data-testid="button-filter">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Recommendation Cards */}
        <RecommendationCards 
          onAcceptRecommendation={handleAcceptRecommendation}
          onRejectRecommendation={handleRejectRecommendation}
        />

        {/* AI Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-primary" />
              <span>AI Insights</span>
            </CardTitle>
            <CardDescription>
              Recent patterns and trends identified by the AI system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold mb-2 text-chart-2">Trend Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Cases with employment verification show 23% higher approval rates this month.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold mb-2 text-chart-3">Risk Factors</h4>
                <p className="text-sm text-muted-foreground">
                  Flight risk assessments have improved accuracy by 8% with recent model updates.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}