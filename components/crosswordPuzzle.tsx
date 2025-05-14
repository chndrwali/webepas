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
    Array(16)
      .fill(null)
      .map(() => Array(16).fill(''))
  );
  const [validation, setValidation] = useState<CellValidation[][]>(() =>
    Array(16)
      .fill(null)
      .map(() => Array(16).fill({ isChecked: false }))
  );
  const [score, setScore] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const answers = {
    // Horizontal (Datar)
    '6-5': 'MENGKRISTAL',
    '10-6': 'CAIR',
    '3-3': 'MENGUAP',
    '1-7': 'GAS',

    // Vertical (Turun)
    '0-15': 'MENYUBLIM',
    '2-13': 'PADAT',
    '1-11': 'MENCAIR',
    '6-9': 'KALOR',
    '1-5': 'MENGEMBUN',
    '1-8': 'ASAP',
  };

  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
    const newPuzzle = puzzle.map((row, i) => (i === rowIndex ? [...row.slice(0, colIndex), value.toUpperCase(), ...row.slice(colIndex + 1)] : [...row]));
    setPuzzle(newPuzzle);

    // Reset score and checked state when user changes an answer
    if (isChecked) {
      setIsChecked(false);
      setScore(0);
    }
  };

  const isActivePuzzleCell = (rowIndex: number, colIndex: number) => {
    // Horizontal words (Datar)
    const horizontalWords = [
      { row: 6, start: 5, length: 10 },
      { row: 3, start: 3, length: 7 },
      { row: 1, start: 7, length: 3 },
      { row: 10, start: 6, length: 4 },
    ];

    // Vertical words (Turun)
    const verticalWords = [
      { col: 15, start: 0, length: 9 },
      { col: 13, start: 2, length: 5 },
      { col: 11, start: 1, length: 7 },
      { col: 9, start: 6, length: 5 },
      { col: 5, start: 1, length: 9 },
      { col: 8, start: 1, length: 4 },
    ];

    return (
      horizontalWords.some((word) => rowIndex === word.row && colIndex >= word.start && colIndex < word.start + word.length) ||
      verticalWords.some((word) => colIndex === word.col && rowIndex >= word.start && rowIndex < word.start + word.length)
    );
  };

  const getClueNumber = (rowIndex: number, colIndex: number) => {
    const numbers: NumbersType = {
      '6-5': '8',
      '10-6': '10',
      '3-3': '7',
      '1-7': '3',

      //
      '0-15': '1',
      '2-13': '6',
      '6-9': '9',
      '1-11': '5',
      '1-5': '2',
      '1-8': '4',
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

        let cellIsCorrect = false;

        // Cek apakah cell ini termasuk bagian dari jawaban tertentu
        for (const [key, answer] of Object.entries(answers)) {
          const [startRow, startCol] = key.split('-').map(Number);
          const word = answer.toUpperCase();

          // Horizontal
          if (rowIndex === startRow && colIndex >= startCol && colIndex < startCol + word.length) {
            const charIndex = colIndex - startCol;
            if (puzzle[rowIndex][colIndex].toUpperCase() === word[charIndex]) {
              cellIsCorrect = true;
            }
            break; // keluar setelah menemukan kata terkait
          }

          // Vertical
          if (colIndex === startCol && rowIndex >= startRow && rowIndex < startRow + word.length) {
            const charIndex = rowIndex - startRow;
            if (puzzle[rowIndex][colIndex].toUpperCase() === word[charIndex]) {
              cellIsCorrect = true;
            }
            break;
          }
        }

        return { isChecked: true, isCorrect: cellIsCorrect };
      })
    );

    setValidation(newValidation);
    setIsChecked(true);

    // Hitung skor berdasarkan setiap kata
    let newScore = 0;

    for (const [key, answer] of Object.entries(answers)) {
      const [startRow, startCol] = key.split('-').map(Number);
      const word = answer.toUpperCase();
      let wordIsCorrect = true;

      for (let i = 0; i < word.length; i++) {
        const userChar = key === '6-5' || key === '10-6' || key === '3-3' || key === '1-7' ? puzzle[startRow][startCol + i] : puzzle[startRow + i][startCol];

        if (userChar.toUpperCase() !== word[i]) {
          wordIsCorrect = false;
          break;
        }
      }

      if (wordIsCorrect) {
        newScore += 10;
      }
    }

    setScore(newScore);
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
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="bg-white rounded-lg p-4 shadow-md mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Skor:</h2>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-600">{score}</span>
            <span className="text-gray-500 ml-1">/100</span>
          </div>
        </div>
        {isChecked && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className={`mt-2 text-sm font-medium ${score === 100 ? 'text-green-600' : 'text-gray-600'}`}>
            {score === 100 ? 'Sempurna! Semua jawaban benar!' : `Anda menjawab ${score / 10} dari 10 soal dengan benar.`}
          </motion.div>
        )}
      </motion.div>
      <div className="grid gap-0.5" style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}>
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
