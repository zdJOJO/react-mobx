import { observable } from "mobx";

export default class Graph {

  baseModel = {
    nodeDataArray: [],
    linkDataArray: []
  };

  @observable logicDiagrams = [
    {
      id: 1,
      name: "一个例子",
      model: {
        nodeDataArray: [
          {"text":"Start", "figure":"Circle", "fill":"#00AD5F", "key":-1, "loc":"210 140"},
          {"text":"Comment", "figure":"RoundedRectangle",  "fill":"lightyellow", "key":-2, "loc":"410 140"},
          {"text":"???", "figure":"Diamond", "fill":"lightskyblue", "key":-4, "loc":"290 270"}
        ],
        linkDataArray: [
          {"from":-1, "to":-2, "fromPort":"B", "toPort":"T", color: "green", text: "测测测测测"},
          {"from":-1, "to":-4, "fromPort":"B", "toPort":"T", color: "red", text: "隐藏一场"}
        ]
      }
    },
    {
      id: 2,
      name: "例子2：乙二醇逻辑图",
      model: {
        "nodeDataArray": [ 
          {"text":"原油", "key":-2, "loc":"140 -540", "size":"94 33.875448608398436", fill:"red"},
          {"text":"天然气/页岩气", "key":-3, "loc":"131 -410", "size":"117 33.875448608398436"},
          {"text":"乙烷", "key":-5, "loc":"300 -450"},
          {"text":"甲醇", "key":-6, "loc":"300 -370"},
          {"text":"乙烯", "key":-7, "loc":"460 -400"},
          {"text":"石脑油", "key":-8, "loc":"300 -540", "size":"94 33.875448608398436"},
          {"text":"环氧乙烷", "key":-9, "loc":"580 -400"},
          {"text":"乙醇", "figure":"RoundedRectangle", "fill":"lightyellow", "key":-10, "loc":"740 -400", "size":"91.12486776197981 282"}
        ],
        "linkDataArray": [ 
          {"from":-3, "to":-5, "fromPort":"", "toPort":"L", "points":[189.5,-410,199.5,-410,232.92000579833984,-410,232.92000579833984,-450,266.3400115966797,-450,276.3400115966797,-450]},
          {"from":-3, "to":-6, "fromPort":"R", "toPort":"L", "points":[189.5,-410,199.5,-410,232.92000579833984,-410,232.92000579833984,-370,266.3400115966797,-370,276.3400115966797,-370]},
          {"from":-2, "to":-8, "fromPort":"R", "toPort":"L", "points":[187,-540,197,-540,220,-540,220,-540,243,-540,253,-540]},
          {"from":-8, "to":-7, "fromPort":"R", "toPort":"T", "points":[347,-540,357,-540,460,-540,460,-483.46886215209963,460,-426.9377243041992,460,-416.9377243041992]},
          {"from":-5, "to":-7, "fromPort":"R", "toPort":"L", "points":[323.6599884033203,-450,333.6599884033203,-450,380,-450,380,-400,426.3400115966797,-400,436.3400115966797,-400]},
          {"from":-6, "to":-7, "fromPort":"R", "toPort":"L", "points":[323.6599884033203,-370,333.6599884033203,-370,380,-370,380,-400,426.3400115966797,-400,436.3400115966797,-400]},
          {"from":-7, "to":-9, "fromPort":"R", "toPort":"L", "points":[483.6599884033203,-400,493.6599884033203,-400,512.6700057983398,-400,512.6700057983398,-400,531.6800231933594,-400,541.6800231933594,-400]},
          {"from":-9, "to":-10, "fromPort":"", "toPort":"L", "points":[618.3199768066406,-400,628.3199768066406,-400,656.3787714628254,-400,656.3787714628254,-400,684.4375661190101,-400,694.4375661190101,-400]}
        ]
      }
    }
  ];


  @observable selectGraphId = this.logicDiagrams[0].id;

  @observable selectNode;

  @observable selectEdge;

  @observable newGraphName = "";


}