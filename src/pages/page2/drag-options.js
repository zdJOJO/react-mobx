
import go from 'gojs';

/**
 * 可伸缩的图标配置
*/
const $ = go.GraphObject.make;

const TopRotatingTool = () => go.RotatingTool.call(this);
go.Diagram.inherit(TopRotatingTool, go.RotatingTool);
/** @override */
TopRotatingTool.prototype.updateAdornments = function(part) {
  go.RotatingTool.prototype.updateAdornments.call(this, part);
  var adornment = part.findAdornment("Rotating");
  if (adornment !== null) {
    adornment.location = part.rotateObject.getDocumentPoint(new go.Spot(0.5, 0, 0, -30));  // above middle top
  }
};
/** @override */
TopRotatingTool.prototype.rotate = function(newangle) {
  go.RotatingTool.prototype.rotate.call(this, newangle + 90);
};
// end of TopRotatingTool class


export const paletteOptions = {
  maxSelectionCount: 1,
  nodeTemplate: nodeTemplate,
  linkTemplate: $(go.Link,
    {
      locationSpot: go.Spot.Center,
      selectionAdornmentTemplate: $(go.Adornment, "Link",
        { locationSpot: go.Spot.Center },
        $(go.Shape, { isPanelMain: true, fill: null, stroke: "deepskyblue", strokeWidth: 0 }),
        $(go.Shape, { toArrow: "Standard", stroke: null }),
      )
    },
    {
      routing: go.Link.AvoidsNodes,
      curve: go.Link.JumpOver,
      corner: 5,
      toShortLength: 4
    },
    new go.Binding("points"),
    $(go.Shape, { isPanelMain: true, strokeWidth: 2 }),  // the link path shape
    $(go.Shape, { toArrow: "Standard", stroke: null }), // the arrowhead
  ),
  model: new go.GraphLinksModel(
    [
      { text: "Start", figure: "Circle", fill: "#00AD5F" },
      { text: "Step" },
      { text: "DB", figure: "Database", fill: "lightgray" },
      { text: "???", figure: "Diamond", fill: "lightskyblue" },
      { text: "End", figure: "Circle", fill: "#CE0620" },
      { text: "Comment", figure: "RoundedRectangle", fill: "lightyellow" }
    ], [
      { 
        points: new go.List(go.Point).addAll([
          new go.Point(0, 0), 
          new go.Point(30, 0),
          new go.Point(30, 40), 
          new go.Point(60, 40)
        ]) 
      }
    ]
  )

};

export const diagramOptions = {
  "draggingTool.dragsLink": true,
  "draggingTool.isGridSnapEnabled": true,
  "linkingTool.isUnconnectedLinkValid": true,
  "linkingTool.portGravity": 20,
  "relinkingTool.isUnconnectedLinkValid": true,
  "relinkingTool.portGravity": 20,
  "relinkingTool.fromHandleArchetype":
    $(go.Shape, "Diamond", { segmentIndex: 0, cursor: "pointer", desiredSize: new go.Size(8, 8), fill: "tomato", stroke: "darkred" }),
  "relinkingTool.toHandleArchetype":
    $(go.Shape, "Diamond", { segmentIndex: -1, cursor: "pointer", desiredSize: new go.Size(8, 8), fill: "darkred", stroke: "tomato" }),
  "linkReshapingTool.handleArchetype":
    $(go.Shape, "Diamond", { desiredSize: new go.Size(7, 7), fill: "lightblue", stroke: "deepskyblue" }),
  rotatingTool: $(TopRotatingTool),  // defined below
  "rotatingTool.snapAngleMultiple": 15,
  "rotatingTool.snapAngleEpsilon": 15,
  "undoManager.isEnabled": true
};

