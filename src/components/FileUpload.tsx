
import React, { useCallback, useState } from 'react';
import { Upload, Music } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  selectedFile?: File;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, selectedFile }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const audioFile = files.find(file => file.type.startsWith('audio/'));
    
    if (audioFile) {
      onFileSelect(audioFile);
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Upload Voice Sample
      </label>
      <div
        className={`file-upload-area relative border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all ${
          isDragging
            ? 'border-echoid-lavender bg-echoid-lavender/10 scale-105'
            : selectedFile
            ? 'border-echoid-peach bg-echoid-peach/10'
            : 'border-gray-300 hover:border-echoid-lavender'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="flex flex-col items-center space-y-4">
          {selectedFile ? (
            <>
              <Music className="w-12 h-12 text-echoid-peach animate-pulse-gentle" />
              <div>
                <p className="text-lg font-medium text-echoid-peach">
                  {selectedFile.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Click or drag to replace
                </p>
              </div>
            </>
          ) : (
            <>
              <Upload className={`w-12 h-12 transition-colors ${
                isDragging ? 'text-echoid-lavender' : 'text-gray-400'
              }`} />
              <div>
                <p className="text-lg font-medium text-gray-700">
                  Drop your voice sample here
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  or click to browse files
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Supports MP3, WAV, M4A
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
