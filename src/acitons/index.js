/**
 * 
 * 只在Action中操作数据
 * 
*/
import mobxStates from '../store';

import HelloAction from './hellowAction';
import GraphAction from './graphAction';

const actions = {
  helloAction: new HelloAction(mobxStates.hello),
  graphAction: new GraphAction(mobxStates.graph)
};

export default actions;