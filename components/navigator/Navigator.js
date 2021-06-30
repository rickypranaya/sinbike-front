import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer} from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import Splash from "../../screens/Splash";
import CreateAccount from "../../screens/login/CreateAccount";
import EnterPhone from "../../screens/login/EnterPhone";
import Otp from "../../screens/login/Otp";
import Login from "../../screens/login/Login";
import Home from "../../screens/Home";
import Reserve from "../../screens/Reserve";
import ScanBikeQR from "../../screens/ride/ScanBikeQR";
import CheckBike from "../../screens/ride/CheckBike";
import ReportFaulty from "../../screens/ride/ReportFaulty";
import Riding from "../../screens/ride/Riding";
import EndTrip from "../../screens/ride/EndTrip";
import ScanParking from "../../screens/ride/ScanParking";
import TripInfo from "../../screens/ride/TripInfo";
import Wallet from "../../screens/drawer/Wallet";
import Profile from "../../screens/drawer/Profile";
import Contact from "../../screens/drawer/Contact";
import Constant from "../Constants";


const Navigator = createStackNavigator({
    splash:Splash,
    login: Login,
    create:  CreateAccount,
    phone: EnterPhone,
    otp : Otp,
    home: Home,
    reserve: Reserve,
    scanBikeQR:ScanBikeQR,
    checkBike: CheckBike,
    reportFaulty:ReportFaulty,
    riding:Riding,
    endTrip:EndTrip,
    scanParking:ScanParking,
    tripInfo: TripInfo,
    wallet: Wallet,
    profile: Profile,
    contact: Contact,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: true,
  },
  defaultNavigationOptions: () => ({
    cardStyle: {
        backgroundColor: "white",
    },
}),
 });

export default createAppContainer(Navigator);