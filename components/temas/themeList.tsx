// components/temas/ThemeList.tsx
'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import type { StrategicTheme } from '@/types/theme';
import type { Brand } from '@/types/brand';

interface ThemeListProps {
  themes: StrategicTheme[];
  brands: Brand[]; // Recebe a lista de marcas
  selectedTheme: StrategicTheme | null;
  onSelectTheme: (theme: StrategicTheme) => void;
}

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
};

export default function ThemeList({ themes, brands, selectedTheme, onSelectTheme }: ThemeListProps) {
  const sortedThemes = useMemo(() => {
    return [...themes].sort((a, b) => a.title.localeCompare(b.title));
  }, [themes]);

  const brandMap = useMemo(() => new Map(brands.map(b => [b.id, b.name])), [brands]);

  return (
    <div className="lg:col-span-2 bg-card p-4 md:p-6 rounded-2xl border-2 border-primary/10 flex flex-col h-full overflow-hidden">
      <h2 className="text-2xl font-semibold text-foreground mb-4 px-2 flex-shrink-0">Todos os temas</h2>
      <div className="overflow-y-auto pr-2 flex-grow">
        <ul className="space-y-3">
          {sortedThemes.map((theme) => (
            <li key={theme.id}>
              <button
                onClick={() => onSelectTheme(theme)}
                className={cn(
                  "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between",
                  selectedTheme?.id === theme.id
                    ? "bg-primary/10 border-primary shadow-md"
                    : "bg-muted/50 border-transparent hover:border-primary/50 hover:bg-primary/5"
                )}
              >
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                    {theme.title.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-foreground">{theme.title}</p>
                    {/* Exibe o nome da marca associada */}
                    <p className="text-sm text-muted-foreground">Marca: {brandMap.get(theme.brandId) || 'Não definida'}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground hidden md:block">
                  Criado em: {formatDate(theme.createdAt)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}