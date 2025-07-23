import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      {/* Newsletter section */}
      <div className="bg-gradient-to-r from-primary to-primary-hover py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-4">
            <h3 className="text-2xl font-bold">Stay Updated with Our Newsletter</h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Get the latest deals, new arrivals, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                MarketPlace
              </h4>
              <p className="text-muted-foreground">
                Your trusted online marketplace for quality products at unbeatable prices. 
                Shop with confidence and enjoy worldwide shipping.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>support@marketplace.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>123 Commerce Street, Business City</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                {[
                  'About Us',
                  'Contact Us',
                  'Terms of Service',
                  'Privacy Policy',
                  'Shipping Info',
                  'Returns & Exchanges',
                  'Size Guide',
                  'FAQ'
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Categories</h4>
              <div className="space-y-2">
                {[
                  'Electronics',
                  'Fashion',
                  'Home & Garden',
                  'Sports & Outdoors',
                  'Beauty & Health',
                  'Books & Media',
                  'Toys & Games',
                  'Automotive'
                ].map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>

            {/* Customer service */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Customer Service</h4>
              <div className="space-y-2">
                {[
                  'Help Center',
                  'Track Your Order',
                  'Payment Options',
                  'Seller Center',
                  'Become a Seller',
                  'Wholesale',
                  'Affiliate Program',
                  'Gift Cards'
                ].map((service) => (
                  <a
                    key={service}
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 MarketPlace. All rights reserved.
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex gap-2">
                {[
                  { Icon: Facebook, href: '#' },
                  { Icon: Twitter, href: '#' },
                  { Icon: Instagram, href: '#' },
                  { Icon: Youtube, href: '#' }
                ].map(({ Icon, href }, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Payment methods */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">We accept:</span>
              <div className="flex gap-1">
                {['VISA', 'MC', 'AMEX', 'PP'].map((method) => (
                  <div
                    key={method}
                    className="bg-white border rounded px-2 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;