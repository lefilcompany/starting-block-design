'use client';

import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Search, Bell, Settings, User, LogOut, Info, FileText, Shield } from 'lucide-react';
import Link from 'next/link';

export default function TopBar() {
  return (
    <header className="flex h-20 items-center justify-between shadow-sm shadow-primary/10 bg-card px-4 md:px-8 flex-shrink-0">
      <div className="relative flex-1 max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Pesquisar..."
          className="w-full rounded-full pl-10 pr-4 py-2 text-base"
        />
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notificações</span>
        </Button>
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Configurações</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Info className="mr-2 h-4 w-4" />
                <span>Sobre o Creator</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>Termos de Serviço</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Shield className="mr-2 h-4 w-4" />
                <span>Política de Privacidade</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DialogTrigger asChild>
                <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair da Conta</span>
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>

          <DialogContent>
            <DialogHeader className="items-center text-center">
              <Image
                src="/assets/logoCreatorPreta.png"
                alt="Logo Creator"
                width={120}
                height={32}
                className="mb-4"
              />
              <DialogTitle className="text-2xl">Você tem certeza que deseja sair?</DialogTitle>
              <DialogDescription>
                Você precisará fazer login novamente para acessar sua conta e continuar criando conteúdo.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex-col-reverse sm:flex-row gap-2">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="w-full rounded-full hover:border-accent">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="button" variant="destructive" className="w-full rounded-full">
                Sair da Conta
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Link href="/perfil" 
        className="flex h-10 w-10 items-center justify-center rounded-full 
        bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg"
        >
          <User className="h-6 w-6" />
          <span className="sr-only">Perfil</span>
        </Link>
      </div>
    </header>
  );
}

//Topbar com mudança de tema

// 'use client';
// import Image from 'next/image';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
//   DropdownMenuSub, // ADICIONADO
//   DropdownMenuSubContent, // ADICIONADO
//   DropdownMenuSubTrigger, // ADICIONADO
//   DropdownMenuPortal, // ADICIONADO
// } from '@/components/ui/dropdown-menu';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogClose,
// } from '@/components/ui/dialog';
// // ÍCONES ADICIONADOS
// import { Search, Bell, Settings, User, LogOut, Info, FileText, Shield, Sun, Moon } from 'lucide-react'; 
// import Link from 'next/link';
// import { useTheme } from 'next-themes'; // IMPORT ADICIONADO

// export default function TopBar() {
//   const { setTheme } = useTheme(); // HOOK ADICIONADO

//   return (
//     <header className="flex h-20 items-center justify-between shadow-sm shadow-primary/10 bg-card px-4 md:px-8 flex-shrink-0">
//       {/* Barra de Pesquisa (sem alterações) */}
//       <div className="relative flex-1 max-w-xl">
//         <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//         <Input
//           placeholder="Pesquisar..."
//           className="w-full rounded-full pl-10 pr-4 py-2 text-base"
//         />
//       </div>

//       {/* Ícones de Ação (com adições) */}
//       <div className="flex items-center gap-3 md:gap-4">
//         <Button variant="ghost" size="icon" className="rounded-full">
//           <Bell className="h-5 w-5" />
//           <span className="sr-only">Notificações</span>
//         </Button>
        
//         <Dialog>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon" className="rounded-full">
//                 <Settings className="h-5 w-5" />
//                 <span className="sr-only">Configurações</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-56">
              
//               {/* ===== INÍCIO DA ADIÇÃO DO BOTÃO DE TEMA ===== */}
//               <DropdownMenuSub>
//                 <DropdownMenuSubTrigger>
//                   <Sun className="h-4 w-4 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                   <Moon className="absolute h-4 w-4 mr-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                   <span>Alterar Tema</span>
//                 </DropdownMenuSubTrigger>
//                 <DropdownMenuPortal>
//                   <DropdownMenuSubContent>
//                     <DropdownMenuItem onClick={() => setTheme("light")}>
//                       Claro
//                     </DropdownMenuItem>
//                     <DropdownMenuItem onClick={() => setTheme("dark")}>
//                       Escuro
//                     </DropdownMenuItem>
//                     <DropdownMenuItem onClick={() => setTheme("system")}>
//                       Sistema
//                     </DropdownMenuItem>
//                   </DropdownMenuSubContent>
//                 </DropdownMenuPortal>
//               </DropdownMenuSub>
//               {/* ===== FIM DA ADIÇÃO DO BOTÃO DE TEMA ===== */}

//               <DropdownMenuItem>
//                 <Info className="mr-2 h-4 w-4" />
//                 <span>Sobre o Creator</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <FileText className="mr-2 h-4 w-4" />
//                 <span>Termos de Serviço</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Shield className="mr-2 h-4 w-4" />
//                 <span>Política de Privacidade</span>
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DialogTrigger asChild>
//                 <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10">
//                   <LogOut className="mr-2 h-4 w-4" />
//                   <span>Sair da Conta</span>
//                 </DropdownMenuItem>
//               </DialogTrigger>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* Dialog de Sair (sem alterações) */}
//           <DialogContent>
//             {/* ... seu conteúdo do Dialog ... */}
//           </DialogContent>
//         </Dialog>
        
//         {/* Perfil (sem alterações) */}
//         <Link href="/perfil" 
//           className="flex h-10 w-10 items-center justify-center rounded-full 
//           bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg"
//         >
//           <User className="h-6 w-6" />
//           <span className="sr-only">Perfil</span>
//         </Link>
//       </div>
//     </header>
//   );
// }