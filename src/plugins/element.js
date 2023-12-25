import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    InputNumber,
    Checkbox,
    Upload,
    Message,
    MessageBox,
    Radio,
    RadioGroup,
    Badge,
    RadioButton,
    Table,
    TableColumn,
    Pagination,
    TabPane,
    Tag,
    Tabs,
    Image,
    Carousel,
    CarouselItem,
    Switch,
    Cascader,
    Backtop,
    Dialog,
    DatePicker,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Alert,
    Row,
    Col,
    Select,
    Option,
    BreadcrumbItem,
    Breadcrumb,
    Scrollbar,
    Steps,
    Step,
    Loading,
} from 'element-ui';
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.prototype.$ELEMENT = {
    zIndex: 1000
}
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Checkbox)
Vue.use(Upload)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Badge)
Vue.use(RadioButton)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Tabs)
Vue.use(Switch)
Vue.use(Cascader)
Vue.use(Image)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Backtop)
Vue.use(Dialog)
Vue.use(DatePicker)
Vue.use(Alert)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Select)
Vue.use(Option)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Scrollbar)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Loading)
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.component(CollapseTransition.name, CollapseTransition)