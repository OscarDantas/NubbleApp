import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NA.dEs0-h0BDOJvtQSFeiK5BbRvyMbT-QybP-6r0n5zco5AaVMDQF3DO27eN3ii',
  },
});
