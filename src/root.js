import { root, StaticViewGroup } from 'adajs';
import './style/index.css';
import './style/style.css';
import Container from './main/container';
import Index from "./main/index";
// import Login from './main/login';

@root()
class Root extends StaticViewGroup {
    onready() {
        this.addChild(Container, {
            parameter: {
                indexPage: 'main/index/index.js'
            }
        });
        // this.addChild(Login);
    }
}

export default Root;