export const makePort = (name, spot, output, input) => $(go.Shape, "Circle", {
  fill: null,  // not seen, by default; set to a translucent gray by showSmallPorts, defined below
  stroke: null,
  desiredSize: new go.Size(7, 7),
  alignment: spot,  // align the port on the main Shape
  alignmentFocus: spot,  // just inside the Shape
  portId: name,  // declare this object to be a "port"
  fromSpot: spot, toSpot: spot,  // declare where links may connect at this port
  fromLinkable: output, toLinkable: input,  // declare whether the user may draw links to/from here
  cursor: "pointer"  // show a different cursor to indicate potential link point
});

export const showSmallPorts = (node, show) => {
  node.ports.each( port => {
    if (port.portId !== "") {  // don't change the default port, which is the big shape
      port.fill = show ? "rgba(0,0,0,.3)" : null;
    }
  });
};

export const nodeSelectionAdornmentTemplate =
  $(go.Adornment, "Auto",
    $(go.Shape, { fill: null, stroke: "deepskyblue", strokeWidth: 1.5, strokeDashArray: [4, 2] }),
    $(go.Placeholder)
  );

export const nodeResizeAdornmentTemplate =
  $(go.Adornment, "Spot",
    { locationSpot: go.Spot.Right },
    $(go.Placeholder),
    $(go.Shape, { alignment: go.Spot.TopLeft, cursor: "nw-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),
    $(go.Shape, { alignment: go.Spot.Top, cursor: "n-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),
    $(go.Shape, { alignment: go.Spot.TopRight, cursor: "ne-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),
    $(go.Shape, { alignment: go.Spot.Left, cursor: "w-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),
    $(go.Shape, { alignment: go.Spot.Right, cursor: "e-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),
    $(go.Shape, { alignment: go.Spot.BottomLeft, cursor: "se-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),
    $(go.Shape, { alignment: go.Spot.Bottom, cursor: "s-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" }),
    $(go.Shape, { alignment: go.Spot.BottomRight, cursor: "sw-resize", desiredSize: new go.Size(6, 6), fill: "lightblue", stroke: "deepskyblue" })
  );


export const nodeRotateAdornmentTemplate =
  $(go.Adornment,
    { locationSpot: go.Spot.Center, locationObjectName: "CIRCLE" },
    $(go.Shape, "Circle", { name: "CIRCLE", cursor: "pointer", desiredSize: new go.Size(7, 7), fill: "lightblue", stroke: "deepskyblue" }),
    $(go.Shape, { geometryString: "M3.5 7 L3.5 30", isGeometryPositioned: true, stroke: "deepskyblue", strokeWidth: 1.5, strokeDashArray: [4, 2] })
  );

export const nodeTemplate = 
  $(go.Node, "Spot",
    { locationSpot: go.Spot.Center },
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
    { selectable: true, selectionAdornmentTemplate: nodeSelectionAdornmentTemplate },
    { resizable: true, resizeObjectName: "PANEL", resizeAdornmentTemplate: nodeResizeAdornmentTemplate },
    { rotatable: true, rotateAdornmentTemplate: nodeRotateAdornmentTemplate },
    new go.Binding("angle").makeTwoWay(),
    $(go.Panel, "Auto",
      { name: "PANEL" },
      new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
      $(go.Shape, "Rectangle", 
        {
          portId: "", // the default port: if no spot on link data, use closest side
          fromLinkable: true, toLinkable: true, cursor: "pointer",
          fill: "white",  // default color
          strokeWidth: 2
        },
        new go.Binding("figure"),
        new go.Binding("fill"),
      ),
      $(go.TextBlock,
        {
          font: "bold 11pt Helvetica, Arial, sans-serif",
          margin: 8,
          maxSize: new go.Size(160, NaN),
          wrap: go.TextBlock.WrapFit,
          editable: true
        },
        new go.Binding("text").makeTwoWay()
      )
    ),
    makePort("T", go.Spot.Top, false, true),
    makePort("L", go.Spot.Left, true, true),
    makePort("R", go.Spot.Right, true, true),
    makePort("B", go.Spot.Bottom, true, false),
    { // handle mouse enter/leave events to show/hide the ports
      mouseEnter: function(e, node) { showSmallPorts(node, true) },
      mouseLeave: function(e, node) { showSmallPorts(node, false) }
    }
  );

export const linkSelectionAdornmentTemplate =
  $(go.Adornment, "Link",
    $(go.Shape,
      // isPanelMain declares that this Shape shares the Link.geometry
      { isPanelMain: true, fill: null, stroke: "deepskyblue", strokeWidth: 0 })  // use selection object's strokeWidth
  );


  /**
   * 创建 
  */
export class MyGraph {

  constructor(PaletteHTMLElement, DiagramHTMLElement){
    this.PaletteHTMLElement = PaletteHTMLElement;
    this.DiagramHTMLElement = DiagramHTMLElement;
  }

  create = () => {
    let diagram = $(go.Diagram, this.DiagramHTMLElement, diagramOptions);

    diagram.nodeTemplate = $(go.Node, "Spot",
      { locationSpot: go.Spot.Center },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
      { selectable: true, selectionAdornmentTemplate: nodeSelectionAdornmentTemplate },
      { resizable: true, resizeObjectName: "PANEL", resizeAdornmentTemplate: nodeResizeAdornmentTemplate },
      { rotatable: true, rotateAdornmentTemplate: nodeRotateAdornmentTemplate },
      new go.Binding("angle").makeTwoWay(),
      // the main object is a Panel that surrounds a TextBlock with a Shape
      $(go.Panel, "Auto",
        { name: "PANEL" },
        new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
        $(go.Shape, "Rectangle",  // default figure
          {
            portId: "", // the default port: if no spot on link data, use closest side
            fromLinkable: true, toLinkable: true, cursor: "pointer",
            fill: "white",  // default color
            strokeWidth: 2
          },
          new go.Binding("figure"),
          new go.Binding("fill")),
        $(go.TextBlock,
          {
            font: "bold 11pt Helvetica, Arial, sans-serif",
            margin: 8,
            maxSize: new go.Size(160, NaN),
            wrap: go.TextBlock.WrapFit,
            editable: true
          },
          new go.Binding("text").makeTwoWay())
      ),
      // four small named ports, one on each side:
      makePort("T", go.Spot.Top, false, true),
      makePort("L", go.Spot.Left, true, true),
      makePort("R", go.Spot.Right, true, true),
      makePort("B", go.Spot.Bottom, true, false),
      { // handle mouse enter/leave events to show/hide the ports
        mouseEnter: function(e, node) { showSmallPorts(node, true) },
        mouseLeave: function(e, node) { showSmallPorts(node, false) }
      }
    ),

    diagram.linkTemplate = $(go.Link,  // the whole link panel
      { selectable: true, selectionAdornmentTemplate: linkSelectionAdornmentTemplate },
      { relinkableFrom: true, relinkableTo: true, reshapable: true },
      {
        routing: go.Link.AvoidsNodes,
        curve: go.Link.JumpOver,
        corner: 5,
        toShortLength: 4
      },
      new go.Binding("points").makeTwoWay(),
      $(go.Shape,  // the link path shape
        { isPanelMain: true, strokeWidth: 2 }),
      $(go.Shape,  // the arrowhead
        { toArrow: "Standard", stroke: null }),
      $(go.Panel, "Auto",
        new go.Binding("visible", "isSelected").ofObject(),
        $(go.Shape, "RoundedRectangle",  // the link shape
          { fill: "#F8F8F8", stroke: null }),
        $(go.TextBlock,
          {
            textAlign: "center",
            font: "10pt helvetica, arial, sans-serif",
            stroke: "#919191",
            margin: 2,
            minSize: new go.Size(10, NaN),
            editable: true
          },
          new go.Binding("text").makeTwoWay())
      )
    );

    let palette = $(go.Palette, this.PaletteHTMLElement, {
      ...paletteOptions,
      nodeTemplateMap: diagram.nodeTemplateMap  // share the templates used by myDiagram
    });

    return diagram;
  }

}