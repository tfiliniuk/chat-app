import React from "react";
import { Form, Icon, Input } from "antd";
import { Button, Block } from "components";
import { Link } from "react-router-dom";

const success = false;

const RegisterForm = props => {
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
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                { !success ? 
                    <Form 
                        onSubmit={handleSubmit} 
                        className="login-form"
                    >
                    <Form.Item 
                        validateStatus={!touched.email ? "" : errors.email ? "error" : "success"} 
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
                    <Form.Item validateStatus="success" hasFeedback>
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        size="large"
                        placeholder="Ваше имя"
                        />
                    </Form.Item>
                    <Form.Item 
                        validateStatus={!touched.password ? "" : errors.password ? "error" : "success"} 
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
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        size="large"
                        placeholder="Повторить пароль"
                        />
                    </Form.Item>
                    <Form.Item>
                        {!isValid && <span>Error!</span>}
                        <Button onClick={handleSubmit} type="primary" size="large">
                        Зарегистрироваься
                    </Button>
                    </Form.Item>
                    <Form.Item>
                        <Link className="auth__register-link" to="/login">Войти в акаунт</Link>
                    </Form.Item>
                </Form> : 
                <div className="auth__success-block">
                    <div>
                        <Icon type="info-circle" theme="twoTone" />
                    </div>
                    <h2>Подтвердить свой аккаунт</h2>
                    <p>На вашу почту оправлено письмо с ссылкой на подтверждение аккаунта.</p>
                </div>
                }
            </Block>
        </div>
    )
};


export default RegisterForm;