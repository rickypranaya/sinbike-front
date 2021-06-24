import {
    Dimensions
} from 'react-native';

class Constant {
    static DEVICE_WIDTH = Dimensions.get('window').width;
    static DEVICE_HEIGHT = Dimensions.get('window').height;
    static PRIMARY_COLOR = '#FF6B37';
    static GREY_COLOR = '#999999';
    static BASE_URL = 'https://sinbike.herokuapp.com/api';


}

export default Constant;
