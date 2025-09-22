import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  const handleGetStarted = () => {
    console.log('Navigate to dashboard');
  };

  const handleLearnMore = () => {
    console.log('Navigate to about page');
  };

  return (
    <HeroSection 
      onGetStarted={handleGetStarted}
      onLearnMore={handleLearnMore}
    />
  );
}