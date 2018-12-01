'use strict';

const util = require('util');

class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this._adjacencyList = new Map();
  }

  addVertex(vertex){
    this._adjacencyList.set(vertex, []);
  }

  getNodes(){
    return this._adjacencyList;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      throw new Error('__ERROR__ Invalid Nodes');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      throw new Error('__ERROR__ Invalid Vertex', vertex);
    }
    return [...this._adjacencyList.get(vertex)];
  }

  size(){
    return this._adjacencyList.size;
  }
}

module.exports = {Vertex, Graph, Edge};