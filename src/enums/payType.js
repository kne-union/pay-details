import React from 'react';
import { FormattedMessage } from '@kne/react-intl';

const payType = [
  { description: <FormattedMessage id="hourlyWage" />, value: 'hourly' },
  {
    description: <FormattedMessage id="monthlyPay" />,
    value: 'monthly'
  },
  { description: <FormattedMessage id="annualSalary" />, value: 'yearly' },
  {
    description: <FormattedMessage id="annualSalaryBonus" />,
    value: 'yearlyBonus'
  }
];

export default payType;
