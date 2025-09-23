import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, FileText, AlertTriangle, CheckCircle } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: React.ReactNode;
  testId: string;
}

function MetricCard({ title, value, change, trend, icon, testId }: MetricCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case "up": return "text-chart-2";
      case "down": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up": return <TrendingUp className="h-3 w-3" />;
      case "down": return <TrendingDown className="h-3 w-3" />;
      default: return null;
    }
  };

  return (
    <Card className="hover-elevate transition-all duration-200" data-testid={testId}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-1" data-testid={`${testId}-value`}>
          {value}
        </div>
        <div className={`flex items-center text-xs ${getTrendColor()}`} data-testid={`${testId}-change`}>
          {getTrendIcon()}
          <span className="ml-1">{change}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function DashboardMetrics() {
  //todo: remove mock functionality - replace with real metrics data
  const metrics = [
    {
      title: "Total Cases",
      value: "2,847",
      change: "+12.5% from last month",
      trend: "up" as const,
      icon: <FileText className="h-4 w-4" />,
      testId: "metric-total-cases"
    },
    {
      title: "Pending Reviews",
      value: "143",
      change: "-8.2% from last week",
      trend: "down" as const,
      icon: <AlertTriangle className="h-4 w-4" />,
      testId: "metric-pending-reviews"
    },
    {
      title: "Completed Today",
      value: "89",
      change: "+23.1% from yesterday",
      trend: "up" as const,
      icon: <CheckCircle className="h-4 w-4" />,
      testId: "metric-completed-today"
    },
    {
      title: "Active Users",
      value: "156",
      change: "No change",
      trend: "neutral" as const,
      icon: <Users className="h-4 w-4" />,
      testId: "metric-active-users"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          {...metric}
        />
      ))}
    </div>
  );
}