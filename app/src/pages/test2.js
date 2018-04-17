import {StaticViewGroup, view, dataset} from "adajs";
import FlipTable from "ada-uikit/src/table/fliptable";
import addIcon from "./../dashboard/icons/add.icon";
import closeIcon from "./../dashboard/icons/close.icon";

@view({
    className: "testpage2"
})
class TestPage extends StaticViewGroup {
    oncreated() {
        this.addChild(FlipTable, {
            option: {
                url: "/test.json",
                btns: [
                    {"name": "add", icon: addIcon},
                    {"name": "remove", icon: closeIcon}
                ],
                tableOption: {
                    rows: [
                        {name: "Name", key: "name", width: 120, align: "center", append: "middle"},
                        {name: "Sex", key: "sex", width: 120, align: "center", append: "middle"},
                        {name: "Age", key: "age", width: 120, align: "center", append: "middle"}
                    ]
                }
            },
            container:this.getElement()
        });
    }
}

export default TestPage;