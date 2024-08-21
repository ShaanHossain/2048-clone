// import React from 'react';
// import { View, Text, StyleSheet, Animated } from 'react-native';
// import {
//   PanGestureHandlerGestureEvent,
//   State,
// } from 'react-native-gesture-handler';
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#faf8ef',
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   tile: {
//     width: 80,
//     height: 80,
//     margin: 5,
//     backgroundColor: '#cdc1b4',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tileText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#776e65',
//   },
// });
//
// const GRID_SIZE = 4;
//
// const placeRandomTile = (grid: number[][]) => {
//   const emptyTiles = [];
//   for (let row = 0; row < GRID_SIZE; row++) {
//     for (let col = 0; col < GRID_SIZE; col++) {
//       if (grid[row][col] === 0) {
//         emptyTiles.push({ row, col });
//       }
//     }
//   }
//   if (emptyTiles.length > 0) {
//     const { row, col } =
//       emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
//     // eslint-disable-next-line no-param-reassign
//     grid[row][col] = Math.random() < 0.9 ? 2 : 4;
//   }
// };
//
// const initializeGrid = () => {
//   const grid = Array.from({ length: GRID_SIZE }, () =>
//     Array(GRID_SIZE).fill(0),
//   );
//   placeRandomTile(grid);
//   placeRandomTile(grid);
//   return grid;
// };
//
// function Game() {
//   // This will be our 4x4 grid data
//   const [grid, setGrid] = React.useState<number[][]>(initializeGrid);
//
//   const transposeGrid = (inputGrid: number[][]) => {
//     return inputGrid[0].map((_, colIndex) =>
//       inputGrid.map(row => row[colIndex]),
//     );
//   };
//
//   const moveTiles = (direction: 'left' | 'right' | 'up' | 'down') => {
//     let newGrid = [...grid];
//
//     const mergeRow = (row: number[]) => {
//       const newRow = row.filter(val => val !== 0);
//       for (let i = 0; i < newRow.length - 1; i++) {
//         if (newRow[i] === newRow[i + 1]) {
//           newRow[i] *= 2;
//           newRow[i + 1] = 0;
//         }
//       }
//       return newRow.filter(val => val !== 0);
//     };
//
//     const reverseRow = (row: number[]) => row.reverse();
//
//     if (direction === 'left' || direction === 'right') {
//       newGrid = newGrid.map(row => {
//         const mergedRow = mergeRow(
//           direction === 'left' ? row : reverseRow(row),
//         );
//         const filledRow = [
//           ...mergedRow,
//           ...Array(GRID_SIZE - mergedRow.length).fill(0),
//         ];
//         return direction === 'left' ? filledRow : reverseRow(filledRow);
//       });
//     } else if (direction === 'up' || direction === 'down') {
//       newGrid = transposeGrid(newGrid).map(col => {
//         const mergedCol = mergeRow(direction === 'up' ? col : reverseRow(col));
//         const filledCol = [
//           ...mergedCol,
//           ...Array(GRID_SIZE - mergedCol.length).fill(0),
//         ];
//         return direction === 'up' ? filledCol : reverseRow(filledCol);
//       });
//       newGrid = transposeGrid(newGrid);
//     }
//
//     setGrid(newGrid);
//     placeRandomTile(newGrid);
//   };
//
//   const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
//     const { translationX, translationY, state } = event.nativeEvent;
//
//     if (state === State.END) {
//       if (Math.abs(translationX) > Math.abs(translationY)) {
//         if (translationX > 0) {
//           // Swipe right
//           moveTiles('right');
//         } else {
//           // Swipe left
//           moveTiles('left');
//         }
//       } else if (translationY > 0) {
//         // Swipe down
//         moveTiles('down');
//       } else {
//         // Swipe up
//         moveTiles('up');
//       }
//     }
//   };
//
//   const onHandlerStateChange = (event: any) => {
//     if (event.nativeEvent.state === State.END) {
//       // Handle the end of the gesture
//     }
//   };
//
//   return (
//     <Animated.View style={styles.container}>
//       {grid.map((row, rowIndex) => (
//         // eslint-disable-next-line react/no-array-index-key
//         <View key={rowIndex} style={styles.row}>
//           {row.map((value, colIndex) => (
//             // eslint-disable-next-line react/no-array-index-key
//             <View key={colIndex} style={styles.tile}>
//               {value > 0 && <Text style={styles.tileText}>{value}</Text>}
//             </View>
//           ))}
//         </View>
//       ))}
//     </Animated.View>
//   );
// }
//
// export default Game;
