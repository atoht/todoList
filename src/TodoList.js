import React, {Component} from "react";
import 'antd/dist/antd.css';
import { Input, Button, List} from 'antd';
import { NodeExpandOutlined } from '@ant-design/icons';
import store from './store';

class TodoList extends Component {

    constructor(props) {
        super(props);
        // 获取store到state
        this.state = store.getState();
        // 输入框内容改变时调用
        this.handleInputChange = this.handleInputChange.bind(this);
        // 点击提交按钮时调用
        this.handleClick = this.handleClick.bind(this);
        // 点击todo列表的项目时调用
        // this.handleItemDelete = this.handleItemDelete.bind(this);
        // 订阅store的state
        store.subscribe(this.handleStoreChange.bind(this));
    }

    render() {
        return (
            <div style={{marginTop:  '10px', marginLeft: '10px'}}>
                <div>
                    <Input value={this.state.inputValue} size="large" placeholder="large size" 
                        prefix={<NodeExpandOutlined />} style={{marginRight: '10px' , width: '300px'}} 
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleClick}>提交</Button>
                </div>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
                />
            </div>
        )
    }

    handleInputChange(e) {
        const action = {
            type: 'input_value_change',
            value: e.target.value
        }
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState()); 
    }

    handleClick() {
        const action = {
            type: 'todo_item_add'
        }
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = {
            type: 'todo_item_delete',
            value: index
        }
        store.dispatch(action);
    }
}

export default TodoList;