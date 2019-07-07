import { BondViewGroup, handler } from 'adajs';
import Sidebox from './../modules/sidebox';

class BaseCurd extends BondViewGroup {
    @handler('open-tree-pannel')
    openTreePannel({ target, data: { treeType, treeOption, label, selects } }) {
        this.addChild(Sidebox, {
            container: this.getElement(),
            parameter: {
                title: label,
                innerType: treeType,
                innerOption: Object.assign({}, treeOption, {
                    borderLeft: false,
                    borderTop: false,
                    borderRight: false,
                    borderBottom: false
                }),
                btns: [
                    { name: 'Done', action: 'done' }
                ]
            }
        }).then(box => {
            box.getChildAt(0).setSelects(selects);
            box.on('done', () => {
                let nodes = box.getChildAt(0).getSelectedNodes();
                console.log(nodes);
                target.setValue(nodes.map(a => a.id));
                box.close();
            });
        })
    }

    @handler('open-table-pannel')
    openTablePannel({ target, data: { tableType, tableOption, label, selects } }) {
        this.addChild(Sidebox, {
            container: this.getElement(),
            parameter: {
                title: label,
                innerType: tableType,
                width: 700,
                innerOption: Object.assign({}, tableOption, {
                    borderLeft: false,
                    borderTop: false,
                    borderRight: false,
                    borderBottom: false
                }),
                btns: [
                    { name: 'Done', action: 'done' }
                ]
            }
        }).then(box => {
            box.getChildAt(0).setSelectIds(selects);
            box.on('done', () => {
                let nodes = box.getChildAt(0).getSelectedRows();
                console.log(nodes);
                target.setValue(nodes.map(a => a.id));
                box.close();
            });
        })
    }
}

export default BaseCurd;