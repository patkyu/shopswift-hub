import { useState, useEffect } from "react";
import { Search, ArrowRight, ShoppingBag, Zap, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const slides = [
    {
      title: "Mega Sale Up to 80% Off",
      subtitle: "Shop the best deals of the season",
      cta: "Shop Now",
      bg: "from-primary to-primary-hover"
    },
    {
      title: "Free Shipping Worldwide",
      subtitle: "On orders over $50 - Limited time offer",
      cta: "Explore",
      bg: "from-blue-500 to-blue-600"
    },
    {
      title: "New Arrivals Daily",
      subtitle: "Discover the latest trends and products",
      cta: "Browse",
      bg: "from-green-500 to-green-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative">
      {/* Main hero banner */}
      <div className="relative h-[500px] overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white space-y-6">
            <div className="space-y-2">
              <Badge className="bg-sale text-sale-foreground animate-pulse">
                🔥 Hot Deal Alert
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Shop Smart,
                <br />
                <span className="bg-gradient-to-r from-primary to-warning bg-clip-text text-transparent">
                  Save More
                </span>
              </h1>
              <p className="text-xl text-white/90">
                Discover millions of products at unbeatable prices
              </p>
            </div>

            {/* Search bar */}
            <div className="relative max-w-lg">
              <Input
                type="text"
                placeholder="What are you looking for today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 text-lg border-0 bg-white/95 backdrop-blur rounded-full shadow-lg"
              />
              <Button
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 p-0"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="gradient" size="lg" className="text-lg px-8">
                Start Shopping
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick action cards */}
      <div className="bg-primary-light py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer">
              <div className="bg-gradient-to-br from-primary to-primary-hover p-3 rounded-full">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Daily Deals</h3>
                <p className="text-muted-foreground">Up to 70% off selected items</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer">
              <div className="bg-gradient-to-br from-success to-green-600 p-3 rounded-full">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Flash Sales</h3>
                <p className="text-muted-foreground">Lightning deals every hour</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer">
              <div className="bg-gradient-to-br from-warning to-orange-600 p-3 rounded-full">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">New Arrivals</h3>
                <p className="text-muted-foreground">Fresh products every day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;