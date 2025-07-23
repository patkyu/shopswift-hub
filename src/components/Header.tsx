import { useState } from "react";
import { Search, ShoppingCart, User, Menu, Heart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems] = useState(3); // Mock cart count

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Top bar */}
      <div className="bg-primary-light border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">🚚 Free shipping on orders over $50</span>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>Seller Center</span>
              <span>|</span>
              <span>Help & Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              MarketPlace
            </h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2 border-2 border-primary/20 focus:border-primary rounded-full"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 p-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Heart className="h-5 w-5" />
              <span className="hidden lg:inline">Wishlist</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Bell className="h-5 w-5" />
              <span className="hidden lg:inline">Notifications</span>
            </Button>

            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden lg:inline">Cart</span>
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-sale">
                  {cartItems}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
              <span className="hidden lg:inline">Account</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Categories bar */}
      <div className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide text-sm">
            <span className="text-primary font-medium whitespace-nowrap">All Categories</span>
            <span className="text-muted-foreground hover:text-primary cursor-pointer whitespace-nowrap transition-colors">Electronics</span>
            <span className="text-muted-foreground hover:text-primary cursor-pointer whitespace-nowrap transition-colors">Fashion</span>
            <span className="text-muted-foreground hover:text-primary cursor-pointer whitespace-nowrap transition-colors">Home & Garden</span>
            <span className="text-muted-foreground hover:text-primary cursor-pointer whitespace-nowrap transition-colors">Sports</span>
            <span className="text-muted-foreground hover:text-primary cursor-pointer whitespace-nowrap transition-colors">Beauty</span>
            <span className="text-muted-foreground hover:text-primary cursor-pointer whitespace-nowrap transition-colors">Books</span>
            <span className="text-muted-foreground hover:text-primary cursor-pointer whitespace-nowrap transition-colors">Toys</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;