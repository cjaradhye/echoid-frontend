
import React from 'react';

interface EmotionPickerProps {
  selectedEmotion: string;
  onEmotionSelect: (emotion: string) => void;
}

const emotions = [
  { emoji: '😢', label: 'Sad', value: 'sad' },
  { emoji: '😍', label: 'Love', value: 'love' },
  { emoji: '😡', label: 'Angry', value: 'angry' },
  { emoji: '🤩', label: 'Excited', value: 'excited' },
  { emoji: '😌', label: 'Calm', value: 'calm' },
  { emoji: '😄', label: 'Happy', value: 'happy' },
  { emoji: '😮', label: 'Surprised', value: 'surprised' },
  { emoji: '😴', label: 'Tired', value: 'tired' }
];

const EmotionPicker: React.FC<EmotionPickerProps> = ({ selectedEmotion, onEmotionSelect }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Choose Emotion
      </label>
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
        {emotions.map((emotion) => (
          <button
            key={emotion.value}
            onClick={() => onEmotionSelect(emotion.value)}
            className={`emotion-button relative flex flex-col items-center p-4 rounded-2xl border-2 ${
              selectedEmotion === emotion.value
                ? 'border-echoid-lavender bg-echoid-lavender/20 selected'
                : 'border-gray-200 hover:border-echoid-peach hover:bg-echoid-peach/10'
            }`}
            type="button"
          >
            <span className="text-2xl sm:text-3xl mb-1">{emotion.emoji}</span>
            <span className="text-xs font-medium text-gray-600">{emotion.label}</span>
            {selectedEmotion === emotion.value && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-echoid-lavender rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmotionPicker;
