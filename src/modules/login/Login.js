import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import Banner from "../../asset/banner.svg";
import "./login.css";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => (
  <div className="loginContainer">
    <div className="bannerContainer">
      <img alt="something" src={Banner} className="bannerImage" />
    </div>
    <div className="formContainer">
      <h3>Spectical Asset Pvt Ltd</h3>
      <p>Estates made easy</p>
      <p
        style={{
          width: "60%",
          textAlign: "center",
          marginInline: "auto",
          marginBottom: "30px",
          color: "darkgray",
          fontSize: "small",
        }}
      >
        Do you also want to kickstart your entrepreneurial journey in the real
        estate industry?
      </p>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);
export default Login;
