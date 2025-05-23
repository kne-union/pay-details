
# pay-details


### 描述

一个用于薪资/支付范围选择的复合表单组件


### 安装

```shell
npm i --save @kne/pay-details
```


### 概述

一个用于薪资/支付范围选择的复合表单组件，支持货币选择、金额区间设置和附加说明输入，内置国际化支持和数据预览功能。

### 核心功能

#### 💱 货币选择
- 默认支持多种货币（USD/CNY/EUR等）
- 可通过`currencies` prop自定义货币列表
- 自动保存用户选择状态

#### 🔢 金额区间输入
- 最小值/最大值联动输入
- 自动校验数值有效性（min=0）
- 实时范围预览

#### 📝 附加说明
- 100字符限制的文本输入
- 用于展示给候选人的额外说明

### 数据格式
组件处理的数据结构：
```typescript
interface PayDetailsValue {
  payType: 'monthly' | 'yearly';
  currency: string;
  minimumAmount: number;
  maximumAmount: number;
  description?: string;
}
```

### 预览功能
内置`FormatPayDetails`子组件，实时渲染当前选择的支付方案，示例输出：
`月薪 US$15,000 ~ 20,000(含绩效奖金)`

### 注意事项
1. 需要配合@kne/react-form-antd表单库使用

2. 国际化文本存储在zh-CN.js语言包

3. 金额输入框会自动过滤非数字字符

### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _PayDetails(@kne/current-lib_pay-details)[import * as _PayDetails from "@kne/pay-details"],(@kne/current-lib_pay-details/dist/index.css)[import * as _PayDetails from "@kne/pay-details/dist/index.css"],_reactFormAntd(@kne/react-form-antd),(@kne/react-form-antd/dist/index.css)

```jsx
const { default: PayDetails } = _PayDetails;
const { default: Form } = _reactFormAntd;

const BaseExample = () => {
  return (
    <Form>
      <PayDetails name="pay-details" label="薪资" />
    </Form>
  );
};

render(<BaseExample />);

```


### API

| 属性         | 类型       | 默认值               | 说明        |
|------------|----------|-------------------|-----------|
| currencies | string[] | defaultCurrencies | 可选的货币代码列表 |
