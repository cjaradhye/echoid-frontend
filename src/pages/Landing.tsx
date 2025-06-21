
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Volume2, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-echoid-ivory">
      {/* Navigation */}
      <nav className="bg-white/50 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-echoid-lavender to-echoid-peach rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-handwritten font-bold text-gray-800">
                Echoid
              </h1>
            </div>
            <Link to="/app">
              <Button className="bg-echoid-lavender hover:bg-echoid-lavender/80 text-white font-semibold px-6 py-2 rounded-full">
                Try it now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-handwritten font-bold text-gray-800 leading-tight">
              Transform Your Voice
              <br />
              <span className="text-echoid-lavender">With Emotion</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Upload your voice, choose how you want to sound, and let AI create 
              the perfect emotional tone for any message.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/app">
              <Button 
                size="lg" 
                className="bg-echoid-lavender hover:bg-echoid-lavender/80 text-white font-semibold px-8 py-4 rounded-full text-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Creating
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-echoid-lavender text-echoid-lavender hover:bg-echoid-lavender/10 px-8 py-4 rounded-full text-lg"
            >
              <Volume2 className="w-5 h-5 mr-2" />
              Listen to Demo
            </Button>
          </div>
        </div>

        {/* Demo Preview */}
        <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-echoid-peach/20 rounded-2xl flex items-center justify-center mx-auto">
                <Volume2 className="w-8 h-8 text-echoid-peach" />
              </div>
              <h3 className="font-semibold text-gray-800">Upload Voice</h3>
              <p className="text-sm text-gray-600">Share a sample of your voice</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-echoid-lavender/20 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-echoid-lavender" />
              </div>
              <h3 className="font-semibold text-gray-800">Choose Emotion</h3>
              <p className="text-sm text-gray-600">Pick from 8 different emotions</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-echoid-mint/60 rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Get Result</h3>
              <p className="text-sm text-gray-600">Download your transformed voice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/30 backdrop-blur-sm py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-handwritten font-bold text-gray-800">
              Why Choose Echoid?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Express yourself with authentic emotional range using cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: '😢',
                title: 'Emotional Range',
                description: 'Choose from 8 distinct emotions to match your message perfectly'
              },
              {
                emoji: '🎯',
                title: 'Voice Accuracy',
                description: 'Maintains your unique voice characteristics while adding emotion'
              },
              {
                emoji: '⚡',
                title: 'Lightning Fast',
                description: 'Get your transformed voice in seconds, not minutes'
              },
              {
                emoji: '🔒',
                title: 'Privacy First',
                description: 'Your voice samples are processed securely and never stored'
              },
              {
                emoji: '📱',
                title: 'Mobile Ready',
                description: 'Works beautifully on any device, anywhere you go'
              },
              {
                emoji: '🎨',
                title: 'Easy to Use',
                description: 'Intuitive interface designed for creators of all skill levels'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center space-y-4 hover:transform hover:scale-105 transition-all duration-200"
              >
                <div className="text-4xl">{feature.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-echoid-lavender to-echoid-peach rounded-3xl p-12 text-white space-y-6">
            <h2 className="text-4xl sm:text-5xl font-handwritten font-bold">
              Ready to Express Yourself?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of creators who are already using Echoid to bring emotion to their voice.
            </p>
            <Link to="/app">
              <Button 
                size="lg" 
                className="bg-white text-echoid-lavender hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Creating Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/30 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-echoid-lavender to-echoid-peach rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-handwritten font-bold text-gray-800">Echoid</span>
            </div>
            <p className="text-gray-600 font-handwritten text-lg">
              Made with ❤️ for emotional expression
            </p>
            <p className="text-sm text-gray-500">
              Where technology meets human emotion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
