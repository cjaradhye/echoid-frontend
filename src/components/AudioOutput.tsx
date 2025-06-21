
import React, { useState } from 'react';
import { Play, Pause, Download, Volume2 } from 'lucide-react';

interface AudioOutputProps {
  isGenerating: boolean;
  hasOutput: boolean;
  outputText: string;
}

const AudioOutput: React.FC<AudioOutputProps> = ({ isGenerating, hasOutput, outputText }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Here you would implement actual audio playback
    console.log('Play/Pause audio');
  };

  const handleDownload = () => {
    // Here you would implement audio download
    console.log('Download audio');
  };

  if (isGenerating) {
    return (
      <div className="w-full bg-echoid-mint rounded-3xl p-8 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-echoid-lavender border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg font-medium text-gray-700">
            Generating your emotional voice...
          </p>
          <p className="text-sm text-gray-500">
            This may take a few moments
          </p>
        </div>
      </div>
    );
  }

  if (!hasOutput) {
    return (
      <div className="w-full bg-gray-50 rounded-3xl p-8 text-center border-2 border-dashed border-gray-200">
        <Volume2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-lg font-medium text-gray-500">
          Your transformed voice will appear here
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Upload a voice sample and add your message to get started
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-echoid-mint rounded-3xl p-8">
      <div className="flex flex-col space-y-6">
        {/* Waveform visualization placeholder */}
        <div className="flex items-center justify-center h-24 bg-white/50 rounded-2xl">
          <div className="flex items-end space-x-1 h-16">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className={`w-1 bg-echoid-lavender rounded-full transition-all duration-300 ${
                  isPlaying ? 'animate-pulse' : ''
                }`}
                style={{
                  height: `${Math.random() * 60 + 10}%`,
                  animationDelay: `${i * 50}ms`
                }}
              />
            ))}
          </div>
        </div>

        {/* Generated text */}
        <div className="bg-white/50 rounded-2xl p-4">
          <p className="text-sm font-medium text-gray-600 mb-2">Generated Speech:</p>
          <p className="text-gray-800">{outputText}</p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePlayPause}
            className="flex items-center space-x-2 bg-echoid-lavender hover:bg-echoid-lavender-light text-white px-6 py-3 rounded-2xl transition-all transform hover:scale-105"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
            <span className="font-medium">
              {isPlaying ? 'Pause' : 'Play'}
            </span>
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-2xl border-2 border-gray-200 transition-all transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span className="font-medium">Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioOutput;
