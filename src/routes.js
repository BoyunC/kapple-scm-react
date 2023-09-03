import AddRetailer from "./pages/AddRetailer";
import AddSupplier from "./pages/AddSupplier";
import CompareRetailer from "./pages/CompareRetailer";
import CompareSupplier from "./pages/CompareSupplier";
import Home from "./pages/Home";
import RetailerDetail from "./pages/RetailerDetail";
import ShowChart from "./pages/ShowChart";
import SupplierDetail from "./pages/SupplierDetail";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/addSupplier",
        component: AddSupplier,
    },
    {
        path: "/addRetailer",
        component: AddRetailer,
    },
    {
        path: "/supplierDetail",
        component: SupplierDetail,
    },
    {
        path: "/retailerDetail",
        component: RetailerDetail,
    },
    {
        path: "/compareSupplier",
        component: CompareSupplier,
    },
    {
        path: "/compareRetailer",
        component: CompareRetailer,
    },
    {
        path: "/showChart",
        component: ShowChart,
    },
];

export default routes;
