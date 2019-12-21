import React from "react";
import { Form, Icon, Input } from "antd";
import { Button, Block } from "components";
import { Link } from "react-router-dom";

import { validateField } from "utils/helpers";


const LoginForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid
    } = props;
    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                <Form
                    onSubmit={handleSubmit}
                    className="login-form"
                >
                    <Form.Item
                        validateStatus={validateField("email", touched, errors)}
                        hasFeedback
                        help={!touched.email ? "" : errors.email}
                    >
                        <Input
                            id="email"
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            placeholder="E-Mail"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus={validateField("password", touched, errors)}
                        hasFeedback
                        help={!touched.password ? "" : errors.password}
                    >
                        <Input
                            id="password"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            size="large"
                            placeholder="Пароль"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item>
                        {!isValid && <span>Error!</span>}
                        <Button onClick={handleSubmit} type="primary" size="large">
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
};


export default LoginForm;