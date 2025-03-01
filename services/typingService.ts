import { shuffle } from "lodash";
import { RefObject } from "react";

export const shuffleCsvData = (data: string[]) => {
  return shuffle(data);
};

export const checkAnswer = (inputValue: string, currentData: string) => {
  return inputValue === currentData;
};

export const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export const handleRestart = (
  setIsCleared: (value: boolean) => void,
  setCsvData: (data: string[]) => void,
  refRawCsvData: RefObject<string[]>,
  inputRef: RefObject<HTMLInputElement>,
  setCorrectAnswers: (value: number) => void,
  setTotalAnswers: (value: number) => void
) => {
  setIsCleared(false);
  setCsvData(shuffleCsvData(refRawCsvData.current || []));
  setCorrectAnswers(0);
  setTotalAnswers(0);
  inputRef.current?.focus();
};
