'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { useConfirm } from '@/hooks/use-confirm';
import { SafeUser } from '@/types';
import { LogOut } from 'lucide-react';
import { logout } from '@/actions/logout';
import { cn, getInitials } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

const UserMenu = ({ currentUser }: { currentUser: SafeUser | null }) => {
  const [ConfirmDialog, confirm] = useConfirm('Apakah kamu yakin?', 'Anda akan keluar akun.');
  const handleLogout = async () => {
    try {
      const isConfirmed = await confirm();
      if (isConfirmed) {
        logout();
        toast({
          title: 'Logout Berhasil',
          description: 'Anda telah berhasil keluar dari akun.',
          variant: 'success',
        });
      }
    } catch (error) {
      console.error('Error during logout confirmation:', error);
      toast({
        title: 'Logout Gagal',
        description: 'Terjadi kesalahan saat mencoba keluar dari akun.',
        variant: 'destructive',
      });
    }
  };

  const name = currentUser?.name;
  if (!name) return;
  const nameToNumber = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue = Math.abs(nameToNumber) % 360;
  const color = `hsl(${hue}, 80%, 60%)`;

  return (
    <>
      <ConfirmDialog />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarFallback className={cn(`border-4`)} style={{ backgroundColor: color }}>
              {getInitials(currentUser.name ?? 'Guest')}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" side="bottom">
          <DropdownMenuLabel>
            <p className="text-sm font-bold text-foreground truncate">{currentUser.email}</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {currentUser?.role === 'ADMIN' && (
            <Link href="/admin">
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
            </Link>
          )}
          <DropdownMenuItem asChild onClick={handleLogout} className="cursor-pointer">
            <div className="text-destructive">
              <LogOut className="inline-block mr-2" size={20} />
              Keluar
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserMenu;
