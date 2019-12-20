import React, { Component } from "react";
import { Form, Icon, Input } from "antd";
import { Button, Block } from "components";
import { Link } from "react-router-dom";


class LoginForm extends Component {
    render() {
        return (
            <div>
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item validateStatus="success" hasFeedback>
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            size="large"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large">
                            Войти в акаунт
                        </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link className="auth__register-link" to="/register">Зарегистрироваься</Link>
                        </Form.Item>
                    </Form>
                </Block>
            </div>
        )
    }
}

export default LoginForm;