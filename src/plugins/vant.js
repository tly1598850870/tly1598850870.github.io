import Vue from 'vue'
import 'vant/lib/index.css'
import { 
    Tabbar,
    TabbarItem,
    NavBar,Icon,
    DropdownMenu,
    DropdownItem,
    Cell,
    CellGroup,
    Switch,
} from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Button);
Vue.use(Field);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Switch);
