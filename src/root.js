import { root, StaticViewGroup } from 'adajs';
import './style/index.css';
import './style/style.css';
import Container from './main/container';
// import Login from './main/login';

@root()
class Root extends StaticViewGroup {
    onready() {
        this.addChild(Container);
        // this.addChild(Login);
    }
}

export default Root;