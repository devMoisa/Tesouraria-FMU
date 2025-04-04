import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth } from '@/contexts/auth-context';
import { Landmark, Users, CreditCard, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export function NavBar() {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link
        to="/users"
        className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setIsOpen(false)}
      >
        <Users className="h-4 w-4" />
        <span>Usuários</span>
      </Link>
      <Link
        to="/payments"
        className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setIsOpen(false)}
      >
        <CreditCard className="h-4 w-4" />
        <span>Pagamentos</span>
      </Link>
    </>
  );

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Landmark className="h-6 w-6" />
            <span className="font-bold text-xl">FMU Tesouraria</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <Button variant="ghost" onClick={logout}>
            Sair
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col space-y-4 mt-6">
                <NavLinks />
                <Button variant="ghost" onClick={() => {
                  logout();
                  setIsOpen(false);
                }}>
                  Sair
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}