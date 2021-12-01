import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ArticleIcon from '@mui/icons-material/Article';
import FlightIcon from '@mui/icons-material/Flight';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type RouteType = {
    name: string;
    path: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export enum MyRoutes {
    LOGIN = "/login",
    FORGOT_PASSWORD = "/login/forgot",
    CHANGE_PASSWORD = "/login/reset",

    PROFILE = "/app/profile",
    HOME = "/app",
    POSTS = "/app/posts",
    ORDERS = "/app/orders",
    CUSTOMERS = "/app/customers",
    FLIGHTS = "/app/flights",
    ANALYTICS = "/app/analytics",
    SETTINGS = "/app/settings",
    PORTS = "/app/ports"
}

export const privateRoute = [

]


export const menuRoutes: RouteType[] = [
    { name: "Ports", path: MyRoutes.PORTS, icon: FlightIcon },
    { name: "Orders", path: MyRoutes.ORDERS, icon: ArticleIcon },
    { name: "Customers", path: MyRoutes.CUSTOMERS, icon: PersonRoundedIcon },
    // { name: "Flights", path: MyRoutes.FLIGHTS, icon: AirplaneTicketIcon },
    { name: "Analyitcs", path: MyRoutes.ANALYTICS, icon: AnalyticsIcon },
    // { name: "Settings", path: MyRoutes.SETTINGS, icon: SettingsIcon },
]

export const publicRoute = []