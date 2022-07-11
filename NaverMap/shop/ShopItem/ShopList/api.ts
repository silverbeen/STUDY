/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
  async getFieldApi() {
    const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/rest/trtpList`);

    return res.data.response;
  },
  async getShopsListApi(option: string) {
    const res = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/rest/shopList/${option}`
    );

    return res.data.response;
  },
};
