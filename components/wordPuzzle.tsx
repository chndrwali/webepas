'use client';

import { useState } from 'react';
import { ButtonNextPrev } from './button-next-prev';
import { useRouter } from 'next/navigation';
import { gameSounds } from '@/lib/utils';
import { motion } from 'framer-motion';

const words = [
  'SAUS',
  'MADU',
  'LAMPU',
  'MINYAK',
  'MENCAIR',
  'MEMBEKU',
  'MENGUAP',
  'MENGEMBUN',
  'ASAP',
  'GAS',
  'TAS',
  'MASSA',
  'ZAT',
  'SUSU',
  'PENSIL',
  'PIGURA',
  'PADAT',
  'MENGKRISTAL',
  'KAYU',
  'LILIN',
  'KURSI',
  'AIR',
  'UDARA',
  'VOLUME',
  'UAP',
  'BALON',
  'KOPI',
  'MEJA',
  'MENCAIR',
  'MENYUBLIM',
];

const grid = [
  ['A', 'M', 'S', 'M', 'E', 'N', 'G', 'E', 'M', 'B', 'U', 'N', 'M', 'Y', 'Y'],
  ['G', 'S', 'E', 'U', 'D', 'S', 'T', 'A', 'E', 'K', 'U', 'S', 'A', 'U', 'S'],
  ['P', 'F', 'S', 'M', 'S', 'L', 'A', 'P', 'N', 'A', 'P', 'D', 'D', 'T', 'W'],
  ['A', 'A', 'S', 'A', 'B', 'U', 'Z', 'T', 'C', 'Y', 'M', 'E', 'U', 'W', 'M'],
  ['U', 'S', 'N', 'A', 'M', 'E', 'L', 'F', 'A', 'N', 'A', 'S', 'M', 'E', 'I'],
  ['G', 'A', 'O', 'H', 'G', 'I', 'K', 'M', 'I', 'I', 'L', 'E', 'N', 'P', 'B'],
  ['N', 'P', 'T', 'Y', 'E', 'T', 'S', 'U', 'R', 'M', 'J', 'Y', 'O', 'L', 'A'],
  ['E', 'H', 'A', 'P', 'E', 'N', 'S', 'I', 'L', 'A', 'U', 'K', 'I', 'C', 'L'],
  ['M', 'N', 'D', 'C', 'D', 'R', 'G', 'A', 'S', 'B', 'N', 'L', 'U', 'M', 'O'],
  ['F', 'M', 'A', 'J', 'I', 'Z', 'Y', 'Z', 'L', 'O', 'I', 'O', 'B', 'A', 'N'],
  ['R', 'U', 'P', 'A', 'R', 'U', 'G', 'I', 'P', 'N', 'P', 'U', 'Z', 'U', 'P'],
  ['K', 'T', 'C', 'M', 'R', 'E', 'M', 'U', 'L', 'O', 'V', 'E', 'D', 'R', 'U'],
  ['L', 'A', 'T', 'S', 'I', 'R', 'K', 'G', 'N', 'E', 'M', 'A', 'D', 'X', 'M'],
  ['V', 'A', 'Y', 'J', 'H', 'U', 'G', 'Q', 'R', 'B', 'R', 'R', 'I', 'A', 'P'],
  ['O', 'E', 'Z', 'U', 'B', 'F', 'D', 'V', 'G', 'A', 'I', 'S', 'R', 'U', 'K'],
];

type Cell = {
  letter: string;
  selected: boolean;
  isPartOfWord: boolean;
};

type Line = {
  start: { row: number; col: number };
  end: { row: number; col: number };
};

const WordSearchPuzzle = () => {
  const router = useRouter();
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
  const [foundLines, setFoundLines] = useState<Line[]>([]);

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
      gameSounds?.playCorrect();
      setSelectedWords([...selectedWords, foundWord]);

      const newPuzzle = puzzle.map((row) => row.map((cell) => ({ ...cell, selected: false })));
      currentSelection.forEach(({ row, col }) => {
        newPuzzle[row][col].isPartOfWord = true;
      });
      setPuzzle(newPuzzle);
      setFoundLines([
        ...foundLines,
        {
          start: currentSelection[0],
          end: currentSelection[currentSelection.length - 1],
        },
      ]);
    } else {
      gameSounds?.playWrong();
      const newPuzzle = puzzle.map((row) => row.map((cell) => ({ ...cell, selected: false })));
      setPuzzle(newPuzzle);
    }

    setStartCell(null);
    setCurrentSelection([]);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className=" rounded-xl shadow-lg p-6">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            type: 'spring',
            bounce: 0.5,
          }}
          className="text-3xl font-bold text-gray-800 mb-6 text-center"
        >
          Mencari Kata
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <motion.div
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
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                type: 'spring',
                bounce: 0.5,
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
            </motion.div>
            <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
              {foundLines.map((line, index) => {
                const cellWidth = 100 / grid[0].length;
                const cellHeight = 100 / grid.length;

                const x1 = (line.start.col + 0.5) * cellWidth;
                const y1 = (line.start.row + 0.5) * cellHeight;
                const x2 = (line.end.col + 0.5) * cellWidth;
                const y2 = (line.end.row + 0.5) * cellHeight;

                return <line key={index} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke="black" strokeWidth="2" strokeLinecap="round" opacity="0.5" />;
              })}
            </svg>
          </div>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              type: 'spring',
              bounce: 0.5,
            }}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <h2 className="font-semibold text-gray-800 mb-4">Petunjuk</h2>
            <p className="text-sm text-gray-600 mb-4">Tandai dengan menyilang kata di bawah ini mengenai istilah yang ada pada materi sifat dan perubahan wujud benda!</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {words.map((word, index) => (
                <div key={`${word}-${index}`} className={`text-sm px-2 py-1 rounded ${selectedWords.includes(word) ? 'bg-green-100 text-green-800 line-through' : 'text-gray-700'}`}>
                  {word}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <ButtonNextPrev onClick={() => router.back()} isLeft />
      <ButtonNextPrev onClick={() => router.push('/menu/game/baskets')} />
    </div>
  );
};

export default WordSearchPuzzle;
