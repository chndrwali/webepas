'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const words = [
  'RADIAL',
  'CAIR',
  'MELELEH',
  'MENCAIR',
  'MENYUBLIM',
  'MENGKRISTAL',
  'DEPOSISI',
  'MENGEMBUUN',
  'UAP',
  'ASAP',
  'UDARA',
  'AIR',
  'GAS',
  'MINYAK',
  'BUKU',
  'PENSIL',
  'KAYU',
  'MADU',
  'MEJA',
  'KURSI',
  'TAS',
  'LAMPU',
  'KOPI',
  'SAUS',
  'SUSU',
  'BALON',
  'LILIN',
  'PIGURA',
  'PARTIKEL',
  'MASSA',
  'ZAT',
  'VOLUME',
];

const grid = [
  ['A', 'M', 'S', 'M', 'E', 'N', 'G', 'E', 'M', 'B', 'U', 'U', 'N', 'Y', 'Y'],
  ['S', 'E', 'N', 'S', 'I', 'T', 'I', 'F', 'I', 'T', 'A', 'S', 'G', 'A', 'S'],
  ['A', 'N', 'U', 'A', 'R', 'G', 'U', 'N', 'A', 'K', 'A', 'N', 'G', 'A', 'S'],
  ['P', 'Y', 'P', 'R', 'T', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
  ['M', 'U', 'A', 'T', 'I', 'K', 'E', 'L', 'P', 'A', 'R', 'T', 'I', 'K', 'E'],
  ['E', 'B', 'R', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'T', 'R', 'S', 'T', 'U'],
  ['N', 'L', 'T', 'K', 'E', 'L', 'A', 'M', 'P', 'U', 'I', 'K', 'E', 'L', 'V'],
  ['G', 'I', 'I', 'E', 'L', 'M', 'N', 'O', 'P', 'Q', 'K', 'S', 'T', 'U', 'O'],
  ['E', 'M', 'K', 'L', 'M', 'E', 'N', 'Y', 'U', 'B', 'E', 'L', 'I', 'M', 'L'],
  ['M', 'M', 'E', 'N', 'G', 'K', 'R', 'I', 'S', 'T', 'A', 'L', 'P', 'E', 'U'],
  ['B', 'A', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'M'],
  ['U', 'S', 'P', 'E', 'N', 'S', 'I', 'L', 'T', 'A', 'S', 'V', 'W', 'X', 'E'],
  ['U', 'S', 'A', 'U', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C'],
  ['N', 'A', 'R', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E'],
  ['P', 'A', 'D', 'A', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D'],
];

type Cell = {
  letter: string;
  selected: boolean;
  isPartOfWord: boolean;
};

const WordSearchPuzzle = () => {
  const [puzzle, setPuzzle] = useState<Cell[][]>(() =>
    grid.map((row) =>
      row.map((letter) => ({
        letter,
        selected: false,
        isPartOfWord: false,
      }))
    )
  );
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [startCell, setStartCell] = useState<{ row: number; col: number } | null>(null);
  const [currentSelection, setCurrentSelection] = useState<{ row: number; col: number }[]>([]);

  const handleCellMouseDown = (row: number, col: number) => {
    setStartCell({ row, col });
    setCurrentSelection([{ row, col }]);
    const newPuzzle = puzzle.map((r) => r.map((cell) => ({ ...cell, selected: false })));
    newPuzzle[row][col].selected = true;
    setPuzzle(newPuzzle);
  };

  const handleCellMouseEnter = (row: number, col: number) => {
    if (!startCell) return;

    const deltaRow = Math.sign(row - startCell.row);
    const deltaCol = Math.sign(col - startCell.col);

    if (deltaRow === 0 && deltaCol === 0) return;

    const newSelection: { row: number; col: number }[] = [];
    let currentRow = startCell.row;
    let currentCol = startCell.col;

    while (currentRow >= 0 && currentRow < grid.length && currentCol >= 0 && currentCol < grid[0].length && (currentRow !== row + deltaRow || currentCol !== col + deltaCol)) {
      newSelection.push({ row: currentRow, col: currentCol });
      currentRow += deltaRow;
      currentCol += deltaCol;
    }

    setCurrentSelection(newSelection);

    const newPuzzle = puzzle.map((r) => r.map((cell) => ({ ...cell, selected: false })));
    newSelection.forEach(({ row: r, col: c }) => {
      newPuzzle[r][c].selected = true;
    });
    setPuzzle(newPuzzle);
  };

  const handleCellMouseUp = () => {
    if (!startCell || currentSelection.length === 0) return;

    const selectedWord = currentSelection.map(({ row, col }) => puzzle[row][col].letter).join('');

    const foundWord = words.find((word) => word === selectedWord || word === selectedWord.split('').reverse().join(''));

    if (foundWord && !selectedWords.includes(foundWord)) {
      setSelectedWords([...selectedWords, foundWord]);

      const newPuzzle = puzzle.map((row) => row.map((cell) => ({ ...cell, selected: false })));
      currentSelection.forEach(({ row, col }) => {
        newPuzzle[row][col].isPartOfWord = true;
      });
      setPuzzle(newPuzzle);
    } else {
      const newPuzzle = puzzle.map((row) => row.map((cell) => ({ ...cell, selected: false })));
      setPuzzle(newPuzzle);
    }

    setStartCell(null);
    setCurrentSelection([]);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Jawaban Silang Kata</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className="grid gap-0.5 select-none"
            style={{ gridTemplateColumns: `repeat(${grid[0].length}, minmax(0, 1fr))` }}
            onMouseLeave={() => {
              if (startCell) {
                const newPuzzle = puzzle.map((row) => row.map((cell) => ({ ...cell, selected: false })));
                setPuzzle(newPuzzle);
                setStartCell(null);
                setCurrentSelection([]);
              }
            }}
          >
            {puzzle.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`aspect-square flex items-center justify-center text-sm font-bold cursor-pointer select-none ${cell.isPartOfWord ? 'bg-green-200' : cell.selected ? 'bg-blue-200' : 'bg-gray-50'} ${
                    cell.isPartOfWord ? 'text-green-800' : 'text-gray-800'
                  } transition-colors duration-150`}
                  onMouseDown={() => handleCellMouseDown(rowIndex, colIndex)}
                  onMouseEnter={() => handleCellMouseEnter(rowIndex, colIndex)}
                  onMouseUp={handleCellMouseUp}
                >
                  {cell.letter}
                </div>
              ))
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-semibold text-gray-800 mb-4">Petunjuk</h2>
            <p className="text-sm text-gray-600 mb-4">Tandai dengan menyilang kata di bawah ini mengenai istilah yang ada pada materi sifat dan perubahan wujud benda!</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {words.map((word, index) => (
                <div key={`${word}-${index}`} className={`text-sm px-2 py-1 rounded ${selectedWords.includes(word) ? 'bg-green-100 text-green-800 line-through' : 'text-gray-700'}`}>
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchPuzzle;
