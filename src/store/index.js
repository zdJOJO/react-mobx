/**
 *  
 * Store中只存数据 
 * 
 **/ 

import HelloStore from './helloStore';
import GraphStore from './graphStore';


const mobxStates = {
  hello: new HelloStore,
  graph: new GraphStore
};

export default mobxStates;