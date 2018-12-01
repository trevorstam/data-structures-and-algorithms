const Graph = require('../graph');

const graph = new Graph.Graph();

const ten = new Graph.Vertex(10);
const two = new Graph.Vertex(2);
const six = new Graph.Vertex(6);
const seven = new Graph.Vertex(7);
const three = new Graph.Vertex(3);
const eight = new Graph.Vertex(8);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
// graph.addDirectedEdge(ten, seven);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);