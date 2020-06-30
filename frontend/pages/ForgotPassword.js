import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const ForgotPassword = () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className="login-form-container">
            <Form
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
                initialValues={{ size: "large", remember: true }}
                size="large"
            >
                <Typography.Title>Login</Typography.Title>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                    <div className="register-now-container">Have an account? <Link to="/login">login!</Link></div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ForgotPassword;