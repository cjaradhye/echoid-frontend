import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FileUpload from './FileUpload';
import EmotionPicker from './EmotionPicker';
import AudioOutput from './AudioOutput';
import { modifyTextWithEmotion, generateAudio } from '@/lib/api';

const Echoid: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [inputText, setInputText] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasOutput, setHasOutput] = useState(false);
  const [audioOutputUrl, setAudioOutputUrl] = useState<string>('');
  const [modifiedText, setModifiedText] = useState<string>('');

  const handleGenerate = async () => {
    if (!selectedFile || !inputText || !selectedEmotion) {
      return;
    }

    setIsGenerating(true);
    
    try {
      // First, modify the text with emotion using Gemini API
      const modifiedText = await modifyTextWithEmotion(inputText, selectedEmotion);
      setModifiedText(modifiedText);
      console.log('Original text:', inputText);
      console.log('Modified text with emotion:', modifiedText);

      // Then, send the modified text and audio file to FastAPI backend
      const audioBlob = await generateAudio(modifiedText, selectedFile);
      
      // Create a URL for the audio blob to play
      const audioUrl = URL.createObjectURL(audioBlob);
      
      // Store the audio URL for the AudioOutput component
      setAudioOutputUrl(audioUrl);
      setHasOutput(true);
      
      console.log('Audio generation successful');
    } catch (error) {
      console.error('Error generating audio:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsGenerating(false);
    }
  };

  const isReadyToGenerate = selectedFile && inputText.trim() && selectedEmotion;

  return (
    <div className="min-h-screen bg-echoid-ivory">
      {/* Header */}
      <header className="bg-white/50 backdrop-blur-sm border-b border-white/20 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="w-10 h-10 bg-gradient-to-br from-echoid-lavender to-echoid-peach rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-handwritten font-bold text-gray-800">
                Echoid
              </h1>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm text-gray-600 font-medium">
                Transform voices with emotion
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-handwritten font-bold text-gray-800">
              Give your voice a new emotion
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upload a voice sample, type your message, choose how you want it to sound, 
              and let AI transform it with the perfect emotional tone.
            </p>
          </div>

          {/* Input Section */}
          <div className="grid gap-8 md:gap-12">
            {/* File Upload */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg">
              <FileUpload
                onFileSelect={setSelectedFile}
                selectedFile={selectedFile}
              />
            </div>

            {/* Text Input */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What should it say?
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message here... The AI will speak this text in your voice with the chosen emotion."
                className="w-full h-32 p-4 border-2 border-gray-200 rounded-2xl focus:border-echoid-lavender focus:ring-0 resize-none text-gray-800 placeholder-gray-400 transition-colors"
                maxLength={500}
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">
                  Pro tip: Shorter messages work better for emotional accuracy
                </p>
                <span className="text-xs text-gray-400">
                  {inputText.length}/500
                </span>
              </div>
            </div>

            {/* Emotion Picker */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg">
              <EmotionPicker
                selectedEmotion={selectedEmotion}
                onEmotionSelect={setSelectedEmotion}
              />
            </div>

            {/* Generate Button */}
            <div className="text-center">
              <button
                onClick={handleGenerate}
                disabled={!isReadyToGenerate || isGenerating}
                className={`inline-flex items-center space-x-3 px-8 py-4 rounded-3xl font-semibold text-lg transition-all transform ${
                  isReadyToGenerate && !isGenerating
                    ? 'bg-echoid-lavender hover:bg-echoid-lavender-light text-white hover:scale-105 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Sparkles className="w-6 h-6" />
                <span>
                  {isGenerating ? 'Generating...' : 'Transform Voice'}
                </span>
              </button>
              {!isReadyToGenerate && (
                <p className="text-sm text-gray-500 mt-3">
                  Please upload a voice sample, enter text, and choose an emotion
                </p>
              )}
            </div>

            {/* Output Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Your Transformed Voice
              </h3>
              <AudioOutput
                isGenerating={isGenerating}
                hasOutput={hasOutput}
                outputText={modifiedText || inputText}
                audioUrl={audioOutputUrl}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/30 backdrop-blur-sm border-t border-white/20 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-2">
            <p className="text-gray-600 font-handwritten text-lg">
              Made with 🖤 by <a href="https://linkedin.com/in/aradhyeswarup" target="_blank" rel="noopener noreferrer"><img src="./main.png" alt="main" className="center inline-block w-8 h-8 hover:scale-110 transition-all duration-300 drop-shadow-sm" /></a>
            </p>
            <p className="text-sm text-gray-500">
              Echoid - Where technology meets human emotion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Echoid;
