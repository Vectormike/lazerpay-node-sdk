import { LazerApi, setapiPubKey, setApiSecKey } from '../../utils/api';
import { API_URL_TRANSFER_FUNDS } from '../../utils/constants';

type TransactionData = {
  amount: number;
  recipient: string;
  coin: string;
  blockchain: string;
  apiPubKey: string;
  apiSecKey: string;
};

export default async function(args: TransactionData) {
  const { amount, recipient, coin, blockchain, apiPubKey, apiSecKey } = args;

  try {
    await setapiPubKey(apiPubKey);
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.post(API_URL_TRANSFER_FUNDS, {
      amount,
      recipient,
      coin,
      blockchain,
    });

    return response?.data;
  } catch (err) {
    return err;
  }
}
