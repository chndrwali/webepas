'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

type NumbersType = {
  [key: `${number}-${number}`]: string;
};

type CellValidation = {
  isCorrect?: boolean;
  isChecked: boolean;
};

const CrosswordPuzzle = () => {
  const [puzzle, setPuzzle] = useState(() =>
    Array(15)
      .fill(null)
      .map(() => Array(15).fill(''))
  );
  const [validation, setValidation] = useState<CellValidation[][]>(() =>
    Array(15)
      .fill(null)
      .map(() => Array(15).fill({ isChecked: false }))
  );

  const answers = {
    // Horizontal (Datar)
    '14-0': 'LEMARI',
    '12-1': 'PADAT',
    '9-3': 'DEPOSISI',
    '7-5': 'CAIR',
    '3-0': 'GAS',

    // Vertical (Turun)
    '8-4': 'MENCAIR',
    '8-1': 'KECAP',
    '6-6': 'KALOR',
    '2-10': 'MENYUBLIM',
    '0-0': 'MENGUAP',
  };

  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
    const newPuzzle = puzzle.map((row, i) => (i === rowIndex ? [...row.slice(0, colIndex), value.toUpperCase(), ...row.slice(colIndex + 1)] : [...row]));
    setPuzzle(newPuzzle);
  };

  const isActivePuzzleCell = (rowIndex: number, colIndex: number) => {
    // Horizontal words (Datar)
    const horizontalWords = [
      { row: 14, start: 0, length: 6 }, // LEMARI
      { row: 12, start: 1, length: 5 }, // PADAT
      { row: 9, start: 3, length: 8 }, // DEPOSISI
      { row: 7, start: 5, length: 4 }, // CAIR
      { row: 3, start: 0, length: 3 }, // GAS
    ];

    // Vertical words (Turun)
    const verticalWords = [
      { col: 4, start: 8, length: 7 }, // MENCAIR
      { col: 6, start: 6, length: 5 }, // KALOR
      { col: 1, start: 8, length: 5 }, // KECAP
      { col: 10, start: 2, length: 9 }, // MENYUBLIM
      { col: 0, start: 0, length: 7 }, // MENGUAP
    ];

    return (
      horizontalWords.some((word) => rowIndex === word.row && colIndex >= word.start && colIndex < word.start + word.length) ||
      verticalWords.some((word) => colIndex === word.col && rowIndex >= word.start && rowIndex < word.start + word.length)
    );
  };

  const getClueNumber = (rowIndex: number, colIndex: number) => {
    const numbers: NumbersType = {
      '14-0': '13',
      '12-1': '12',
      '3-0': '2',
      '7-5': '4',
      '9-3': '7',
      '8-4': '6',
      '8-1': '8',
      '6-6': '5',
      '2-10': '3',
      '0-0': '1',
    };

    const key = `${rowIndex}-${colIndex}` as keyof NumbersType;
    return numbers[key];
  };

  const checkAnswers = () => {
    const newValidation = validation.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        if (!isActivePuzzleCell(rowIndex, colIndex)) {
          return { isChecked: false };
        }

        // Check horizontal words
        let isCorrect = false;
        for (const [key, answer] of Object.entries(answers)) {
          const [startRow, startCol] = key.split('-').map(Number);
          const word = answer.split('');

          if (rowIndex === startRow && colIndex >= startCol && colIndex < startCol + word.length) {
            isCorrect = puzzle[rowIndex][colIndex].toUpperCase() === word[colIndex - startCol];
          }

          // Check vertical words
          if (colIndex === startCol && rowIndex >= startRow && rowIndex < startRow + word.length) {
            isCorrect = puzzle[rowIndex][colIndex].toUpperCase() === word[rowIndex - startRow];
          }
        }

        return { isChecked: true, isCorrect };
      })
    );
    setValidation(newValidation);
  };

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
      }}
      className="space-y-4"
    >
      <div className="grid gap-0.5" style={{ gridTemplateColumns: 'repeat(15, minmax(0, 1fr))' }}>
        {puzzle.map((row, rowIndex) =>
          row.map((cell: string, colIndex: number) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`relative aspect-square ${
                isActivePuzzleCell(rowIndex, colIndex)
                  ? `bg-white border ${validation[rowIndex][colIndex].isChecked ? (validation[rowIndex][colIndex].isCorrect ? 'border-green-500' : 'border-red-500') : 'border-gray-300'}`
                  : 'bg-transparent'
              }`}
            >
              {getClueNumber(rowIndex, colIndex) && <span className="absolute -top-2 -left-1 text-[10px] font-medium text-gray-800">{getClueNumber(rowIndex, colIndex)}</span>}
              {isActivePuzzleCell(rowIndex, colIndex) && (
                <input
                  type="text"
                  maxLength={1}
                  className="w-full h-full text-center uppercase font-medium text-gray-800 focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                  value={cell}
                  onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                />
              )}
            </div>
          ))
        )}
      </div>
      <Button onClick={checkAnswers} className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
        Periksa Jawaban
      </Button>
    </motion.div>
  );
};

export default CrosswordPuzzle;
