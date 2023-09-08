import AddRetailer from "./pages/AddRetailer";
import AddSupplier from "./pages/AddSupplier";
import CompareRetailer from "./pages/CompareRetailer";
import CompareSupplier from "./pages/CompareSupplier";
import Home from "./pages/Home";
import RetailerDetail from "./pages/RetailerDetail";
import ShowChart from "./pages/ShowChart";
import SupplierDetail from "./pages/SupplierDetail";
import ContractPage from "./pages/ContractPage";
import ShowContract from "./pages/ShowContract";

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
		path: "/addSupplier/:sppl_no",
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
		path: "/compareSupplier/:compo_name/:compo_no",
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
	{
		path: `/contract`,
		component: ContractPage,
	},

	{
		path: `/contracts`,
		component: ShowContract,
	},

	{
		path: `/contract/:proposal_no`,
		component: ContractPage,
	},
];

export default routes;
