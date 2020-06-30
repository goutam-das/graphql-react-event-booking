import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
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
                <Typography.Title>Register</Typography.Title>
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
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">Register</Button>
                    <div className="register-now-container">Already have an account? <Link to="/login">login!</Link></div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;