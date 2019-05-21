import { root, StaticViewGroup } from 'adajs';
import './style/index.css';
import './style/style.css';
import Test from './test';

@root()
class Root extends StaticViewGroup {
    onready() {
        this.addChild(Test);
    }
}

export default Root;