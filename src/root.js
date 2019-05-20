import { root, StaticViewGroup } from 'adajs';
import Table from './table';
import './style/index.css';

@root()
class Root extends StaticViewGroup {
    onready() {
        this.addChild(Table, {
            parameter: {
                cols: [{ title: "AA", key: "aa", width: 100 }, { title: "BB", key: "bb", width: 100 }, { title: "CC", key: "cc", width: 100 }],
                data: [
                    { aa: "aaaa1", bb: "bbbbb1", cc: "ccccc1" },
                    { aa: "aaaa2", bb: "bbbbb2", cc: "ccccc2" },
                    { aa: "aaaa3", bb: "bbbbb3", cc: "ccccc3" }
                ],
                toolPosition: 'right',
                tools: [
                    { title: 'aa', action: 'aa', icon: "a" },
                    { title: 'bb', action: 'bb', icon: "b" }
                ]
            }
        });
    }
}

export default Root;