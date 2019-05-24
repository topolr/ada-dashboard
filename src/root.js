import { root, StaticViewGroup } from 'adajs';
import './style/index.css';
import './style/style.css';
import Test from './test';
import Container from './main/container';

@root()
class Root extends StaticViewGroup {
    onready() {
        this.addChild(Container);
    }
}

export default Root;