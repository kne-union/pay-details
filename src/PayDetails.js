import React from 'react';
import { Flex, Radio, Select, InputNumber, Input, Space, Alert } from 'antd';
import { payType } from './enums';
import defaultCurrencies from './defaultCurrencies';
import useControlValue from '@kne/use-control-value';
import { hooks } from '@kne/react-form-antd';
import useSimulationBlur from '@kne/use-simulation-blur';
import get from 'lodash/get';
import style from './style.module.scss';
import classnames from 'classnames';
import FormatPayDetails from './FormatPayDetails';
import zhCn from './locale/zh-CN';
import { createWithIntlProvider, useIntl } from '@kne/react-intl';

const { useDecorator } = hooks;

const PayDetailsField = createWithIntlProvider(
  'zh-CN',
  zhCn,
  'pay-details'
)(({ currencies = defaultCurrencies, onBlur, ...props }) => {
  const [value, onChange] = useControlValue(props);
  const { formatMessage } = useIntl();
  const ref = useSimulationBlur(onBlur);
  return (
    <Flex vertical gap={10} ref={ref}>
      <Radio.Group
        value={get(value, 'payType') || 'monthly'}
        onChange={e => {
          onChange(value => {
            return Object.assign({}, value, {
              payType: e.target.value
            });
          });
        }}
        options={payType.map(({ description, value }) => {
          return { value, label: description };
        })}
      />
      <Flex gap={8}>
        <Select
          value={get(value, 'currency') || 'USD'}
          onChange={currency => {
            onChange(value => {
              return Object.assign({}, value, {
                currency
              });
            });
          }}
          className={style['currencies-select']}
          placeholder="请选择币种"
          options={currencies.map(code => ({ value: code, label: code }))}
        />
        <Flex flex={1}>
          <Space.Compact>
            <InputNumber
              value={get(value, 'minimumAmount')}
              onChange={minimumAmount => {
                onChange(value => {
                  return Object.assign({}, value, {
                    minimumAmount
                  });
                });
              }}
              className={'react-form__field-component'}
              placeholder="最小值"
              min={0}
            />
            <Input
              style={{
                width: 30,
                borderLeft: 0,
                borderRight: 0,
                pointerEvents: 'none'
              }}
              placeholder="~"
              disabled
            />
            <InputNumber
              value={get(value, 'maximumAmount')}
              onChange={maximumAmount => {
                onChange(value => {
                  return Object.assign({}, value, {
                    maximumAmount
                  });
                });
              }}
              className={'react-form__field-component'}
              placeholder="最大值"
              min={0}
            />
          </Space.Compact>
        </Flex>
      </Flex>
      <div>
        <div className={classnames('react-form__field-label', style['field-label'])}>额外薪资说明</div>
        <Input
          value={get(value, 'description')}
          onChange={e => {
            onChange(value => {
              return Object.assign({}, value, {
                description: e.target.value
              });
            });
          }}
          placeholder="请输入对候选人展示的额外薪资说明"
          maxLength={100}
        />
      </div>
      <Alert className={style['preview']} message={<FormatPayDetails value={value} />} />
    </Flex>
  );
});

const PayDetails = props => {
  const render = useDecorator({
    ...props,
    req: props?.rule?.indexOf('REQ') > -1
  });
  return render(PayDetailsField);
};

PayDetails.Field = PayDetailsField;

export default PayDetails;
