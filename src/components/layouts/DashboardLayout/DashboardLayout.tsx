import PageHead from "@/components/commons/PageHead";
import DashboardLayoutSidebar from "./DashboardLayoutSidebar";
import { ReactNode, useState } from "react";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constans";
import { Navbar, NavbarMenuToggle } from "@nextui-org/react";

interface PropTypes {
    children?: ReactNode;
    title?: string;
    type?: string;
    description?: string;
}

const DashboardLayout = (props: PropTypes) => {

    const {children, description, title, type = 'admin'} = props;
    const [open, setOpen] = useState(false);
    return (
        <>
            <PageHead title={title}/>
            <div className="max-w-screen-3xl 3xl:container flex">
                <DashboardLayoutSidebar 
                sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER} 
                isOpen={open} 
                />
                <div className="h-screen w-full overflow-y-auto p-8">
                    <Navbar className="flex justify-between bg-transparent px-0" classNames={{wrapper:"p-0"}} isBlurred={false} position="static">
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <NavbarMenuToggle 
                        aria-label={open? "Close" : "Open"}
                        onClick={() => setOpen(!open)}
                        className="lg:hidden"
                        ></NavbarMenuToggle>
                    </Navbar>
                    <p className="mb-4 text-small">{description}</p>
                    {children}
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;