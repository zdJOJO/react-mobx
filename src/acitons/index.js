/**
 * 
 * 只在Action中操作数据
 * 
*/
import mobxStates from '../store';

import HelloAction from './hellowAction';

const actions = {
  helloAction: new HelloAction(mobxStates)
};

export default actions;