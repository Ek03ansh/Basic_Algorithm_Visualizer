import { connect } from "react-redux";
import Controls from "./Controls.jsx";
import { setArray } from "../../../reducers/array";
import { setAlgorithm } from "../../../reducers/algorithm";
import { setCurrentSorted } from "../../../reducers/sorted";
import { setRunning } from "../../../reducers/running";
import bubbleSort from "../../../algorithms/bubbleSort.js";
import quickSort from "../../../algorithms/quickSort.js";
import heapSort from "../../../algorithms/heapSort.js";
import mergeSort from "../../../algorithms/mergeSort.js";

const mapStateToProps = ({ array, algorithm, isRunning }) => ({
  array,
  algorithm,
  isRunning,
});

const mapDispatchToProps = () => (dispatch) => ({
  generateArray: (length) => {
    let array = [];
    while (array.length < length) {
      array.push(Math.floor(Math.random() * 200) + 10);
    }
    dispatch(setArray(array));
    dispatch(setCurrentSorted([]));
  },

  updateAlgorithm: (algorithm) => {
    dispatch(setAlgorithm(algorithm));
  },

  sort: (algorithm, array, speed) => {
    let doSort =
      algorithm === "/bubble_sort"
        ? bubbleSort
        : algorithm === "/quick_sort"
        ? quickSort
        : algorithm === "/heap_sort"
        ? heapSort
        : algorithm === "/merge_sort"
        ? mergeSort
        : null;
    dispatch(setCurrentSorted([]));
    dispatch(setRunning(true));
    doSort(array, dispatch, speed);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
