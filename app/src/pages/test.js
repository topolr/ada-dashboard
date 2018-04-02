import {StaticViewGroup, view, dataset} from "adajs";
import TreeService from "ada-uikit/src/tree/datasets/simple";
import Tree from "ada-uikit/src/tree/simple";
import MenuPage from "./../dashboard/menupage"

class TestPage extends MenuPage {
    @dataset(TreeService)
    treeDataSet;

    oncreated() {
        this.treeDataSet.commit("set", [
            {
                name: "aa", list: [
                    {name: "aaa", list: []},
                    {
                        name: "bbb", list: [
                            {name: "aaa", list: []},
                            {
                                name: "bbb", list: [
                                    {name: "aaa", list: []},
                                    {name: "bbb", list: []},
                                    {name: "ccc", list: []}
                                ]
                            },
                            {
                                name: "ccc", list: [
                                    {name: "aaa", list: []},
                                    {name: "bbb", list: []},
                                    {
                                        name: "ccc", list: [
                                            {name: "aaa", list: []},
                                            {name: "bbb", list: []},
                                            {name: "ccc", list: []}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {name: "ccc", list: []}
                ]
            },
            {
                name: "bb", list: [
                    {name: "aaa", list: []},
                    {name: "bbb", list: []},
                    {
                        name: "ccc", list: [
                            {name: "aaa", list: []},
                            {name: "bbb", list: []},
                            {name: "ccc", list: []}
                        ]
                    }
                ]
            },
            {
                name: "cc", list: [
                    {name: "ccc", list: []}
                ]
            }
        ]);
        this.addChild(Tree, {
            container: this.finder("body").getElement()
        });
    }
}

export default TestPage;