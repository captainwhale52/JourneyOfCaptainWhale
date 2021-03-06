import Immutable from 'seamless-immutable';
import store from "./../store";
import * as THREE from 'three';

const defaultState = {
  fetching: false,
  fetched: false,
  error: null,
  coordinate: [0, 0],
  sailing: false,
  address: "South Atlantic Ocean",
  vertices: [
    {coordinate: [0, 0], address: "South Atlantic Ocean"}, // 0
    {coordinate: [-20.205723, 1.314645], address: "South Atlantic Ocean"}, // 1
    {coordinate: [-46.701567, 14.951449], address: "South Atlantic Ocean"},  // 2
    {coordinate: [-13.138559, -24.876761], address: "South Atlantic Ocean"},  // 3
    {coordinate: [-39.393039, -46.220425], address: "South Atlantic Ocean"},  // 4
    {coordinate: [-59.574031, -62.123711], address: "Drake Passage"},  // 5
    {coordinate: [-36.519646, -17.299493], address: "South Atlantic Ocean"},  // 6
    {coordinate: [-64.807506, 3.970038], address: "South Atlantic Ocean"},  // 7
    {coordinate: [-59.335538, 57.234591], address: "Indian Ocean"},  // 8
    {coordinate: [-34.333600, 45.361605], address: "Indian Ocean"},  // 9
    {coordinate: [-35.381290, 79.731756], address: "Indian Ocean"},  // 10
    {coordinate: [-4.175708, 78.152559], address: "Indian Ocean"},  // 11
    {coordinate: [3.241240, 64.173861], address: "Arabian Sea"},  // 12
    {coordinate: [-22.032872, 61.888705], address: "Indian Ocean"},  // 13
    {coordinate: [-11.944038, 102.407537], address: "Indian Ocean"},  // 14
    {coordinate: [-42.516035, 105.206815], address: "Indian Ocean"},  // 15
    {coordinate: [-49.775118, 154.614569], address: "Indian Ocean"},  // 16
    {coordinate: [-59.648133, -138.547013], address: "South Pacific Ocean"},  // 17
    {coordinate: [-21.558644, 172.192694], address: "Coral Sea"},  // 18
    {coordinate: [-40.542391, -160.222873], address: "South Pacific Ocean"},  // 19
    {coordinate: [-43.416412, -96.062718], address: "South Pacific Ocean"},  // 20
    {coordinate: [-23.033474, -87.976779], address: "South Pacific Ocean"},  // 21
    {coordinate: [0.226054, -96.765841], address: "North Pacific Ocean"},  // 22
    {coordinate: [-24.470439, -130.854181], address: "North Pacific Ocean"},  // 23
    {coordinate: [11.916546, -119.793185], address: "North Pacific Ocean"},  // 24
    {coordinate: [38.174089, -137.547091], address: "North Pacific Ocean"},  // 25
    {coordinate: [23.782039, -176.557305], address: "North Pacific Ocean"},  // 26
    {coordinate: [8.816369, 159.009101], address: "North Pacific Ocean"},  // 27
    {coordinate: [22.239117, 134.306920], address: "Bering Sea"},  // 28
    {coordinate: [6.377223, 134.399727], address: "North Pacific Ocean"},  // 29
    {coordinate: [50.329130, 150.044258], address: "Bering Sea"},  // 30
    {coordinate: [32.371465, 148.193638], address: "North Pacific Ocean"},  // 31
    {coordinate: [43.259344, -164.043178], address: "North Pacific Ocean"},  // 32
    {coordinate: [54.006266, 178.906041], address: "North Pacific Ocean"},  // 33
    {coordinate: [1.819812, -151.596368], address: "North Pacific Ocean"},  // 34
    {coordinate: [7.424255, 111.020821], address: "Philippine Sea"},  // 35
    {coordinate: [15.892431, -47.376760], address: "North Atlantic Ocean"},  // 36
    {coordinate: [30.572518, -70.302457], address: "North Atlantic Ocean"},  // 37
    {coordinate: [41.878431, -48.154020], address: "North Atlantic Ocean"},  // 38
    {coordinate: [60.107644, -14.149403], address: "North Atlantic Ocean"},  // 39
    {coordinate: [40.124110, -20.658011], address: "North Atlantic Ocean"},  // 40
    {coordinate: [18.710967, -22.999540], address: "North Atlantic Ocean"},  // 41
    {coordinate: [-2.201398, -9.575560], address: "Gulf of Guinea"},  // 42
    {coordinate: [75.745908, 35.005148], address: "Arctic Ocean"},  // 43
    {coordinate: [-59.735518, 126.835618], address: "Indian Ocean"},  // 44
  ],
  edges: [
    //                 9  10               19 20                29  30               39  40
    [0,1,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,1,0,0],  // 0
    [1,0,1,0,0,0,1,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 1
    [0,1,0,0,0,0,1,1,1,1, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 2
    [0,0,0,0,1,0,1,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,1,0,0,0, 0,1,1,0,0],  // 3
    [0,0,0,1,0,1,1,1,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 4
    [0,0,0,0,1,0,0,1,0,0, 0,0,0,0,0,0,0,0,0,1, 1,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 5
    [0,1,1,1,1,1,0,1,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 6
    [0,0,1,0,1,1,1,0,1,1, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 7
    [0,0,1,0,0,0,0,1,0,1, 1,0,0,0,0,1,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,1],  // 8
    [0,0,1,0,0,0,0,1,1,0, 1,0,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 9
    //                 9  10               19 20                29  30               39  40
    [0,0,0,0,0,0,0,0,1,1, 0,1,0,1,1,1,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,1],  // 10
    [0,0,0,0,0,0,0,0,0,0, 1,0,1,1,1,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 11
    [0,0,0,0,0,0,0,0,0,0, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 12
    [0,0,0,0,0,0,0,0,0,1, 1,1,1,0,1,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 13
    [0,0,0,0,0,0,0,0,0,0, 1,1,0,1,0,1,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 14
    [0,0,0,0,0,0,0,0,1,0, 1,0,0,0,1,0,1,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,1],  // 15
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,0,1,1,1, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,1],  // 16
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,1,0,0,1, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,1],  // 17
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,1,0,0,1, 0,0,0,1,0,0,1,1,0,0, 0,0,0,0,1,0,0,0,0,0, 0,0,0,0,0],  // 18
    [0,0,0,0,0,1,0,0,0,0, 0,0,0,0,0,0,1,1,1,0, 1,0,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 19
    //                 9  10               19 20                29  30               39  40
    [0,0,0,0,0,1,0,0,0,0, 0,0,0,0,0,0,0,1,0,1, 0,1,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 20
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 1,0,1,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 21
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,1,0,1,1,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 22
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,1, 1,1,1,0,1,0,0,0,0,0, 0,0,0,0,1,0,0,0,0,0, 0,0,0,0,0],  // 23
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,1,1,0,1,0,0,0,0, 0,0,0,0,1,0,0,0,0,0, 0,0,0,0,0],  // 24
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,1,0,1,0,0,0, 0,0,0,1,1,0,0,0,0,0, 0,0,0,0,0],  // 25
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,1,0, 0,0,0,0,1,1,0,1,0,0, 1,1,1,0,1,0,0,0,0,0, 0,0,0,0,0],  // 26
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,1,0, 0,0,0,0,0,0,1,0,1,1, 0,1,1,0,0,0,0,0,0,0, 0,0,0,0,0],  // 27
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,1,0,1, 0,1,0,0,0,1,0,0,0,0, 0,0,0,0,0],  // 28
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,1,1,0, 0,1,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 29
    //                 9  10               19 20                29  30               39  40
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,1,1,0,0, 0,1,1,0,0,0,0,0,0,0, 0,0,0,0,0],  // 30
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,1,1,1,1, 1,0,1,0,0,0,0,0,0,0, 0,0,0,0,0],  // 31
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,0,0,0, 1,1,0,1,0,0,0,0,0,0, 0,0,0,0,0],  // 32
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,0,0,0,0, 0,0,1,0,1,0,0,0,0,0, 0,0,0,0,0],  // 33
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,1,0, 0,0,0,1,1,1,1,1,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 34
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,1,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],  // 35
    [0,0,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,1,1,0, 1,1,0,0,0],  // 36
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,1,0,1,0, 0,1,0,0,0],  // 37
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,1,1,0,1, 1,1,0,0,0],  // 38
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,1,0, 1,1,0,1,0],  // 39
    //                 9  10               19 20                29  30               39  40
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,1,1, 0,1,0,0,0],  // 40
    [0,0,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,1,0,1,0, 1,0,1,0,0],  // 41
    [1,0,0,1,0,0,1,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,1,0,0,0],  // 42
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,1, 0,0,0,0,0],  // 43
    [0,0,0,0,0,0,0,0,1,0, 1,0,0,0,0,1,1,1,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0]   // 44
  ],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_SHIP_ADDRESS": {
      return {...state, coordinate: action.payload.coordinate, address: action.payload.address};
    }
    case "SET_SAILING": {
      return {...state, sailing: action.payload};
    }
  }
  return state;
};
