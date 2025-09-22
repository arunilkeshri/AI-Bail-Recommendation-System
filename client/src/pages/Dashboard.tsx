import DashboardMetrics from "@/components/DashboardMetrics";
import DashboardCharts from "@/components/DashboardCharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  TrendingUp, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  User,
  FileText
} from "lucide-react";

export default function Dashboard() {
  //todo: remove mock functionality - replace with real activity data
  const recentActivity = [
    {
      id: 1,
      type: "case_approved",
      message: "Case CASE-2024-001 approved by Judge Martinez",
      time: "5 minutes ago",
      user: "Judge Martinez",
      icon: <CheckCircle className="h-4 w-4 text-chart-2" />
    },
    {
      id: 2,
      type: "case_pending",
      message: "New case CASE-2024-005 awaiting review",
      time: "12 minutes ago",
      user: "System",
      icon: <Clock className="h-4 w-4 text-chart-3" />
    },
    {
      id: 3,
      type: "high_risk",
      message: "High-risk case CASE-2024-004 flagged for review",
      time: "25 minutes ago",
      user: "AI System",
      icon: <AlertTriangle className="h-4 w-4 text-destructive" />
    },
    {
      id: 4,
      type: "case_completed",
      message: "Case CASE-2024-002 processing completed",
      time: "1 hour ago",
      user: "Court Clerk",
      icon: <FileText className="h-4 w-4 text-muted-foreground" />
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      task: "Review 3 pending high-priority cases",
      deadline: "Today, 2:00 PM",
      priority: "high"
    },
    {
      id: 2,
      task: "Weekly system performance report",
      deadline: "Tomorrow, 9:00 AM",
      priority: "medium"
    },
    {
      id: 3,
      task: "Court hearing preparation materials",
      deadline: "Friday, 10:00 AM",
      priority: "low"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium": return "bg-chart-3/10 text-chart-3 border-chart-3/20";
      case "low": return "bg-chart-2/10 text-chart-2 border-chart-2/20";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's what's happening with your AI Bail System today.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>

        {/* Metrics Cards */}
        <DashboardMetrics />

        {/* Charts Section */}
        <DashboardCharts />

        {/* Bottom Section: Activity & Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card data-testid="recent-activity-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>Latest system events and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover-elevate" data-testid={`activity-${activity.id}`}>
                    <div className="mt-0.5">{activity.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">{activity.message}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{activity.user}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card data-testid="upcoming-tasks-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Upcoming Tasks</span>
              </CardTitle>
              <CardDescription>Your scheduled activities and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-start justify-between p-3 rounded-lg hover-elevate" data-testid={`task-${task.id}`}>
                    <div className="flex-1">
                      <p className="text-sm text-foreground font-medium">{task.task}</p>
                      <p className="text-xs text-muted-foreground mt-1">{task.deadline}</p>
                    </div>
                    <Badge className={getPriorityColor(task.priority)} data-testid={`priority-${task.id}`}>
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <Button variant="outline" className="w-full" data-testid="button-view-all-tasks">
                  View All Tasks
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}