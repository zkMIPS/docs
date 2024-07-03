'use client';
import { useState, useEffect } from 'react';
interface ProgressBarProps{
    duration: number
    isStart: boolean
}
const ProgressBar = ({duration, isStart}: ProgressBarProps)=>{
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        if ( !isStart ) {
            setProgress(0);
            return;
        }
        const interval = 100; // Update every 100ms
        const totalIntervals = duration * 1000 / interval;
        let count = 0;
        const timer = setInterval(() => {
          count += 1;
          setProgress((count / totalIntervals) * 100);
          if (count >= totalIntervals) {
            clearInterval(timer);
          }
        }, interval);
        return () => clearInterval(timer);
      }, [duration, isStart]);

    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-1">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${progress}%`}}> </div>
        </div>
    )
}
export default ProgressBar;