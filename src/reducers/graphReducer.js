import Immutable from 'seamless-immutable';
import store from "./../store";
import * as THREE from 'three';

const defaultState = {
  fetching: false,
  fetched: false,
  error: null,
  vertices: [
    {coordinate: [0, 0]}, // 0
    {coordinate: [-11.082826, 7.309882]}, // 1
    {coordinate: [-38.196175, 16.977850]},  // 2
    {coordinate: [-6.916978, -28.022149]},  // 3
    {coordinate: [-36.378250, -48.061211]},  // 4
    {coordinate: [-59.574031, -62.123711]},  // 5
    {coordinate: [-36.519646, -17.299493]},  // 6
    {coordinate: [-64.807506, 3.970038]},  // 7
    {coordinate: [-62.629394, 73.579412]},  // 8
    {coordinate: [-29.297261, 48.266913]},  // 9
    {coordinate: [-35.381290, 79.731756]},  // 10
    {coordinate: [2.206238, 76.743475]},  // 11
    {coordinate: [9.545135, 56.001288]},  // 12
    {coordinate: [-11.599870, 62.505194]},  // 13
    {coordinate: [-11.944038, 102.407537]},  // 14
    {coordinate: [-38.746660, 111.372381]},  // 15
    {coordinate: [-49.775118, 154.614569]},  // 16
    {coordinate: [-72.108805, -167.592462]},  // 17
    {coordinate: [-21.558644, 172.192694]},  // 18
    {coordinate: [-52.014160, -144.037775]},  // 19
    {coordinate: [-47.712192, -94.115900]},  // 20
    {coordinate: [-21.690158, -76.239873]},  // 21
    {coordinate: [2.506524, -85.810674]},  // 22
    {coordinate: [-24.470439, -130.854181]},  // 23
    {coordinate: [18.205048, -113.451837]},  // 24
    {coordinate: [44.132320, -130.326837]},  // 25
    {coordinate: [23.782039, -176.557305]},  // 26
    {coordinate: [8.816369, 159.009101]},  // 27
    {coordinate: [27.427083, 126.489571]},  // 28
    {coordinate: [6.377223, 134.399727]},  // 29
    {coordinate: [50.329130, 150.044258]},  // 30
    {coordinate: [32.005012, 143.716133]},  // 31
    {coordinate: [45.256879, -179.194024]},  // 32
    {coordinate: [55.414493, -161.615899]},  // 33
    {coordinate: [1.819812, -151.596368]},  // 34
    {coordinate: [7.424255, 111.020821]},  // 35
    {coordinate: [16.340640, -59.666893]},  // 36
    {coordinate: [30.008125, -75.949684]},  // 37
    {coordinate: [41.841796, -58.548228]},  // 38
    {coordinate: [61.825318, -31.327380]},  // 39
    {coordinate: [47.070989, -13.304444]},  // 40
    {coordinate: [18.710967, -22.999540]},  // 41
    {coordinate: [-2.201398, -9.575560]},  // 42
    {coordinate: [75.745908, 35.005148]},  // 43
    {coordinate: [-59.735518, 126.835618]},  // 44
  ],
  edges: [
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {

  }
  return state;
};
