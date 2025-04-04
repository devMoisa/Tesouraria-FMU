import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/auth-context';
import { Users, CreditCard, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Bem-vindo de volta, {user?.name || 'Usuário'}
        </p>
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/users">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Users className="h-5 w-5 text-muted-foreground" />
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="mt-4">Usuários</CardTitle>
              <CardDescription>Gerencie os usuários do sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">Usuários ativos</p>
            </CardContent>
          </Link>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <Link to="/payments">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="mt-4">Pagamentos</CardTitle>
              <CardDescription>Acompanhe os pagamentos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 25.480,00</div>
              <p className="text-xs text-muted-foreground">Total recebido este mês</p>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
}