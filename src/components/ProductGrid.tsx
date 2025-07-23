import { useState } from "react";
import { Filter, Grid, List, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import ProductCard from "./ProductCard";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";

const ProductGrid = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  // Mock product data
  const products = [
    {
      id: '1',
      name: 'Premium Wireless Smartphone with 5G Connectivity',
      price: 699.99,
      originalPrice: 899.99,
      image: productPhone,
      rating: 4.5,
      reviews: 1245,
      seller: 'TechStore Pro',
      isOnSale: true,
      freeShipping: true,
    },
    {
      id: '2',
      name: 'High-Quality Wireless Headphones with Noise Cancellation',
      price: 199.99,
      originalPrice: 299.99,
      image: productHeadphones,
      rating: 4.7,
      reviews: 892,
      seller: 'AudioWorld',
      isOnSale: true,
      freeShipping: true,
    },
    {
      id: '3',
      name: 'Ultra-Thin Laptop 13-inch with 16GB RAM',
      price: 1299.99,
      originalPrice: 1599.99,
      image: productLaptop,
      rating: 4.6,
      reviews: 567,
      seller: 'ComputerHub',
      isOnSale: true,
      freeShipping: true,
    },
    {
      id: '4',
      name: 'Gaming Smartphone with Advanced Cooling System',
      price: 799.99,
      image: productPhone,
      rating: 4.4,
      reviews: 423,
      seller: 'GameTech',
      freeShipping: false,
    },
    {
      id: '5',
      name: 'Professional Studio Headphones',
      price: 349.99,
      originalPrice: 449.99,
      image: productHeadphones,
      rating: 4.8,
      reviews: 234,
      seller: 'StudioGear',
      isOnSale: true,
      freeShipping: true,
    },
    {
      id: '6',
      name: 'Business Laptop with Security Features',
      price: 1099.99,
      image: productLaptop,
      rating: 4.3,
      reviews: 345,
      seller: 'BusinessTech',
      freeShipping: true,
    },
    // Duplicate products for demonstration
    ...Array(6).fill(null).map((_, index) => ({
      id: `${index + 7}`,
      name: `Premium Product ${index + 7}`,
      price: Math.floor(Math.random() * 1000) + 100,
      originalPrice: Math.floor(Math.random() * 1000) + 200,
      image: [productPhone, productHeadphones, productLaptop][index % 3],
      rating: 4 + Math.random(),
      reviews: Math.floor(Math.random() * 1000) + 100,
      seller: ['TechStore', 'AudioWorld', 'ComputerHub', 'GameTech'][index % 4],
      isOnSale: Math.random() > 0.5,
      freeShipping: Math.random() > 0.3,
    }))
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-muted-foreground mt-1">
              Discover our best-selling items and latest arrivals
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-sm">
              {products.length} Products
            </Badge>
          </div>
        </div>

        {/* Filters and sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Category:</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="home">Home & Garden</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Best Rating</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Products
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;