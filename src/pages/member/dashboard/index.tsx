import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/components/views/Member/Dashboard";

const DashboardMemberPage = () => {
    return (
        <DashboardLayout title="Dashboard" description="dashboard member" type="member">
            <Dashboard />
        </DashboardLayout>
    )
}

export default DashboardMemberPage;