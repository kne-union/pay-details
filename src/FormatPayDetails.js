import React from 'react';
import get from 'lodash/get';
import { payType } from './enums';

const FormatPayDetails = ({ value }) => {
  return (
    <>
      {get(
        payType.find(item => item.value === get(value, 'payType', 'monthly')),
        'description',
        ''
      )}
      &nbsp;
      {`${(get(value, 'minimumAmount') || 0).toLocaleString(navigator.language, {
        style: 'currency',
        currency: get(value, 'currency', 'USD'),
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      })}~${(get(value, 'maximumAmount') || 0).toLocaleString(navigator.language, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      })}${get(value, 'description') ? `(${get(value, 'description')})` : ''}`}
    </>
  );
};

export default FormatPayDetails;
