const {
  Vertex,
  Graph
} = require('../graph');

const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);

describe('Vertex', () => {
  it('should test when vertex is instantiated that it is defined', () => {
    const ten = new Vertex();
    expect(ten).toBeDefined();
  });
  it('should have a value of 5', () => {
    const five = new Vertex(5);
    expect(five.value).toEqual(5);
  });
});

describe('Graph', () => {
  it('should be an instance of Graph', () => {
    const graph = new Graph();
    expect(graph).toBeInstanceOf(Graph);
  });

  describe('addDirectedEdge method', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    const two = new Vertex(2);
    graph.addVertex(ten);
    graph.addVertex(two);
    graph.addDirectedEdge(ten, two);
    it('should add a directed edge', () => {
      expect(graph._adjacencyList.get(ten)[0].vertex.value).toEqual(2);
    });
  });

  describe('getNodes method', () => {
    it('should be defined', () => {
      expect(graph.getNodes()).toBeDefined();
    });
  });

  describe('size method', () => {
    it('should return the size of the graph', () => {
      expect(graph.size()).toEqual(6);
    });
  });

  describe('getNeighbors method', () => {
    it('should return the number of neighbors of a vertex', () => {
      expect(graph.getNeighbors(six).length).toEqual(2);
    });
    it('should return the correct neighbor when there is one neighbor', ()=>{
      expect(graph.getNeighbors(eight)[0].vertex.value).toEqual(7);
    });
    it('should return the correct neighbor when there are 2 neighbors', () => {
      expect(graph.getNeighbors(six)[1].vertex.value).toEqual(8);
    });
  });



});