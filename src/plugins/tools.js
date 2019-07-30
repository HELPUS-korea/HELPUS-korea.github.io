import _ from 'lodash';
import yaml from 'js-yaml';
import axios from 'axios';

const datas = {
  env: null,
};

const tools = {
  /**
   * get environments
   *
   */
  async getEnv() {
    if (datas.env === null) {
      datas.env = _.flowRight(
        yaml.load,
        _.partial(_.get, _, 'data'),
      )(await axios.get('/environments.yml'));
    }

    return datas.env;
  },
  /**
   * get value by path
   *
   * @param {Object} obj
   * @param {String} path
   */
  getPath(obj, path) {
    return obj !== null ? _.get(obj, path) : '';
  },
};

export default tools;

export const { getEnv } = tools;
export const { getPath } = tools;
